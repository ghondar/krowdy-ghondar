import React,
{
  memo, useCallback, useEffect, useRef, useState
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
import StepperContainer from './StepperContainer'

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
  clickable,
  spacing,
  height,
  hiddenLabel
}) => {
  const classes = useStyles({ active, height, index, orientation, spacing, totalSteps })

  return (
    <Component
      className={clsx(classes.step,
        {
          [classes.marginStep]     : index,
          [classes.buttonClickable]: clickable
        })}
      {...clickable && !isCompleted ? { onClick: onSelect } : {}}>
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
        {active ? label: !hiddenLabel ? label : ''}
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
  clickable = false,
  onChange= () =>{},
  isCompleted,
  height,
  spacing = 24
}) =>{
  // const orientation = 'vertical'
  const classes = useContainerStyles({ orientation, totalSteps: steps.length })

  const [ tooLarge, setTooLarge ] = useState(orientation !== 'vertical')
  const containerRef = useRef()

  const _handleSelectStep = useCallback((step) => () => {
    onChange(step)
  }, [ onChange ])

  useEffect(() => {
    if(orientation === 'vertical') return
    if(steps.length > 1) {
      const W = containerRef.current.offsetWidth

      const _w = 60
      const v = (W - _w * steps.length) / (steps.length - 1)

      setTooLarge(v <= 10)
    } else {
      setTooLarge(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StepperContainer height={height} orientation={orientation}>
      <div className={classes.container} ref={containerRef}>
        {
          steps && steps.length ? steps.map(({ _id, label }, index)=>{
            const completed = activeIndex > index
            const disabled = activeIndex < index
            const Component = clickable ? 'button':'div'
            const active = activeIndex === index

            return (
              <Step
                active={active}
                activeIndex={activeIndex}
                clickable={clickable}
                completed={completed}
                Component={Component}
                disabled={disabled}
                height={height}
                hiddenLabel={tooLarge}
                index={index}
                isCompleted={isCompleted}
                key={_id}
                label={label}
                onSelect={_handleSelectStep(index)}
                orientation={orientation}
                spacing={spacing}
                totalSteps={steps.length} />
            )}) : null
        }
      </div>
    </StepperContainer>
  )
}

const useContainerStyles = makeStyles(()=>({
  container: {
    alignItems    : 'start',
    display       : 'flex',
    flexDirection : ({ orientation }) => orientation === 'vertical' ? 'column': 'row',
    height        : ({ orientation }) => orientation === 'vertical' ? '100%': 72,
    justifyContent: ({ orientation, height }) => orientation === 'vertical' && !height ? 'inherit': 'space-between',
    justifyItems  : 'start'
    // position      : 'relative'
  }
}), { name: 'Stepper' })

const useStyles = makeStyles((theme)=>({
  buttonClickable: {
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
    background: theme.palette.primary.main,
    height    : ({ orientation, height, spacing }) => orientation ==='vertical' ? height ? 'calc(100% - 24px - 4px)': spacing : 2,
    left      : ({ orientation }) => orientation ==='horizontal' ? 'calc(50% + 14px)' : 12,
    position  : 'absolute',
    top       : ({ orientation, height, spacing }) => orientation ==='vertical' ? height ? 'calc(100% - (100% - 24px - 4px)/ 2)': spacing / 2 + 24 + 4 : 12,
    width     : ({ orientation }) => orientation ==='horizontal' ? 'calc(100% - 28px)' : 2
  },
  disabled: {
    border: `3px solid ${theme.palette.grey[400]}`,
    color : theme.palette.grey[400]
  },
  disabledLine: {
    background: theme.palette.grey[400]
    // height    : ({ orientation, totalSteps }) => orientation ==='vertical' ? `calc(100% + (100% / ${totalSteps - 1}) + 2px)` : 2,
    // top       : ({ orientation }) => orientation ==='vertical' ? 'calc(100% + 6px)' : 10
  },
  doneStep: {
    fontSize: 24
  },
  indexText: {
    alignItems    : 'center',
    // background    : ({ active }) => active ? theme.palette.primary.main: '',
    background    : ({ active }) => active ? `linear-gradient(to top, ${theme.palette.primary[100]} 0%, ${theme.palette.primary[100]} 50%, white 40%)`: '',
    borderRadius  : '50%',
    display       : 'flex',
    fontWeight    : 500,
    height        : 18,
    justifyContent: 'center',
    // opacity       : ({ active }) => active ? '20%': null,
    width         : 18
  },
  selected: {
    border: `3px solid ${theme.palette.primary.main}`
  },
  step: {
    alignItems   : 'center',
    display      : 'flex',
    flex         : ({ orientation, height }) => orientation === 'vertical' && !height ? 'inherit': 1,
    flexDirection: ({ orientation }) => orientation ==='vertical' ? 'row': 'column',
    height       : ({ orientation, totalSteps, height, spacing }) => orientation ==='vertical' ? height ? `calc(100% / ${totalSteps - 1} - 28px)`: spacing + 4 + 24 : 2,
    justifyItems : 'center',
    minWidth     : 32,
    // paddingBottom: ({ orientation, totalSteps, index }) => orientation ==='vertical' && index < totalSteps-1 ? `calc(100% / ${totalSteps - 1})`: 0,
    position     : 'relative'
  },
  stepLabel: {
    color     : theme.palette.grey[700],
    marginLeft: ({ orientation }) => orientation === 'vertical' ? theme.spacing(1.5): undefined,
    minWidth  : 28,
    position  : ({ orientation }) => orientation === 'horizontal' ? 'absolute': undefined,
    top       : ({ orientation }) => orientation === 'horizontal' ? 28: undefined
  },
  textActive: {
    color: theme.palette.grey[800]
  }
}), { name: 'Step' })

Stepper.propTypes = {
  activeIndex: PropTypes.number,
  classes    : PropTypes.object,
  clickable  : PropTypes.bool,
  height     : PropTypes.number,
  isCompleted: PropTypes.bool,
  onChange   : PropTypes.func,
  onchange   : PropTypes.func,
  orientation: PropTypes.oneOf([ 'vertical', 'horizontal' ]),
  spacing    : PropTypes.number,
  steps      : PropTypes.array
}

Stepper.muiName = 'Stepper'

export default memo(Stepper)
