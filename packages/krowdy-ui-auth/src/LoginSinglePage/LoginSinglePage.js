import React, { useCallback, useState } from 'react'
import { Button, CircularProgress, makeStyles, Typography, useTheme } from '@krowdy-ui/core'
import { ArrowBackIos as ArrowBackIosIcon } from '@material-ui/icons'
import GoogleButton from './GoogleButton'
import MicrosoftButton from './MicrosoftButton'
import LinkedInButton from './LinkedinButton'
import KrowdyOneTap from './KrowdyOneTap'
import Footer from './Footer'
import { useAuth } from '../utils'
import FacebookButton from './FacebookButton'

const getTitleByView = (type, text) => {
  switch (type) {
    case 'main':
      return '¡Te damos la bienvenida!'
    case 'login':
      return 'Ingresa tu correo electrónico'
    case 'password':
      return `Ingresa tu contraseña para ${text}`
    case 'register':
      return 'Registra tus datos'
    case 'verify':
      return 'Verificación de cuenta'
    case 'recovery':
      return 'Restablecer contraseña'
    case 'custom ':
      return String(text)
    case 'newPassword':
      return 'Elige una nueva contraseña'
    default:
      return ''
  }
}

const loginButtonLabels = {
  'only-email'     : 'Ingresa con otro correo',
  'only-phone'     : 'Ingresa con celular',
  'phone-and-email': 'Ingresa con otro correo o celular'
}

const LoginSinglePage = () => {
  const classes = useStyles()
  const { template:{ header:{ logo } = {} } = {} } = useTheme()
  const [ prevViews, setPrevViews ] = useState([])
  const [ currentUser, setCurrentUser ] = useState('')

  const { loginWith, typeView, onChangeView, loadingSignIn } = useAuth()

  const _handleChangeView = useCallback((view) => {
    setPrevViews([ ...prevViews, typeView ])
    onChangeView(view)
  }, [ prevViews, typeView, onChangeView ])

  const _handleCurrentUser = useCallback((text) => {
    setCurrentUser(text)
  }, [])

  const _handleChangePrevView = useCallback(() => {
    const lastView = prevViews[prevViews.length - 1]

    setPrevViews(prevViews.slice(0, prevViews.length - 1))
    onChangeView(lastView)
  }, [ prevViews, onChangeView ])

  const _handleChangeLogin = useCallback(() => {
    _handleChangeView('login')
  }, [ _handleChangeView ])

  return (
    <div className={classes.mainContainer}>
      {
        (typeView !== 'main' && prevViews.length)? (
          <Button
            className={classes.buttonBack}
            onClick={_handleChangePrevView}
            startIcon={<ArrowBackIosIcon fontSize='small' />}>
            Atrás
          </Button>
        ) : null
      }
      <div className={classes.imageContainer}>
        <div className={classes.headerImage}>
          <img alt='abeja-img' src={logo ? logo.source : '//cdn.krowdy.com/media/images/KrowdyLogo2.svg'} />
        </div>
        <Typography className={classes.titleCenter} variant='h5'>
          {getTitleByView(typeView, currentUser)}
        </Typography>
      </div>
      {
        [ 'recovery', 'verify' ].includes(typeView) ? (
          currentUser.indexOf('@') !== -1 ? (
            <Typography className={classes.titleCenter}>
              Te enviamos un código a <strong>{currentUser}</strong>. Recuerda revisar tu carpeta Spam o Notificaciones.
            </Typography>
          ) : (
            <Typography className={classes.titleCenter}>
              Te enviamos un código por SMS a tu celular <strong>{currentUser}</strong>.
            </Typography>
          )
        ) : typeView === 'register' ? (
          <Typography className={classes.titleCenter}>
           Asociaremos este nombre con {currentUser}.
          </Typography>
        ) :  null
      }
      <div className={classes.bodyContainer}>
        {
          typeView === 'main' ? (
            loadingSignIn ? (
              <CircularProgress className={classes.loading} disableShrink size={24} />
            ) : (
              <>
                <GoogleButton />
                <LinkedInButton />
                <MicrosoftButton />
                <FacebookButton />
                <Button
                  className={classes.buttonKrowdy}
                  color='primary'
                  fullWidth
                  onClick={_handleChangeLogin}
                  variant='outlined' >
                  {loginButtonLabels[loginWith]}
                </Button>
              </>
            )
          ) : (
            <KrowdyOneTap
              currentUser={currentUser}
              onChangeUserLogin={_handleCurrentUser}
              typeView={typeView} />
          )
        }
      </div>
      <Footer typeView={typeView} />
    </div>
  )
}

const useStyles = makeStyles(({ spacing }) => ({
  bodyContainer: {
    padding: spacing(3, 0)
  },
  buttonBack: {
    fontWeight: 700,
    left      : 12,
    position  : 'absolute',
    top       : 12
  },
  buttonKrowdy: {
    marginTop: spacing(3)
  },
  headerImage: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'center',
    margin        : spacing(2.5, 0),
    maxHeight     : 64,
    maxWidth      : 150
  },
  imageContainer: {
    alignItems    : 'center',
    display       : 'flex',
    flexDirection : 'column',
    justifyContent: 'center'
  },
  loading: {
    display: 'block',
    margin : '40px auto'
  },
  mainContainer: {
    width: 380
  },
  titleCenter: {
    marginTop: spacing(1.5),
    textAlign: 'center'

  }
}), { name: 'LoginSinglePage' })

export default React.memo(LoginSinglePage)
