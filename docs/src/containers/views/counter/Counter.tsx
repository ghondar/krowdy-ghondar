import React from 'react'
import { Counter } from '@krowdy-ui/views'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

export default function () {
  const initialCounterValue = 10
  const disabled = false
  const min = 5
  const max = 15
  const [number, setNumber] = React.useState(initialCounterValue)

  const onChange = (event: any) => {
    setNumber(event)
  }

  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: 400,
      justifyContent: 'space-evenly',
      margin: '50px',
      width: 'auto'
    }}>
      <Counter
        addIcon={<AddIcon style={{ height: 18, width: 18 }} />}
        color='krowdy'
        disabled={disabled}
        max={max}
        min={min}
        number={number}
        onChange={onChange}
        removeIcon={<RemoveIcon style={{ height: 18, width: 18 }} />} />
      <Counter number={number} />
    </div>

  )
}