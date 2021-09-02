import React, { useCallback, useMemo, useState } from 'react'
import clsx from 'clsx'
import {
  Button,
  Checkbox,
  makeStyles,
  TextField,
  FormControlLabel,
  IconButton,
  Typography,
  CircularProgress
} from '@krowdy-ui/core'
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon
} from '@material-ui/icons'
import GoogleButton from './GoogleButton'
import MicrosoftButton from './MicrosoftButton'
import { useAuth } from '../utils'

const inputLabels = {
  login            : 'Correo o celular',
  newPassword      : 'Nueva contraseña',
  'only-email'     : 'Correo electrónico',
  'only-phone'     : 'Número de celular',
  password         : 'Contraseña',
  'phone-and-email': 'Correo o celular',
  verify           : 'Código de verificación'
}

const errorMessages = {
  newPassword: 'Debe tener mínimo 8 caracteres.',
  password   : 'Contraseña incorrecta. Vuelve a intentarlo o haz click en “¿Olvidaste tu contraseña?”',
  verify     : 'Código de verificación erróneo.'
}

const KrowdyOneTap = ({
  onChangeUserLogin = () => {},
  typeView,
  currentUser
}) => {
  const classes = useStyles()
  const {
    verifyAccount,
    loginByPassword,
    loginByCode,
    typeCode,
    onSuccessLogin,
    updateAccount,
    loading,
    loginWith,
    onUpdatePassword,
    onUpdateState,
    onChangeView
  } = useAuth()
  const [ loginkey, setLoginKey ] = useState(null)
  const [ valueInput, setValueInput ] = useState(typeView === 'login' ? currentUser : '')
  const [ passwordValue, setPasswordValue ] = useState('')
  const [ isErrorLogin, setErrorLogin ] = useState(false)
  const [ showPassword, setShowPassword ] = useState(false)
  const [ keepSession, setKeepSession ] = useState(true)
  const [ register, setRegister ] = useState({})

  const isNextDisabled = useMemo(() => {
    switch (typeView) {
      case 'newPassword':
        return passwordValue.length < 8
      case 'register':
        const { firstName, lastName } = register

        return !(firstName && lastName)
      case 'login':
        if(loginWith === 'only-email') {
          const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

          return !valueInput || !emailRegex.test(valueInput)
        } else {
          return !valueInput
        }
      case 'password':
      case 'recovery':
        return !passwordValue
      default:
        return false
    }
  }, [ typeView, valueInput, register, loginWith, passwordValue ])

  const _handleChangeInput = useCallback(({ target: { value, name } }) => {
    setValueInput(value)
    if(name === 'login' && value) {
      const res = value.split(new RegExp('[ @ | . ]'))

      const domain = res ? res[res.length - 2] : null

      if(domain && 'gmail'.indexOf(domain) !== -1)
        setLoginKey('google')

      else if(domain && ('outlook'.indexOf(domain) !== -1 || 'hotmail'.indexOf(domain) !== -1))
        setLoginKey('microsoft')

      else
        setLoginKey(null)
    }
  }, [])

  const _handleChangePassword = useCallback(({ target:{ value } })=>{
    setPasswordValue(value)
  }, [])

  const _handleChangeRegister = useCallback(({ target:{ value, name } }) => {
    setRegister(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  const _handleNext = useCallback(async (e) => {
    if((e.charCode && e.charCode !== 13) || (isNextDisabled || loading)) return

    switch (typeView) {
      case 'login':
        const { hasPassword, success, value, type } = await verifyAccount(valueInput)
        if(success) {
          onChangeUserLogin(type === 'phone' ? value : valueInput)
          onChangeView(hasPassword ? 'password' : 'verify')
          setLoginKey(null)
        }
        break

      case 'password':
        const { success : isPasswordValid } = await loginByPassword({
          email   : currentUser,
          keepSession,
          password: passwordValue
        })
        setErrorLogin(!isPasswordValid)
        break

      case 'verify':
        const { success: isCodeValid, isNew: isFirstTime } = await loginByCode({
          code : passwordValue,
          keepSession,
          type : typeCode,
          value: currentUser
        })
        setErrorLogin(!isCodeValid)
        if(isCodeValid)
          if(isFirstTime)
            onChangeView('register')
          else onSuccessLogin(true)

        break

      case 'register':
        const { success: successRegister } = await updateAccount(register) || {}
        if(successRegister) {
          setValueInput('')
          setPasswordValue('')
        }
        break

      case 'newPassword':
        const { success: successPasswword } = await onUpdatePassword(passwordValue)

        if(!successPasswword)
          setErrorLogin(true)
        break
      case 'recovery' :
        const { success: isRecoveryValid } = await loginByCode({
          code : passwordValue,
          keepSession,
          type : typeCode,
          value: currentUser
        })
        setErrorLogin(!isRecoveryValid)
        if(isRecoveryValid) {
          setPasswordValue('')
          onChangeView('newPassword')
        }
        break

      default:
        break
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ typeView, onChangeUserLogin, valueInput, onChangeView, register, verifyAccount, isNextDisabled, loading, passwordValue ])

  const _handleClickShowPassword = useCallback(() => {
    setShowPassword(prev => !prev)
  }, [])

  const _handleKeepSession = useCallback(() => {
    setKeepSession(prev =>{
      onUpdateState({ keepSession: !prev })

      return !prev
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ onUpdateState ])

  const _handleResendPassword = useCallback(async ()=>{
    const { success } = await verifyAccount(currentUser, true)
    if(success)
      setErrorLogin(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ currentUser, verifyAccount ])

  const _handleForgotPassword = useCallback(()=>{
    setPasswordValue('')
    onChangeView('recovery')
    verifyAccount(valueInput, true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ verifyAccount, valueInput ])

  return (
    <>
      {/* LOGIN */}
      {
        [ 'password', 'verify', 'recovery', 'newPassword' ].includes(typeView) ? (
          <TextField
            autoFocus
            className={clsx(classes.labelOutlined)}
            error={isErrorLogin}
            FormHelperTextProps={{
              classes: {
                contained: classes.helperText
              }
            }}
            fullWidth
            helperText={isErrorLogin || [ 'recovery', 'newPassword' ].includes(typeView) ? errorMessages[typeView] : null}
            // InputLabelProps={{
            //   classes: {
            //     outlined: classes.outlinedLabel
            //   }
            // }}
            InputProps={{
              className: classes.inputStyle,
              classes  : {
                input: classes.emailInput,
                root : clsx({
                  [classes.colorError]: isErrorLogin
                })
              },
              endAdornment: (
                [ 'password', 'newPassword' ].includes(typeView) ?
                  <IconButton
                    className={classes.iconShowPassword}
                    onClick={_handleClickShowPassword}
                    size='small'>
                    { showPassword ?
                      <VisibilityIcon color='inherit' fontSize='inherit' /> :
                      <VisibilityOffIcon color='inherit' fontSize='inherit' />
                    }
                  </IconButton> : null
              )
            }}
            label={[ 'verify', 'recovery' ].includes(typeView) ? 'Código de verificación': inputLabels[typeView]}
            onChange={_handleChangePassword}
            onKeyPress={_handleNext}
            required
            type={showPassword || [ 'verify', 'recovery' ].includes(typeView) ? 'text' : 'password'}
            value={passwordValue}
            variant='outlined' />
        ) : typeView === 'login' ? (
          <TextField
            autoFocus
            className={clsx(classes.fieldEmail,  classes.labelOutlined)}
            fullWidth
            // InputLabelProps={{
            //   classes: {
            //     root: classes.labelOutlined
            //   }
            // }}
            InputProps={{
              classes: {
                input: classes.emailInput,
                root : classes.textfield
              }
            }}
            label={inputLabels[loginWith]}
            name='login'
            onChange={_handleChangeInput}
            onKeyPress={_handleNext}
            value={valueInput}
            variant='outlined' />
        ) : null
      }

      {/* REGISTRO */}
      {
        typeView === 'register' ? (
          <> <TextField
            autoFocus
            className={clsx(classes.labelOutlined)}
            fullWidth
            // InputLabelProps={{
            //   classes: {
            //     root: classes.labelOutlined
            //   }
            // }}
            InputProps={{
              classes: {
                input: classes.emailInput,
                root : classes.textfield
              }
            }}
            label='Nombres'
            name='firstName'
            onChange={_handleChangeRegister}
            required
            value={register.firstName || ''}
            variant='outlined' />
          <TextField
            className={clsx(classes.fieldEmail,  classes.labelOutlined)}
            fullWidth
            // InputLabelProps={{
            //   classes: {
            //     root: classes.labelOutlined
            //   }
            // }}
            InputProps={{
              classes: {
                input: classes.emailInput,
                root : classes.textfield
              }
            }}
            label='Apellidos'
            name='lastName'
            onChange={_handleChangeRegister}
            required
            value={register.lastName || ''}
            variant='outlined' />
          <TextField
            className={clsx(classes.fieldEmail,  classes.labelOutlined)}
            fullWidth
            // InputLabelProps={{
            //   classes: {
            //     root: classes.labelOutlined
            //   }
            // }}
            InputProps={{
              classes: {
                input: classes.emailInput,
                root : classes.textfield
              }
            }}
            label={currentUser.indexOf('@') !== -1 ? 'Celular (opcional)': 'Correo electrónico (opcional)'}
            name={currentUser.indexOf('@') !== -1 ? 'phone': 'email'}
            onChange={_handleChangeRegister}
            value={register[currentUser.indexOf('@') !== -1 ? 'phone': 'email'] || ''}
            variant='outlined' />
          </>
        ) : null
      }

      {/* VERIFICA DOMINIO DE EMAIL LOGIN Y MUESTRA BOTON EN CASO SEA GOOGLE O MICROSOFT */}
      {
        loginkey === 'google' ? (
          <div className={classes.margintop}>
            <GoogleButton />
          </div>
        ) : loginkey === 'microsoft' ? (
          <div className={classes.margintop}>
            <MicrosoftButton />
          </div>
        ) : null
      }

      {/* CHECKBOX PARA MANTENER SESION ABIERTA */}
      {
        [ 'password', 'verify', 'newPassword' ].includes(typeView) ? (
          <FormControlLabel
            className={classes.labelCheckbox}
            control={<Checkbox
              checked={keepSession}
              color='primary'
              onChange={_handleKeepSession} />}
            label='Mantener mi sesión abierta' />

        ) : null
      }

      {
        typeView === 'newPassword'? (
          <Typography
            align='center'
            className={clsx(classes.textfield, classes.textEnd, classes.nextButton2)}
            color='disabled'>
      No olvides revisar tu contraseña antes de establecerla para
evitar cualquier inconveniente más adelante.
          </Typography>
        ):null
      }
      <Button
        className={clsx({ [classes.nextButton2]: loginkey }, classes.nextButton)}
        color='primary'
        disabled={isNextDisabled || loading}
        fullWidth
        onClick={_handleNext}
        startIcon={
          loading ? <CircularProgress disableShrink size={18} /> : null
        }
        variant='contained' >
      Continuar
      </Button>

      {
        [ 'password', 'verify', 'recovery' ].includes(typeView) ? (
          <div className={classes.endContent}>
            {
              typeView === 'password' ?
                <Button
                  color='primary'
                  onClick={_handleForgotPassword}
                  size='small'>
                 ¿Olvidaste tu contraseña?
                </Button> :
                <>
                  <Typography
                    className={clsx(classes.textfield, classes.textEnd)}
                    color='disabled'>
                ¿No lo encuentras?
                  </Typography>
                  <Button
                    className={classes.capitalizeText}
                    color='primary'
                    onClick={_handleResendPassword}
                    size='small'>
                   Reenviar
                  </Button>
                </>
            }
          </div>
        ) : null
      }
    </>
  )
}

const useStyles = makeStyles(({ spacing, palette }) => ({
  capitalizeText: {
    textTransform: 'capitalize'
  },
  colorError: {
    color: palette.error.main
  },
  emailInput: {
    color  : palette.common.black,
    // fontSize: 14,
    padding: spacing(1.5)
  },
  endContent: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'center',
    marginTop     : spacing(3)
  },
  fieldEmail: {
    marginTop: spacing(1.5)
  },
  helperText: {
    marginLeft: 0
  },
  inputStyle: {
    fontSize: 14
  },
  labelCheckbox: {
    '& > span': {
      fontSize: 14,
      padding : spacing(1, 1, 1, 0)
    },
    margin: spacing(2, 0, 0, 0)
  },
  labelOutlined: {
    '& .MuiInputLabel-outlined': {
      transform: 'translate(8px, 13px) scale(1)'
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(12px, -5px) scale(0.70)'
    }
  },
  margintop: {
    marginTop: spacing(4)
  },
  nextButton: {
    marginTop: spacing(4)
  },
  nextButton2: {
    marginTop: spacing(2)
  },
  outlinedLabel: {
    top: -8
  },
  textEnd: {
    color: palette.grey[600]
  },
  textfield: {
    fontSize: 14
  }
}), { name: 'KrowdyOneTap' })

export default React.memo(KrowdyOneTap)
