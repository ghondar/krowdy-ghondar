import { useTheme } from '@krowdy-ui/core'
import { useMemo } from 'react'

const useGetColor = ({ color }) => {
  const theme = useTheme()

  const colorCustom = useMemo(()=> {
    let colorCustom = color
    switch (color) {
      case 'primary': {
        colorCustom = theme.palette.primary.main
        break
      }
      case 'secondary': {
        colorCustom = theme.palette.secondary.main
        break
      }
      case 'custom': {
        if(theme.palette.custom && theme.palette.custom.main) {
          colorCustom = theme.palette.custom.main
          break
        }
        if(!color) colorCustom = theme.palette.primary.main
        break
      }
      default: {
        if(!color) colorCustom = theme.palette.primary.main
        break
      }
    }

    return colorCustom
  }, [ color, theme.palette ])

  return colorCustom
}

export default useGetColor
