import React, { useState } from 'react'
import { Stepper } from '@krowdy-ui/views'

const steps = [
  {
    _id  : '1',
    label: 'Video Cuestionario'
  },
  {
    _id  : '2',
    label: 'Segundo step'
  },
  {
    _id  : '3',
    label: 'Tercer step'
  },
  {
    _id  : '4',
    label: 'Cuarto step'
  },
  {
    _id  : '5',
    label: 'Quinto step'
  },
  {
    _id  : '6',
    label: 'Quinto step'
  },
  {
    _id  : '7',
    label: 'Quinto step'
  },
  {
    _id  : '8',
    label: 'Quinto step'
  }
]

export default function () {
  const [ step, setStep ] = useState(1)

  const _handleChange = (value) => {
    setStep(value)
  }

  return (
    <div>
      <div style={{
        margin : '4px 0',
        outline: 'solid 1px black',
        width  : 600
      }}>
        <Stepper
          activeIndex={step}
          clickable
          onChange={_handleChange}
          orientation='horizontal'
          steps={steps} />
      </div>
      <div style={{
        margin : '4px 0',
        outline: 'solid 1px black',
        width  : 600
      }}>
        <Stepper
          activeIndex={step}
          clickable
          onChange={_handleChange}
          orientation='horizontal'
          steps={steps.slice(0, 3)} />
      </div>
      <div style={{
        margin : '4px 0',
        outline: 'solid 1px black',
        width  : 600
      }}>
        <Stepper
          absolute
          activeIndex={step}
          clickable
          onChange={_handleChange}
          orientation='horizontal'
          steps={steps.slice(0, 3)} />
      </div>
      <div style={{
        width: 200
      }}>
        <Stepper
          activeIndex={step}
          clickable
          onChange={_handleChange}
          orientation='horizontal'
          steps={steps} />
      </div>
      <Stepper
        activeIndex={step}
        clickable
        height={800}
        onChange={_handleChange}
        orientation='vertical'
        steps={steps} />
      <Stepper
        activeIndex={step}
        clickable
        onChange={_handleChange}
        orientation='vertical'
        steps={steps} />
      <Stepper
        activeIndex={step}
        clickable
        onChange={_handleChange}
        orientation='vertical'
        spacing={48}
        steps={steps} />
    </div>
  )
}
