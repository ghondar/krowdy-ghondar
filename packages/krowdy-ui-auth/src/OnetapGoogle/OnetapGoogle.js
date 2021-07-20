import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import GoogleLogin from './GoogleLogin'

const OnetapGoogle = () =>{
  const [ isLoaded, seLoaded ] = useState(false)

  const _handleLoad = () => {
    seLoaded(true)
  }

  const  _handleScriptInject = (_, { scriptTags }) => {
    if(scriptTags) {
      const [ scriptTag ] = scriptTags
      scriptTag.onload = _handleLoad
    }
  }

  return (
    <div>
      <Helmet
        onChangeClientState={_handleScriptInject}
        script={[ { src: 'https://accounts.google.com/gsi/client' } ]}>
      </Helmet>
      <GoogleLogin isLoaded={isLoaded} />
    </div>
  )
}

export default React.memo(OnetapGoogle)
