import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import LoginContext from '../AuthContext/LoginContext'

const initialState = {
  accessToken : '',
  idUser      : '',
  loading     : false,
  refreshToken: ''
}

const reducer = (state, action)=> {
  switch (action.type) {
    case 'UPDATE_FIELD':
      for (let k in state) state[k] = action.payload.value
      break

    case 'ADD_FIELD':
      state[action.payload.key] = action.payload.value
      break

    default:
      break
  }
}

const AuthContext = ({
  children,
  stateContext
}) => {
  const [ state ] = useReducer(reducer, initialState)

  // Verificar sesion y setear al state

  // const _handleUpdateState = useCallback(() => {
  //   dispatch({
  //     type: 'UPDATE_FIELD'
  //   })
  // }, [])

  return (
    <LoginContext.Provider
      value={{
        ...state,
        ...stateContext
      }}>
      {children}
    </LoginContext.Provider>
  )
}
AuthContext.propTypes = {
  children    : PropTypes.any,
  clientId    : PropTypes.string,
  domain      : PropTypes.string,
  redirectUri : PropTypes.bool,
  stateContext: PropTypes.any
}

export default React.memo(AuthContext)
