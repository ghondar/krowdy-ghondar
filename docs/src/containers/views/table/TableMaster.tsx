import React, { useState } from 'react'
import { Grid, TextField, IconButton } from '@krowdy-ui/core'
import { Table } from '@krowdy-ui/views'
import {
  Add as AddIcon,
  PhotoCamera as PhotoCameraIcon,
  MonochromePhotos as MonochromePhotosIcon,
  Movie as MovieIcon,
  Refresh as RefreshIcon
} from '@material-ui/icons'
import { makeStyles } from '@krowdy-ui/styles'

const useStyles = makeStyles(() => ({
  root: {
    color     : '#595959',
    fontSize  : 12,
    fontWeight: 'normal',
    maxWidth  : 249,
    minWidth  : 247
  }
}))
const Componente = ({ value: [ name, apellido ] }: any) => (
  <div style={{
    display      : 'flex',
    flexDirection: 'column'
  }}>
    <span style={{
      color     : '#595959',
      fontSize  : 12,
      fontWeight: 'normal'
    }} >{name} </span>
    <span style={{
      color     : '#8C8C8C',
      fontSize  : 12,
      fontWeight: 'normal'
    }}>{apellido}</span>
  </div>
)
const scheduleComponent = () => (
  <div>
    <TextField
      InputProps={{
        classes: {
          root: classes.root
        }
      }}
      placeholder='Selecciona fecha y hora'></TextField>
  </div>
)
// eslint-disable-next-line react-hooks/rules-of-hooks
const classes = useStyles()
const responsibleComponent = () => (
  <div >
    <TextField
      InputProps={{
        classes: {
          root: classes.root
        }
      }}
      placeholder='Ingrese correo electrónico'></TextField>
  </div >
)

const RefreshColumn = () => (
  <IconButton size='small'>
    <RefreshIcon color='primary' />
  </IconButton>
)

const demoColumns = [
  {
    component: Componente,
    editable : false,
    key      : 'name',
    label    : 'Nombre',
    minWidth : 150,
    ordering : true,
    type     : 'today',
    visible  : true
  }, {
    component: scheduleComponent,
    editable : false,
    key      : 'schedule',
    label    : 'Horario',
    minWidth : 150,
    ordering : true,
    type     : 'hours',
    visible  : true
  }, {
    component: responsibleComponent,
    editable : true,
    key      : 'responsible',
    label    : 'Responsible',
    minWidth : 170,
    ordering : false,
    type     : 'text',
    visible  : true
  }, {
    editable: true,
    key     : 'incharge',
    label   : 'Encargado',
    minWidth: 100,
    ordering: false,
    type    : 'select'
  }, {
    align   : 'right',
    editable: true,
    key     : 'currentTasks',
    label   : 'Tareas actuales',
    minWidth: 150,
    ordering: true,
    type    : 'date'
  }, {
    align   : 'right',
    currency: true,
    editable: true,
    key     : 'amountPayable',
    label   : 'Monto por pagar',
    minWidth: 160,
    ordering: true,
    type    : 'number'
  }, {
    align   : 'right',
    editable: true,
    key     : 'amountTasks',
    label   : 'Tareas por pagar',
    minWidth: 160,
    ordering: true,
    type    : 'text'
  }, {
    align   : 'right',
    editable: true,
    key     : 'incidents',
    label   : 'Incidentes',
    minWidth: 90,
    ordering: true,
    type    : 'text'
  },
  {
    columnComponent: RefreshColumn,
    excludeOfFilter: true,
    key            : 'refresh',
    visible        : true,
    width          : 80
  },
  {
    editable: true,
    key     : 'other',
    label   : 'Otro valor',
    minWidth: 120,
    ordering: false,
    type    : 'text',
    visible : false
  }
]
const newCellProps = {
  amountPayable: 0,
  amountTasks  : 0,
  currentTasks : 0,
  incharge     : [
    {
      label: 'Edward Sanchez',
      value: 0
    }, {
      label: 'Jose Perez',
      value: 1
    }, {
      label: 'Manuel Perez',
      value: 2
    }, {
      label: 'Pedro Perez',
      value: 3
    }
  ],
  incidents  : 0,
  name       : '',
  responsible: '',
  schedule   : ''
}

