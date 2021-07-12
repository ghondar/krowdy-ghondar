import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@krowdy-ui/core'
import LoginContext from './LoginContext'
import AuthClient from '../Client'
import { initialState, updateStorage, defaultTheme } from './utils'

const AuthProvider = ({
  children,
  stateContext = {},
  baseUrl,
  storage = 'localStorage',
  urlLogin,
  theme,
  social:{
    google,
    linkedin,
    microsoft
  } = {},
  referrer,
  clientSecret,
  loginWith = 'only-email'
}) => {
  const authClient  = useRef()
  const iframeRef = useRef()
  const [ state, setState ] = useState(initialState)

  useEffect(() => {
    if(baseUrl) authClient.current = new AuthClient(baseUrl)
  }, [ baseUrl ])

  const sendMessageToLoginApp = useCallback((eventId, credentials) => {
    const iframe = iframeRef ? iframeRef.current : null
    if(iframe)
      iframe.contentWindow.postMessage(
        {
          credentials,
          eventId
        },
        `${urlLogin}/set-credentials`
      )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ urlLogin, iframeRef, iframeRef.current ])

  const _handleVerifySession = useCallback((credentials) =>
    authClient.current.verifySession(credentials).then(res => {
      if(res.success) {
        setState(prev => ({
          ...prev,
          ...credentials
        }))
        updateStorage(storage, credentials)
      }

      return res.success
    }).catch(() => {
      setState(prev => ({
        ...prev,
        error: true
      }))

      return false
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [ authClient, authClient.current ])

  const _handleMessage = useCallback(async ({ data }) => {
    const { success, eventId, credentials } = data

    if(success && eventId === 'authStatus') {
      const successLogin = await _handleVerifySession(credentials)

      setState(prev => ({
        ...prev,
        flowFinished: successLogin,
        loadingAuth : false,
        successLogin
      }))
    } else {
      setState(prev => ({
        ...prev,
        loadingAuth: false
      }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(urlLogin) {
      window.addEventListener('message', _handleMessage, false)

      return () => window.removeEventListener('message', _handleMessage)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleVerifyAccount = useCallback(async (source) => {
    setState(prev=>({
      ...prev,
      loading: true
    }))
    let data
    if(authClient && authClient.current)
      data = await authClient.current.validateAccount(source)

    let result = data

    if(data && data.success) {
      const { hasPassword, success, value, type } = data
      setState(prev => ({
        ...prev,
        typeCode: type
      }))

      result = { hasPassword, success, type, value }
    }

    setState(prev => ({
      ...prev,
      loading: false
    }))

    return result
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleSendVerifyCode = useCallback((source) => {
    if(authClient && authClient.current)
      authClient.current.sendVerifyCode(source)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ authClient ])

  const _handleLoginByPassword = useCallback(async ({ email, password, keepSession }) => {
    setState(prev => ({
      ...prev,
      loading: true
    }))

    let data = {}

    if(authClient && authClient.current)
      data = await authClient.current.loginByPassword({ allowAds: state.allowAds, clientSecret, email, keepSession, password })

    let result = data

    if(data.success) {
      const { accessToken, refreshToken, userId } = data

      updateStorage(storage, { accessToken, iduser: userId, refreshToken })

      setState(prev => ({
        ...prev,
        accessToken,
        flowFinished: true,
        refreshToken,
        successLogin: true,
        userId
      }))

      sendMessageToLoginApp('logged', { accessToken, iduser: userId, refreshToken })

      result = { accessToken, refreshToken, success: true, userId }
    }

    setState(prev => ({
      ...prev,
      loading: false
    }))

    return result
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ authClient ])

  const _handleLoginByCode = useCallback(async ({ code, value, type, keepSession }) => {
    setState(prev => ({
      ...prev,
      loading: true
    }))

    let data
    if(authClient && authClient.current)
      data = await authClient.current.verifyCode({ allowAds: state.allowAds, clientSecret, code, keepSession, type, value })

    let result = data

    if(data.success) {
      const { accessToken, refreshToken, userId, isNew } = data

      updateStorage(storage, { accessToken, iduser: userId, refreshToken })

      setState(prev => ({
        ...prev,
        accessToken,
        flowFinished: !isNew,
        isNew,
        refreshToken,
        userId
      }))

      sendMessageToLoginApp('logged', { accessToken, iduser: userId, refreshToken })

      result = { accessToken, isNew, refreshToken, success: true, userId }
    }

    setState(prev => ({
      ...prev,
      loading: false
    }))

    return result
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleSuccessLogin = useCallback((successLogin) => {
    setState(prev => ({
      ...prev,
      successLogin
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleUpdateAccount = useCallback(async (body) => {
    setState(prev => ({
      ...prev,
      loading: true
    }))

    let data
    if(authClient && authClient.current)
      data = await authClient.current.updateAccount(state.accessToken, body)

    setState(prev => ({
      ...prev,
      loading     : false,
      successLogin: Boolean(data && data.success)
    }))

    return data
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [ state.accessToken ])

  const _handleValidateSocial = useCallback(async (network, response) => {
    const { clientId, tokenId } = response
    if(authClient && authClient.current) {
      const { error, refreshToken, accessToken, userId } = await authClient.current.loginSocialNetwork({
        allowAds   : state.allowAds ? 1 : 0,
        clientId,
        clientSecret,
        keepSession: state.keepSession ? 1 : 0,
        network,
        tokenId
      }, referrer)

      if(!error) {
        updateStorage(storage, { accessToken, iduser: userId, refreshToken })
        setState(prev => ({
          ...prev,
          accessToken,
          flowFinished: true,
          refreshToken,
          successLogin: true,
          userId
        }))
      }
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ authClient, authClient.current ])

  const _handleAllowAds = useCallback(()=>{
    setState(prev => ({
      ...prev,
      allowAds: !prev.allowAds
    }))
  }, [])

  const _handleFlowFinished = useCallback((flowFinished)=>{
    setState(prev => ({
      ...prev,
      flowFinished
    }))
  }, [])

  const createPassword = useCallback(async (password)=>{
    if(authClient && authClient.current) {
      setState(prev => ({
        ...prev,
        loading: true
      }))

      const res = await authClient.current.updatePassword({ accessToken: state.accessToken, password })

      if(!res || !res.success) {
        setState(prev => ({
          ...prev,
          loading: false
        }))

        return { success: false }
      }

      setState(prev => ({
        ...prev,
        flowFinished: true,
        loading     : false,
        successLogin: true
      }))

      return { success: true }
    } else {
      return { success: false }
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ authClient, authClient.current, state.accessToken ])

  const _handleUpdateState = useCallback((data)=>{
    setState(prev=>({
      ...prev,
      ...data
    }))
  }, [])

  return (
    <ThemeProvider theme={theme || defaultTheme}>
      <LoginContext.Provider
        value={{
          ...state,
          ...stateContext,
          googleCredentials    : google,
          linkedinCredentials  : linkedin,
          loginByCode          : _handleLoginByCode,
          loginByPassword      : _handleLoginByPassword,
          loginWith,
          microsoftCredentials : microsoft,
          onAllowAds           : _handleAllowAds,
          onFlowFinished       : _handleFlowFinished,
          onSuccessLogin       : _handleSuccessLogin,
          onUpdatePassword     : createPassword,
          onUpdateState        : _handleUpdateState,
          sendVerifyOrCode     : _handleSendVerifyCode,
          updateAccount        : _handleUpdateAccount,
          validateSocialNetwork: _handleValidateSocial,
          verifyAccount        : _handleVerifyAccount
        }}>
        {
          urlLogin ?
            <iframe
              height='0px'
              ref={iframeRef}
              src={`${urlLogin}/set-credentials`}
              style={{ display: 'none' }}
              title='Alternative login'
              width='0px' /> :
            null
        }
        {children}
      </LoginContext.Provider>
    </ThemeProvider>
  )
}

AuthProvider.propTypes = {
  baseUrl     : PropTypes.string.isRequired,
  children    : PropTypes.any,
  clientSecret: PropTypes.string,
  loginWith   : PropTypes.oneOf([ 'only-email', 'only-phone', 'phone-and-email' ]),
  referrer    : PropTypes.string,
  social      : PropTypes.shape({
    google: PropTypes.shape({
      clientId   : PropTypes.string,
      redirectUri: PropTypes.string
    }),
    linkedin: PropTypes.shape({
      clientId   : PropTypes.string,
      redirectUri: PropTypes.string
    }),
    microsoft: PropTypes.shape({
      clientId   : PropTypes.string,
      redirectUri: PropTypes.string
    })
  }),
  stateContext: PropTypes.any,
  storage     : PropTypes.string,
  theme       : PropTypes.any,
  urlLogin    : PropTypes.string
}

export default React.memo(AuthProvider)
