import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@krowdy-ui/core'
import { Business as BusinessIcon } from '@material-ui/icons'
import { useStyles } from './styles'

const CardEducation = ({ condition, description, institutionName, career, endDate, degree, startDate, studyingHere }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant='h5'>{career}</Typography>
      <div className={classes.companyContent}>
        <div className={classes.companyImageContent}>
          <BusinessIcon color='disabled' />
        </div>
        <Typography variant='h6'>{institutionName}</Typography>
      </div>
      {startDate || studyingHere || endDate ? <Typography variant='body2'>{startDate} - {studyingHere ? 'Actual' : endDate }</Typography> : null}
      {degree ? <Typography color='info' variant='body1'>Nivel: {degree}</Typography> : null}
      {condition ? <Typography color='info' variant='body1'>Condición: {condition}</Typography> : null}
      {description ? <Typography variant='body2'>{description}</Typography> : null}
    </div>
  )
}

CardEducation.propTypes = {
  career         : PropTypes.string,
  condition      : PropTypes.string,
  degree         : PropTypes.string,
  description    : PropTypes.string,
  endDate        : PropTypes.string,
  institutionName: PropTypes.string,
  startDate      : PropTypes.string,
  studyingHere   : PropTypes.bool
}

export default React.memo(CardEducation)
