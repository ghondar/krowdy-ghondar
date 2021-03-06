import React from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
  Drawer,
  List,
  ListItem,
  Link,
  ListItemIcon,
  ListItemText,
  Collapse,
  withStyles
} from '@krowdy-ui/core'
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon
} from '@material-ui/icons'
import { isExternalURL } from '../utils'

const drawerWidth = 210
const drawerWidthMin = 56

const styles = theme => ({
  // drawer: {
  // width: drawerWidthMin
  // },
  drawerContent: {
    width: drawerWidthMin
  },
  drawerIcon: {
    color   : 'inherit',
    margin  : theme.spacing(.5, 0),
    // minWidth: 32
    minWidth: 'auto'
  },
  drawerItemCollapse: {
    display: 'block'
  },
  drawerLabel: {
    // '& > span': {
    //   fontSize: '1rem'
    // },
    // marginLeft: theme.spacing(2.5),
    marginLeft: theme.spacing(1.5),
    transition: 'transform 300ms ease 0s, opacity 300ms ease 0s'
  },
  drawerPaper: {
    // '&:hover': {
    //   '& $drawerLabel': {
    //     opacity  : 1,
    //     transform: 'translate3d(0px, 0, 0)'
    //   },
    //   boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    //   width    : drawerWidth
    // },
    background : theme.palette.primary.main,
    borderRight: 0,
    overflow   : 'hidden',
    // position   : 'absolute',
    position   : 'initial',
    transition : theme.transitions.create('width', {
      duration: theme.transitions.duration.standard,
      easing  : theme.transitions.easing.easeInOut
    }),
    whiteSpace: 'nowrap',
    width     : drawerWidth,
    zIndex    : 10
  },
  drawerPaperClose: {
    '& $drawerLabel': {
      opacity  : 0,
      transform: 'translate3d(-10px, 0, 0)'
    },
    // minWidth: drawerWidthMin,
    width: drawerWidthMin
  },
  flexCenterVertical: {
    alignItems: 'center',
    display   : 'flex'
  },
  labelBold: {
    '& > span': {
      fontWeight: 'bold'
    }
  },
  listRoot: {
    flex     : 1,
    overflowX: 'hidden'
    // justifyContent: 'space-between'
  },
  main: {
    backgroundColor: theme.palette.grey[200],
    display        : 'flex',
    flexGrow       : 1,
    // [theme.breakpoints.down('sm')]: {
    //   overflow: 'initial'
    // },
    // borderRadius  : 4,
    overflow       : 'auto',
    // flex          : 1,
    // justifyContent: 'center',
    padding        : theme.spacing(1)
    // padding       : theme.spacing(1),
    // position      : 'relative'
  },
  menuDashboardItem: {
    alignItems: 'center',
    display   : 'flex',
    padding   : theme.spacing(1, 2),
    width     : '100%'
  },
  menuDashboardListItem: {
    color  : theme.palette.common.white,
    padding: 0
  },
  menuDashboardListItemActive: {
    '&:hover': {
      backgroundColor: theme.palette.common.white
    },
    backgroundColor: theme.palette.common.white,
    color          : theme.palette.primary.main
  },
  optionBottom: {
    boxShadow: '0px -1px 5px rgba(0, 0, 0, 0.1)'
  },
  shadow: {
    boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    // boxShadow: '0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    position : 'relative'
  },
  toolbar: theme.mixins.toolbar
})

