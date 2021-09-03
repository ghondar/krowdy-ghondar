import { makeStyles } from '@material-ui/core'
import React from 'react'

const StepConnector = ({ totalSteps, index }) => {
  const classes = useStyles({ index, totalSteps })

  return (
    <div className={classes.root} />
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    height    : 2,
    left      : ({ totalSteps, index }) => `calc(((100% - ${32 * totalSteps}px) / ${totalSteps - 1} + 32px) * ${index} + 32px)`,
    position  : 'absolute',
    top       : 10.5,
    width     : ({ totalSteps }) => `calc((100% - ${32 * totalSteps}px) / ${totalSteps - 1})`
  }
}), { name: 'StepConnector' })

export default StepConnector
