import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import GoogleLogin from './GoogleLogin'

const OnetapGoogle = ({
  clientId,
  urlUri,
  validateSocialNetwork = () => {}
}) =>
// const googleRef = useRef()

// const _handleLoad = () => {
//   console.log('sakdhjaskdhajkdhkj')
//   googleRef.current =
// }

// const  _handleScriptInject = ({ scriptTags }) => {
//   if(scriptTags) {
//     const [ scriptTag ] = scriptTags
//     scriptTag.onload = _handleLoad
//   }
// }

  (
    <div>
      <Helmet
        // onChangeClientState={_handleScriptInject}
        script={[ { src: 'https://accounts.google.com/gsi/client' } ]}>
      </Helmet>
      <GoogleLogin
        clientId={clientId}
        urlUri={urlUri}
        validateSocialNetwork={validateSocialNetwork} />
    </div>
  )

export default React.memo(OnetapGoogle)
// onChangeClientState={(newState, addedTags) => {
//   console.log('🚀 ~ file: OnetapGoogle.js ~ line 27 ~ newState', newState)
//   console.log('load')
//   console.log('🚀 ~ file: OnetapGoogle.js ~ line 28 ~ addedTags', addedTags)

//   setGoogleRef(<GoogleLogin
//     clientId={clientId}
//     urlUri={urlUri}
//     validateSocialNetwork={validateSocialNetwork} />)
// }}