function DrawerListItem({ menu, classes }) {
  const history = useHistory()

  const {
    location
  } = history

  const { options, title, icon, url, target, expanded = false, disabled = false, onClick } = menu

  const [ openCollapse, setOpenCollapse ] = React.useState(expanded)

  const _handleToggleCollapse = () => {
    setOpenCollapse(!openCollapse)
  }

  const _handleClickLink = mUrl => ev => {
    if(location.pathname === mUrl || onClick) ev.preventDefault()
    if(onClick) onClick()
  }

  if(options && options.length)
    return (
      <>
        <ListItem
          button
          className={clsx(classes.menuDashboardListItem, classes.drawerItemCollapse)}
          disableGutters
          onClick={_handleToggleCollapse}>
          <div
            // underline='none'
            // color='inherit'
            // component='div'
            className={classes.menuDashboardItem}>
            {
              icon ?
                <ListItemIcon className={classes.drawerIcon}>
                  {icon}
                </ListItemIcon> :
                null
            }
            <div className={classes.flexCenterVertical}>
              <ListItemText
                className={clsx(classes.drawerLabel, classes.labelBold)}
                primary={title}
                primaryTypographyProps={{
                  variant: 'body2'
                }} />
              { openCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
            </div>
          </div>
        </ListItem>
        <Collapse in={openCollapse} unmountOnExit>
          {
            renderDrawerList(options.map(option => ({ icon, ...option })), classes)
          }
        </Collapse>
      </>
    )

  const linkProps = url ?
    isExternalURL(url) ?
      {
        href: url
      } :
      {
        component: RouterLink,
        to       : url
      } :
    {}

  return (
    <ListItem
      button
      className={clsx(
        classes.menuDashboardListItem,
        {
          [classes.menuDashboardListItemActive]: url ? location.pathname.indexOf(url) === 0 : false
        }
      )}
      disabled={disabled}
      disableGutters>
      <Link
        className={classes.menuDashboardItem}
        color='inherit'
        onClick={_handleClickLink(url)}
        target={target}
        underline='none'
        {...linkProps}>
        {
          icon ?
            <ListItemIcon className={classes.drawerIcon}>
              {icon}
            </ListItemIcon> :
            null
        }
        <ListItemText
          className={classes.drawerLabel}
          primary={title}
          primaryTypographyProps={{
            variant: 'body2'
          }} />
      </Link>
    </ListItem>
  )
}

const renderDrawerList = (menus, classes) => (
  <List className={classes.root} disablePadding>
    {
      menus.map((menu, index) => <DrawerListItem classes={classes} key={`listItem-${index}`} menu={menu} />)
    }
  </List>
)

function Main(props) {
  const {
    classes,
    menus = [],
    component: Component = 'main',
    shadow = false,
    isOpenDrawer,
    children,
    optionBottom
  } = props

  const _handleClickOptionBottom = ev => {
    if(optionBottom.onClick) optionBottom.onClick(ev)
  }

  return (
    <>
      <Drawer
        classes={{
          paper: clsx(
            classes.drawerPaper,
            {
              [classes.shadow]          : shadow,
              [classes.drawerPaperClose]: isOpenDrawer
            }
          )
        }}
        // className={classes.drawer}
        open={isOpenDrawer}
        variant='permanent'>
        {
          renderDrawerList(
            menus,
            {
              drawerIcon                 : classes.drawerIcon,
              drawerItemCollapse         : classes.drawerItemCollapse,
              drawerLabel                : classes.drawerLabel,
              flexCenterVertical         : classes.flexCenterVertical,
              labelBold                  : classes.labelBold,
              menuDashboardItem          : classes.menuDashboardItem,
              menuDashboardListItem      : classes.menuDashboardListItem,
              menuDashboardListItemActive: classes.menuDashboardListItemActive,
              root                       : classes.listRoot
            }
          )
        }
        {
          optionBottom ? (
            <ListItem
              button
              className={clsx(classes.menuDashboardListItem, classes.optionBottom)}
              disableGutters
              onClick={_handleClickOptionBottom}>
              <div className={classes.menuDashboardItem}>
                {
                  optionBottom.icon ?
                    <ListItemIcon className={classes.drawerIcon}>
                      {optionBottom.icon}
                    </ListItemIcon> :
                    null
                }
                <ListItemText
                  className={classes.drawerLabel}
                  primary={optionBottom.title}
                  primaryTypographyProps={{
                    variant: 'body2'
                  }} />
              </div>
            </ListItem>
          ) : null
        }
      </Drawer>
      <Component className={classes.main}>
        {children}
      </Component>
    </>
  )
}

Main.propTypes = {
  classes     : PropTypes.object.isRequired,
  isOpenDrawer: PropTypes.bool,
  /**
   * @ignore
   */
  menus       : PropTypes.arrayOf(
    PropTypes.shape({
      expanded: PropTypes.bool,
      icon    : PropTypes.element,
      options : PropTypes.array,
      target  : PropTypes.string,
      title   : PropTypes.string.isRequired,
      url     : PropTypes.string
    })
  ),
  optionBottom: PropTypes.shape({
    icon   : PropTypes.element,
    onClick: PropTypes.func,
    title  : PropTypes.string.isRequired
  }),
  shadow: PropTypes.bool
}

export default withStyles(styles, { name: 'KrowdyMain' })(Main)
