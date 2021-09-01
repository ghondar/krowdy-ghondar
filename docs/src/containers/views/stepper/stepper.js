import React, { useState } from 'react'
import { Grid } from '@krowdy-ui/core'
import { Stepper } from '@krowdy-ui/views'

const steps = [
  {
    _id  : '1',
    label: 'Primer step'
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
    <Grid
      container>
      <Stepper
        activeIndex={step}
        clickeable
        onChange={_handleChange}
        orientation='horizontal'
        steps={steps} />
    </Grid>
  )
}
