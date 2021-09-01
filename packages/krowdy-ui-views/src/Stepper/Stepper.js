import React,
{
  memo, useCallback
  // useMemo
  // useCallback,
//  useState
} from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, Typography } from '@krowdy-ui/core'
import {
  CheckCircleRounded as CheckCircleRoundedIcon
  // RadioButtonUnchecked as RadioButtonUncheckedIcon
} from '@material-ui/icons'

const Step = ({
  active,
  completed,
  Component,
  disabled,
  isCompleted,
  label,
  onSelect,
  index,
  orientation,
  activeIndex,
  totalSteps,
  clickeable
}) => {
  const classes =useStyles({ active, index, orientation, totalSteps })

  return (
    <Component
      className={clsx(classes.step,
        {
          [classes.marginStep]      : index,
          [classes.buttonclickeable]: clickeable
        })}
      {...clickeable && !isCompleted ? { onClick: onSelect } : {}}>
      <div
        className={clsx(classes.circle,
          {
            [classes.selected]: active && !isCompleted,
            [classes.disabled]: disabled && !isCompleted
          })}>
        {
          completed || isCompleted ?(
            <CheckCircleRoundedIcon
              className={classes.doneStep}
              color='primary' /> ): (
            <Typography
              className={classes.indexText}
              color={active ? 'primary' : 'inherit'}
              variant='caption'>
              {index + 1}
            </Typography>)
        }
      </div>
      <Typography
        className={clsx(classes.stepLabel,
          {
            [classes.textActive]: active && !isCompleted
          })}
        variant={active && !isCompleted? 'h6': 'body2'} >
        {label}
      </Typography>
      {
        index !== totalSteps - 1 && orientation ? (
          <span className={clsx(classes.conector, { [classes.disabledLine]: (activeIndex <= index) && !isCompleted  })} />
        ) : null
      }
    </Component>
  )
}

const Stepper = ({
  steps = [],
  orientation = 'vertical',
  activeIndex = 1,
  clickeable = false,
  onChange= () =>{},
  isCompleted
}) =>{
  // const orientation = 'vertical'
  const classes = useContainerStyles({ orientation, totalSteps: steps.length })
  const _handleSelectStep = useCallback((step) => () => {
    onChange(step)
  }, [ onChange ])

  return (
    <div className={classes.container}>
      {
        steps && steps.length ? steps.map(({ _id, label }, index)=>{
          const completed = activeIndex > index
          const disabled = activeIndex < index
          const Component = clickeable ? 'button':'div'
          const active = activeIndex === index

          return (
            <Step
              active={active}
              activeIndex={activeIndex}
              clickeable={clickeable}
              completed={completed}
              Component={Component}
              disabled={disabled}
              index={index}
              isCompleted={isCompleted}
              key={_id}
              label={label}
              onSelect={_handleSelectStep(index)}
              orientation={orientation}
              totalSteps={steps.length} />
          )}) : null
      }
    </div>
  )
}

const useContainerStyles = makeStyles(()=>({
  container: {
    alignItems    : 'start',
    display       : 'flex',
    flexDirection : ({ orientation }) => orientation ==='vertical' ? 'column': 'row',
    justifyContent: 'space-between',
    justifyItems  : 'start'
    // position      : 'relative'
  }
}), { name: 'Stepper' })

const useStyles = makeStyles(({ palette, spacing })=>({
  buttonclickeable: {
    background: 'none',
    border    : 'none',
    cursor    : 'pointer',
    margin    : 0,
    padding   : 0
  },
  circle: {
    alignItems    : 'center',
    borderRadius  : '50%',
    display       : 'flex',
    height        : 24,
    justifyContent: 'center',
    // position      : 'relative',
    width         : 24
  },
  conector: {
    background: palette.primary.main,
    height    : ({ orientation }) => orientation ==='vertical' ? 'calc(100% - 28px)' : 2,
    left      : ({ orientation }) => orientation ==='horizontal' ? 'calc(50% + 14px)' : 12,
    position  : 'absolute',
    top       : ({ orientation }) => orientation ==='vertical' ? 'calc(26px)'  : 12,
    width     : ({ orientation }) => orientation ==='horizontal' ? 'calc(100% - 28px)' : 2
  },
  disabled: {
    border: `3px solid ${palette.grey[400]}`,
    color : palette.grey[400]
  },
  disabledLine: {
    background: palette.grey[400]
    // height    : ({ orientation, totalSteps }) => orientation ==='vertical' ? `calc(100% + (100% / ${totalSteps - 1}) + 2px)` : 2,
    // top       : ({ orientation }) => orientation ==='vertical' ? 'calc(100% + 6px)' : 10
  },
  doneStep: {
    fontSize: 24
  },
  indexText: {
    alignItems    : 'center',
    // background    : ({ active }) => active ? palette.primary.main: '',
    background    : ({ active }) => active ? `linear-gradient(to top, ${palette.primary[100]} 0%, ${palette.primary[100]} 50%, white 40%)`: '',
    borderRadius  : '50%',
    display       : 'flex',
    fontWeight    : 500,
    height        : 18,
    justifyContent: 'center',
    // opacity       : ({ active }) => active ? '20%': null,
    width         : 18
  },
  selected: {
    border: `3px solid ${palette.primary.main}`
  },
  step: {
    alignItems   : 'center',
    display      : 'flex',
    flex         : 1,
    flexDirection: ({ orientation }) => orientation ==='vertical' ? 'row': 'column',
    height       : ({ orientation, totalSteps }) => orientation ==='vertical' ? `calc(100% / ${totalSteps - 1} - 28px)` : 2,
    justifyItems : 'center',
    paddingBottom: ({ orientation, totalSteps, index }) => orientation ==='vertical' && index < totalSteps-1 ? `calc(100% / ${totalSteps - 1})`: 0,
    position     : 'relative'
  },
  stepLabel: {
    color     : palette.grey[700],
    marginLeft: spacing(1.5)
  },
  textActive: {
    color: palette.grey[800]
  }
}), { name: 'Step' })

Stepper.propTypes = {
  activeIndex: PropTypes.number,
  classes    : PropTypes.object,
  clickeable : PropTypes.bool,
  isCompleted: PropTypes.bool,
  onChange   : PropTypes.func,
  onchange   : PropTypes.func,
  orientation: PropTypes.oneOf([ 'vertical', 'horizontal' ]),
  steps      : PropTypes.array
}

Stepper.muiName = 'Stepper'

export default memo(Stepper)
