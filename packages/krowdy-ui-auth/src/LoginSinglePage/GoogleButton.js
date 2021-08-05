import React, { useCallback } from 'react'
import GoogleLogin from 'react-google-login'
import { makeStyles, Button, Typography } from '@krowdy-ui/core'
import { IMAGES_SOCIAL, METHODS_SESSION } from './constants'
import { useAuth } from '../utils'

const GoogleButton = () => {
  const classes = useStyles()
  const { googleCredentials = {}, validateSocialNetwork, setLoadingSignIn } = useAuth()

  const _handleSuccess = useCallback((response)=>{
    if(response && response.tokenId) {
      const { tokenId } = response
      validateSocialNetwork('google', { method: METHODS_SESSION['google'], tokenId } )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ validateSocialNetwork, googleCredentials ])

  const _handleFailure = useCallback(()=>{
    setLoadingSignIn(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleRequest = useCallback(() => {
    setLoadingSignIn(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    googleCredentials && googleCredentials.clientId ?
      <GoogleLogin
        clientId={googleCredentials.clientId}
        cookiePolicy='single_host_origin'
        onFailure={_handleFailure}
        onRequest={_handleRequest}
        onSuccess={_handleSuccess}
        redirectUri={googleCredentials.redirectUri}
        render={({ onClick }) => (
          <Button
            className={classes.googleButton}
            onClick={onClick}>
            <img
              alt='googleSocial'
              className={classes.iconGoogle}
              src={IMAGES_SOCIAL['google']} />
            <Typography variant='body2'>Ingresa con Google</Typography>
          </Button>
        )} /> :
      null
  )
}

const useStyles = makeStyles(({ spacing, palette }) => ({
  googleButton: {
    '&:hover': {
      background: '#4285F4'
    },
    alignItems    : 'center',
    background    : '#4285F4',
    borderRadius  : spacing(.5),
    // color de boton de google
    color         : palette.common.white,
    display       : 'flex',
    flex          : 1,
    height        : 40,
    justifyContent: 'center',
    width         : '100%'
  },
  iconGoogle: {
    marginRight: spacing(2),
    marginTop  : spacing(-.5)
  }
}), { name: 'GoogleButton' })

export default React.memo(GoogleButton)

