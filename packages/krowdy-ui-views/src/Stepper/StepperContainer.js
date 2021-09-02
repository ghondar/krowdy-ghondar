import { makeStyles } from '@material-ui/core'
import React from 'react'

const StepperContainer = ({ orientation, children, height }) => {
  const classes = useStyles({ height, orientation })

  if(orientation === 'horizontal') return (
    <>
      {children}
    </>
  )

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    height       : ({ height }) =>  height ? height : undefined,
    paddingBottom: theme.spacing(1.5),
    paddingTop   : theme.spacing(1.5)
  }
}), { name: 'StepperContainer' })

export default StepperContainer
