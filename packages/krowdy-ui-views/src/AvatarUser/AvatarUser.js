import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'


const useStyles = makeStyles(theme => ({
  'default': {
    '&.nothing': {
      background: theme.palette.grey[400],
    },
    alignItems: 'center',
    border: `solid 2px ${theme.palette.primary.main}`,
    borderRadius: '50%',
    display: 'flex',
    height: '48px',
    justifyContent: 'center',
    marginRight: '0.75rem',
    width: '48px'
  },
  image:{
    border: `solid 2px ${theme.palette.primary.main}`,
    height: '48px',
    marginRight: '0.75rem',
    width: '48px'
  },
}), { name: 'AvatarUsrer' })

function AvatarUsrer (props) {
  const {
    user
  } = props
  
  const classes = useStyles()

  return (
    user ?
      user.photo ?
        <img
          alt={`${user.firstName} ${user.lastName}`}
          className={classes.image}
          src={user.photo} />
      : <div className={classes.default}>
          {
            `${user.firstName ?
              typeof user.firstName === 'string'
                ? user.firstName.charAt().toUpperCase()
                : ''
              : ''}
              ${user.lastName ?
                typeof user.lastName === 'string'
                  ? user.lastName.charAt().toUpperCase()
                  : ''
                : ''}`
          }
        </div> 
    : <div className={clsx(classes.default, 'nothing' )} />
  )
}

AvatarUsrer.propTypes = {
  classes: PropTypes.object,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photo: PropTypes.string
  }),
}

AvatarUsrer.muiName = 'AvatarUsrer'

export default AvatarUsrer