export default function () {
  const [ sort, setSort ] = useState<{ orderBy: string; sort: 'asc' | 'desc' }>({ orderBy: '', sort: 'asc' })
  const [ addNewCell, setAddNewCell ] = useState(false)
  const [ columns ] = useState(demoColumns)
  const searchSuggestions = [
    {
      title: 'The Shawshank Redemption',
      year : 1994
    }, {
      title: 'The Godfather',
      year : 1972
    }, {
      title: 'The Godfather: Part II',
      year : 1974
    }, {
      title: 'The Dark Knight',
      year : 2008
    }, {
      title: '12 Angry Men',
      year : 1957
    }, {
      title: "Schindler's List",
      year : 1993
    }, {
      title: 'Pulp Fiction',
      year : 1994
    }, {
      title: 'The Lord of the Rings: The Return of the King',
      year : 2003
    }, {
      title: 'The Good, the Bad and the Ugly',
      year : 1966
    }, {
      title: 'Fight Club',
      year : 1999
    }, {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year : 2001
    }, {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year : 1980
    }, {
      title: 'Forrest Gump',
      year : 1994
    }
  ]
  const rows = [
    {
      _id          : '0',
      amountPayable: 45,
      amountTasks  : 2,
      codeCheck    : 'icon1',
      currentTasks : 5,
      extra        : 'Status',
      incharge     : 'Jimena',
      incidents    : 5,
      name         : [ 'Juan Perez', 'Otro dato' ],
      responsible  : 'Carla',
      schedule     : 'En linea',
      selected     : true,
      type         : [ 'LL', 'Ln', 'VoD', 'VE' ]
    },
    {
      _id          : '1',
      amountPayable: 15,
      amountTasks  : 0,
      codeCheck    : 'icon2',
      currentTasks : 2,
      disabled     : true,
      extra        : 'Status',
      incidents    : 0,
      name         : [ 'Juana de Arco', 'Otro dato' ],
      responsible  : 'Jimena',
      schedule     : 'Hace 2 dias',
      type         : [ 'LL', 'Ln' ]
    }, {
      _id          : '2',
      amountPayable: 15,
      amountTasks  : 0,
      codeCheck    : 'icon3',
      currentTasks : 2,
      extra        : 'Status',
      incidents    : 1,
      name         : [ 'Pedro de Arco', 'Otro dato' ],
      responsible  : 'Jimena',
      schedule     : 'Hace 7 dias',
      type         : [ 'LL', 'Ln' ]
    }, {
      _id          : '3',
      amountPayable: 123,
      amountTasks  : 4,
      codeCheck    : 'icon1',
      currentTasks : 2,
      extra        : 'Status',
      incidents    : 2,
      name         : [ 'Pedro Colmenarez', 'Otro dato' ],
      responsible  : 'Jimena',
      schedule     : 'Invitado',
      type         : [ 'LL', 'Ln' ]
    }
  ]
  const checkIcons = [
    {
      code     : 'icon1',
      component: <PhotoCameraIcon color='error' />
    },
    {
      code     : 'icon2',
      component: <MonochromePhotosIcon color='secondary' />
    },
    {
      code     : 'icon3',
      component: <MovieIcon color='primary' />
    }
  ]

  const _handleSortTable = (sort: any) => {
    setSort(sort)
    console.log('TCL: _handleSortTable -> orderby', sort)
  }
  const _handleSearch = (search: any) => {
    console.log('TCL: _handleSearch -> search', search)
  }
  const _handleBtnAction = (e: any) => {
    console.log('TCL: _handleBtnAction -> e', e)
  }
  const _handleChangeRowsPerPage = (value: any) => {
    console.log('===> XAVI <===: _handleChangeRowsPerPage -> value', value)
    console.log('change row per page')
  }
  const _handleChangePage = (e: any, page: any) => {
    console.log('===> XAVI <===: _handleChangePage -> page', page)
    console.log('===> XAVI <===: _handleChangePage -> e', e)

    console.log('change page')
  }
  const _handleSelectAll = (value: any) => {
    console.log('click select all', value)
  }
  const _handleSelectItem = (index: any) => {
    console.log('click en select', index)
  }
  const _handlePaymentButton = () => {
    console.log('click en pagar ')
  }
  const _handleToggleColumnTable = (id: any) => {
    console.log('click en column con id', id)
  }
  const _handleAddNewCell = () => {
    console.log('clikck en el add new cell')
    setAddNewCell(!addNewCell)
  }

  const _handleSendNewCell = (newCell: any) => {
    console.log('TCL: _handleAddNewCell -> newCell', newCell)
  }

  const _handleClickRow = (id: any) => {
    console.log('TCL: _handleClickRow -> id', id)
  }

  const _handleSelectAutocomplete = (e: any, value: any) => {
    console.log('TCL: _handleSelectAutocomplete -> value', value)
  }

  return (
    <Grid
      container style={{
        height  : '50vh',
        overflow: 'hidden'
      }}>
      <Table
        addNewCell={addNewCell}
        checkIcons={checkIcons}
        columns={columns}
        currency='S/'
        // enableAddCell={true}
        iconButton={<AddIcon />}
        newCellProps={newCellProps}
        onHandleAddNewCell={_handleAddNewCell}
        onHandleBtnAction={_handleBtnAction}
        onHandleChangePage={_handleChangePage}
        onHandleChangeRowsPerPage={_handleChangeRowsPerPage}
        onHandleClickRow={_handleClickRow}
        onHandlePaymentButton={_handlePaymentButton}
        onHandleSearch={_handleSearch}
        onHandleSelectAll={_handleSelectAll}
        onHandleSelectAutocomplete={_handleSelectAutocomplete}
        onHandleSelectItem={_handleSelectItem}
        onHandleSendNewCell={_handleSendNewCell}
        onHandleSortTable={_handleSortTable}
        onHandleToggleColumnTable={_handleToggleColumnTable}
        pagination={
          {
            page      : 1,
            perPage   : 25,
            totalItems: 275
          }
        }
        paymentAmount={100}
        rows={rows}
        searchSuggestions={searchSuggestions}
        sortTable={sort}
        stickyHeader={true}
        titleButton='Agregar Krowder'
        titleTable='Tabla de Krowders'
        withAutocomplete={true}
        withButton={false}
        withCheckbox
        withFooter={true}
        withHeader={true}
        // withMenuColumns={true}
        withOrder={true}
        withPagination={true}
        withSearch={true} />
    </Grid>
  )
}
