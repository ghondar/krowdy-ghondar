import React from 'react'
import { Paper, makeStyles, IconButton, Button, Typography } from '@krowdy-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

const PasswordNotify = ({
  onCreate = () => {},
  onClose = () => {}
}) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper} variant='elevation' >
      <IconButton
        className={classes.closeButton}
        onClick={onClose}
        size='small'
        variant='outlined'>
        <CloseIcon fontSize='small' />
      </IconButton>
      <Typography variant='body2'>¿Te gustaría crear una contraseña para ingresar con esta cuenta?</Typography>
      <Button
        className={classes.button}
        color='primary'
        onClick={onCreate}
        variant='contained'>Crear una contraseña</Button>
    </Paper>
  )
}
const useStyles = makeStyles(({ palette, spacing, zIndex, breakpoints })=>({
  button: {
    marginTop: spacing(1.25)
  },
  closeButton: {
    position: 'absolute',
    right   : 5,
    top     : 5
  },
  paper: {
    [breakpoints.up('md')]: {
      maxWidth: 324,
      right   : 54,
      top     : 90
    },
    background: palette.common.white,
    maxWidth  : 324,
    padding   : spacing(1.5, 2),
    position  : 'fixed',
    right     : 16,
    top       : 32,
    zIndex    : zIndex.modal + 10
  }
}), { name: 'PasswordNotify' })

export default React.memo(PasswordNotify)
