// import { krowdyTheme, createTheme } from '@krowdy-ui/core'

export const initialState = {
  accessToken        : '',
  allowAds           : true,
  flowFinished       : false,
  iduser             : '',
  isNew              : false,
  keepSession        : true,
  loading            : false,
  loadingAuth        : true,
  oneTapGoogleDisplay: false,
  openBackdrop       : false,
  openPasswordNotify : false,
  refreshToken       : '',
  successLogin       : false,
  typeView           : 'main'
}

// export const defaultTheme = createTheme(krowdyTheme)

export const getStorageData = (storage) => {
  const keys = [ 'accessToken', 'refreshToken', 'iduser' ]
  let credentials = {}
  if(storage ==='localStorage')
    for (const key of keys) {
      const value = localStorage.getItem(key)
      credentials[key] = value
    }

  return credentials
}

export const updateStorage = (storage, objUpd) => {
  if(storage ==='localStorage')
    for (const key in objUpd)
      localStorage.setItem(key, objUpd[key])

  else if(storage ==='cookies')
    for (const key in objUpd)
      document.cookie = `${key}=${objUpd[key]}`
}

export const clearStorage = (storage, arrKeys) => {
  if(storage ==='localStorage')
    arrKeys.forEach((key) => {
      localStorage.removeItem(key)
    })

  else if(storage ==='cookies')
    arrKeys.forEach((key) => {
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
    })
}
