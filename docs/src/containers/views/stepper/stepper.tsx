import React from 'react'
import { Grid } from '@krowdy-ui/core'
import { Stepper } from '@krowdy-ui/views'

const steps = [
  {
    _id  : '1',
    label: 'No aplica',
    value: '1'
  },
  {
    _id  : '2',
    label: 'Alicorp',
    value: '2'
  },
  {
    _id  : '3',
    label: 'Coca - Cola',
    value: 'label'
  }
]

export default function () {
  return (
    <Grid container>
      <Stepper steps={steps} />
    </Grid>
  )
}
