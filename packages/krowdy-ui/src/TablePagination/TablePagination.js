import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import MuiTablePagination from '@material-ui/core/TablePagination'
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import Box from '../Box'
import InputBase from '../InputBase'
import Select from '../Select'
import MenuItem from '../MenuItem'
import Input from '../Input'
import IconButton from '../IconButton'
import Typography from '../Typography'
import withStyles from '../styles/withStyles'

export const styles = theme => ({
  boxStyle: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'flex-end',
    padding       : theme.spacing(1)
  },
  color: {
    color: theme.palette.grey[700]
  },
  icon: {
    height: 18,
    width : 18
  },
  input: {
    fontSize : 12,
    textAlign: 'center'
  },
  inputSel: {
    fontSize : 12,
    padding  : theme.spacing(0.625, 1),
    textAlign: 'center'
  },
  inputSelect: {
    padding: theme.spacing(0.625, 0.8)
  },
  label: {
    marginRight: theme.spacing(1.5)
  },
  rootLeftIcon: {
    marginLeft : theme.spacing(2.5),
    marginRight: theme.spacing(1.25),
    padding    : theme.spacing(0)
  },
  rootMenuItem: {
    color   : theme.palette.grey[700],
    fontSize: 12
  },
  rootRightIcon: {
    marginLeft: theme.spacing(1.5),
    padding   : theme.spacing(0)
  },
  rootTextfield: {
    border      : ` 1px solid ${theme.palette.grey[400]}`,
    borderRadius: 4,
    boxSizing   : 'border-box',
    color       : theme.palette.grey[700],
    fontSize    : 12,
    width       : 25
  },
  select: {
    '&$selectMenu': {
      paddingLeft : theme.spacing(0),
      paddingRight: theme.spacing(2)
    },
    '&:focus': {
      borderRadius: 4
    },
    border      : `1px solid ${theme.palette.grey[400]}`,
    borderRadius: 4,
    boxSizing   : 'border-box',
    width       : 47
  },
  selectIcon: {
    '& svg': {
      height: 18,
      width : 18
    },
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'center'
  },
  selectMenu: {
    fontSize  : 12,
    lineHeight: '14px',
    textAlign : 'center'
  },
  slash: {
    padding: theme.spacing(0, 0.75)
  }
})

const TablePagination = (props) => {
  const {
    totalPages = 0,
    totalItems = 0,
    classes,
    onChangePage,
    onChangeRowsPerPage,
    rowsPerPage,
    rowsPerPageOptions,
    labelRowsPerPage,
    page
  } = props

  const [ currentPerPage, setCurrentPerPage ] = useState(rowsPerPage)
  const [ currentPage, setCurrentPage ] = useState(page)

  useEffect(() => {
    setCurrentPage(page)
  }, [ page ])

  const onChangeSelectState = ev => {
    const page = ev.target.value
    setCurrentPerPage(page)
    onChangeRowsPerPage(page)
  }

  const _handleClickLeft = () => {
    currentPage > 1 &&
      setCurrentPage(prevState => {
        const page = parseInt(prevState) - 1
        onChangePage(page)

        return page
      })
  }

  const _handleClickRight = () => {
    currentPage < totalPages &&
      setCurrentPage(prevState => {
        const page = parseInt(prevState) + 1

        onChangePage(page)

        return page
      })
  }

  const _handleChange = ev => {
    const { value } = ev.target

    if(/^[0-9]*$/g.test(value))
      setCurrentPage(prevState => value > totalPages ? prevState : value)

    if(ev.keyCode === 13) onChangePage(parseInt(value))
  }

  return (
    totalPages ?
      <Box className={classes.boxStyle}>
        <Typography className={classes.label}>Mostrar</Typography>
        <Select
          classes={{
            icon      : classes.selectIcon,
            root      : classes.select,
            selectMenu: classes.selectMenu
          }}
          input={<InputBase />}
          onChange={onChangeSelectState}
          value={currentPerPage}>
          {rowsPerPageOptions.map((limit, index) => (
            <MenuItem
              classes={{
                root    : classes.rootMenuItem,
                selected: classes.selectedMenuItem
              }}
              key={index}
              value={limit}>{limit}</MenuItem>
          ))}
        </Select>
        <Box className={classes.boxStyle}>
          <IconButton
            className={classes.rootLeftIcon}
            disabled={parseInt(currentPage) === 1}
            onClick={_handleClickLeft}
            size='small'>
            <ArrowLeftIcon className={classes.icon} />
          </IconButton>
          <Input
            classes={{
              input: clsx(classes.input, classes.color),
              root : classes.rootTextfield
            }}
            disableUnderline
            onChange={_handleChange}
            onKeyDown={_handleChange}
            value={currentPage} />
          <Typography className={classes.slash}>/</Typography>
          <Typography>{totalPages > 0 ? totalPages : 1}</Typography>
          <IconButton
            className={classes.rootRightIcon}
            disabled={parseInt(currentPage) === parseInt(totalPages)}
            onClick={_handleClickRight}
            size='small'>
            <ArrowRightIcon className={classes.icon} />
          </IconButton>
        </Box>
      </Box> :
      <MuiTablePagination
        component='div'
        count={totalItems}
        labelRowsPerPage={labelRowsPerPage}
        onChangePage={(ev, value) => onChangePage(parseInt(value + 1))}
        onChangeRowsPerPage={ev => onChangeSelectState(ev)}
        page={parseInt(page - 1)}
        rowsPerPage={currentPerPage}
        rowsPerPageOptions={rowsPerPageOptions} />
  )
}

TablePagination.propTypes = {
  SelectProps        : PropTypes.object,
  backIconButtonProps: PropTypes.object,
  classes            : PropTypes.object.isRequired,
  count              : PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  labelRowsPerPage   : PropTypes.string,
  nextIconButtonProps: PropTypes.object,
  onChangePage       : PropTypes.func,
  onChangeRowsPerPage: PropTypes.func,
  page               : PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  rowsPerPage        : PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  rowsPerPageOptions : PropTypes.array.isRequired,
  totalItems         : PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  totalPages         : PropTypes.oneOfType([ PropTypes.number, PropTypes.string ])

}

export default withStyles(styles, { name: 'TablePagination' })(TablePagination)
