/* global google */
import React, { useEffect, useState } from 'react'

const Google = ({
  clientId,
  // urlUri,
  validateSocialNetwork = () => {}
}) => {
  const [ hasError, setHasError ] = useState(1)

  const handleResponseGoogle = (response) => {
    const email = ''// jwt_decode(response.credential)
    validateSocialNetwork(response.credential, 'google', email)
  }

  useEffect(() => {
    if(hasError)
      try {
        google.accounts.id.initialize({
          auto_select          : true,
          callback             : handleResponseGoogle,
          cancel_on_tap_outside: true,
          client_id            : clientId,
          prompt_parent_id     : 'googleContainer'
        })

        google.accounts.id.prompt(notification => {
          if(notification.isDisplayed())
            console.log('LOGUEADOOOO')

          else if(notification.getSkippedReason() === 'user_cancel' || notification.getNotDisplayedReason())
            console.log('🚀 ~ file: Google.js ~ line 18 ~ useEffect ~ notification', notification)

        // setIsSignedIN(false)
        })
        setHasError(null)
      } catch (error) {
        setHasError(prev=> prev + 1)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ hasError ])

  return (
    <div
      // className={classes.googleContainer}
      id='googleContainer' />
  )
}

export default React.memo(Google)
