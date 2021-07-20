/* global google */
import React, { useEffect } from 'react'
import { makeStyles } from '@krowdy-ui/core'
import { useAuth } from '../utils'

const GoogleLogin = ({ isLoaded }) => {
  const classes = useStyles()
  const { onUpdateState, validateSocialNetwork, googleCredentials : { clientId } = {} } = useAuth() || {}

  const _handleResponseGoogle = (response) => {
    const { credential : tokenId } = response

    validateSocialNetwork( 'google', { tokenId })
  }

  useEffect(() => {
    if(isLoaded)
      try {
        google.accounts.id.initialize({
          auto_select          : true,
          callback             : _handleResponseGoogle,
          cancel_on_tap_outside: true,
          client_id            : clientId,
          prompt_parent_id     : 'googleContainer'
        })

        google.accounts.id.prompt(notification => {
          if(notification.isDisplayed())
            onUpdateState({ oneTapGoogleDisplay: true })
          else if(notification.getSkippedReason() === 'user_cancel' || notification.getNotDisplayedReason())
            onUpdateState({ oneTapGoogleDisplay: false })
        })
      } catch (error) {
        console.log(error)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ isLoaded ])

  return (
    <div className={classes.googleContainer} id='googleContainer' />
  )
}

const useStyles = makeStyles(({ zIndex })=>({
  googleContainer: {
    position: 'fixed',
    right   : 20,
    top     : 20,
    zIndex  : zIndex.modal + 1
  }
}), { name: 'GoogleLogin' })

export default React.memo(GoogleLogin)
