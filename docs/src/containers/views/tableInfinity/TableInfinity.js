import React from 'react'
import { Paper, IconButton, makeStyles, Button, Checkbox } from '@krowdy-ui/core'
import { TableInfinity } from '@krowdy-ui/views'
import { Delete } from '@material-ui/icons'

const CustomComponent = () => (
  <div style={{
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'center'
  }}>
    <IconButton>
      <Delete color='primary' />
    </IconButton>
  </div>
)

const ColumnCheckComponent = () => {
  const _handleChange = (e) => {
    // change checked to rows
    console.log(e.currentTarget.checked)
  }

  return (
    <div style={{
      alignItems    : 'center',
      display       : 'flex',
      justifyContent: 'center'
    }}>
      <Checkbox
        checked={rows.every(({ checked }) => checked)}
        color='primary'
        indeterminate={rows.some(({ checked }) => checked) && !rows.every(({ checked }) => checked)}
        onChange={_handleChange} />
    </div>
  )
}

const RowCheckComponent = ({ value, rowData }) => {
  const _handleChange = () => {
    console.log(rowData)
  }

  return (
    <div style={{
      alignItems    : 'center',
      display       : 'flex',
      justifyContent: 'center'
    }}>
      <Checkbox
        checked={value}
        color='primary'
        onChange={_handleChange} />
    </div>
  )
}

const Action = ({ value, rowData }) => {
  const classes = useStyles()

  const _handleAction = () => {
    console.log(rowData)
  }

  return (
    <div className={classes.container}>
      <Button
        color='primary'
        onClick={_handleAction}>
        {value}
      </Button>
    </div>
  )
}

const columns = [
  {
    align          : 'right',
    columnComponent: ColumnCheckComponent,
    editable       : false,
    key            : 'checked',
    label          : '',
    minWidth       : 100,
    ordering       : true,
    rowComponent   : RowCheckComponent,
    type           : 'date',
    width          : 100
  },
  {
    editable: false,
    key     : 'assigneds',
    label   : 'Asignadas',
    minWidth: 200,
    ordering: true,
    type    : 'text',
    visible : true,
    width   : 200
  }, {
    editable: false,
    key     : 'job',
    label   : 'Job',
    minWidth: 100,
    ordering: true,
    type    : 'text',
    visible : true,
    width   : 100
  }, {
    editable: false,
    key     : 'status',
    label   : 'Estado',
    minWidth: 150,
    ordering: false,
    type    : 'text',
    visible : true,
    width   : 150
  }, {
    editable: false,
    key     : 'assigned',
    label   : 'Asignada',
    minWidth: 100,
    ordering: false,
    type    : 'select',
    width   : 100
  }, {
    align   : 'center',
    editable: false,
    key     : 'finished',
    label   : 'Finaliza en',
    minWidth: 120,
    ordering: true,
    type    : 'date',
    width   : 120
  },
  {
    align          : 'right',
    columnComponent: CustomComponent,
    editable       : false,
    key            : 'action',
    label          : '',
    minWidth       : 100,
    ordering       : true,
    rowComponent   : Action,
    type           : 'date',
    width          : 100
  }
]

const sample = [
  {
    _id      : '0',
    action   : 'Realizar',
    assigned : '16/05/20',
    assigneds: 'Video cuestionario',
    checked  : true,
    finished : '00:15:31',
    job      : 'UI Senior',
    status   : 'Por realizar'
  },
  {
    _id      : '1',
    action   : 'Realizar',
    assigned : '16/05/20',
    assigneds: 'Video Entrevista',
    checked  : false,
    finished : '00:20:69',
    job      : 'UI Senior',
    status   : 'En Proceso'
  }, {
    _id      : '2',
    action   : 'Revisar',
    assigned : '18/05/20',
    assigneds: 'Hunting',
    checked  : false,
    finished : '4 d??as',
    job      : 'Dev',
    status   : 'Por realizar'
  }, {
    _id      : '3',
    action   : 'Revisar',
    assigned : '19/05/20',
    assigneds: 'Video cuestionario',
    checked  : false,
    finished : '13 d??as',
    job      : 'UI Senior',
    status   : 'Por revisar'
  }
]

function createData(id, { action, assigned, assigneds, finished, job, status, checked }) {
  return { action, assigned, assigneds, checked, finished, id, job, status }
}

const rows = []

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)]
  rows.push(createData(i, randomSelection))
}

export default function () {
  const _handleRowClick = (data) => {
    console.log(data)
  }

  const _handleRowLoaded = (data) => {
    console.log(data)
  }

  const _handleLoadMoreRows = (data) => {
    console.log(data)
  }

  return (
    <Paper
      elevation={0} style={{
        height  : '100%',
        overflow: 'hidden',
        width   : '100%'
      }}>
      <TableInfinity
        columns={columns}
        height={400}
        isRowLoaded={_handleRowLoaded}
        loadMoreRows={_handleLoadMoreRows}
        onRowClick={_handleRowClick}
        rows={rows} width='100%' />
    </Paper>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    display      : 'flex',
    flexDirection: 'column'
  }
}))
