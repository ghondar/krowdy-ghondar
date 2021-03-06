import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: ({ color }) => {
      switch (color) {
        case 'success': {
          return theme.palette.success.main
        }
        case 'error': {
          return theme.palette.error.main
        }
        case 'primary': {
          return theme.palette.primary.main
        }
        default: {
          return theme.palette.grey[500]
        }
      }
    },
    borderRadius: '50%',
    display     : 'inline-block',
    height      : 8,
    width       : 8
  }
}))

const Dot = ({ color = 'default', title  }) => {
  const classes = useStyles({ color })

  if(title) return <Tooltip title={title}><div className={classes.root} /></Tooltip>

  return (
    <div className={classes.root} />
  )
}

Dot.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
}

export default Dot
