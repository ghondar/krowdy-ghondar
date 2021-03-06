import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@krowdy-ui/styles'
import { Typography, Card, CardHeader, Avatar, Tooltip } from '@krowdy-ui/core'

export const styles = (theme) => ({
  actionContainer: {
    alignItems: 'center',
    display   : 'flex'
  },
  actionHoverableContainer: {
    display    : 'none',
    marginRight: theme.spacing(1)
  },
  avatar: {
    border  : `1px solid ${theme.palette.grey[400]}`,
    fontSize: 10,
    height  : 28,
    width   : 28
  },
  container: {
    alignItems: 'center',
    display   : 'flex'
  },
  fullName: {
    cursor         : 'default',
    overflow       : 'hidden',
    'text-overflow': 'ellipsis',
    'white-space'  : 'nowrap',
    width          : 132
  },
  header: {
    padding: theme.spacing(1)
  },
  headerAction: {
    marginTop: theme.spacing(1/8)
  },
  leftContainer: {
    color       : ({ primaryColorNumber = false }) => primaryColorNumber ? theme.palette.primary[500] : theme.palette.secondary[900],
    fontSize    : 10,
    marginBottom: theme.spacing(1),
    marginRight : theme.spacing(.75),
    maxWidth    : 12,
    minWidth    : 12,
    width       : 12
  },
  rightContainer: {
    flex: 1
  },
  root: {
    '&:hover': {
      '& $actionHoverableContainer': {
        display: 'block'
      }
    },
    borderRadius: 8
  }
})

const CardCandidateRanking = ({
  lastName= '',
  firstName= '',
  photo= '',
  classes,
  action,
  actionHoverable,
  position,
  paddingLeft,
  selected = false,
  className,
  onClick = () => {}
}) => {
  const Container = position || paddingLeft ?
    ({ children }) => (
      <div className={classes.container}>
        <Typography className={classes.leftContainer}>{ !paddingLeft && position }</Typography>
        <div className={classes.rightContainer}>{children}</div>
      </div>
    ):
    ({ children }) =>
      <>{children}</>

  return (
    <Container>
      <Card
        className={clsx(classes.root, className)}
        hoverable
        onClick={onClick}
        selected={selected}
        variant='outlined'>
        <CardHeader
          action={(
            <div className={classes.actionContainer}>
              <div className={classes.actionHoverableContainer}>{actionHoverable}</div>
              {action}
            </div>
          )}
          avatar={<Avatar alt={`${firstName} ${lastName}`} className={classes.avatar} src={photo}>{!photo && `${firstName ? firstName[0]: ''} ${lastName ? lastName[0]: ''}`}</Avatar>}
          classes={{ action: classes.headerAction }}
          className={classes.header}
          title={
            <Tooltip placement='top' title={`${firstName} ${lastName}`}>
              <Typography component='span' >
                {firstName} {lastName}
              </Typography >
            </Tooltip>
          }
          titleTypographyProps={{ className: classes.fullName }} />
      </Card>
    </Container>
  )
}

CardCandidateRanking.propTypes = {
  action            : PropTypes.node,
  actionHoverable   : PropTypes.node,
  className         : PropTypes.string,
  classes           : PropTypes.object,
  firstName         : PropTypes.string,
  lastName          : PropTypes.string,
  onClick           : PropTypes.func,
  paddingLeft       : PropTypes.bool,
  photo             : PropTypes.string,
  position          : PropTypes.number,
  primaryColorNumber: PropTypes.bool,
  selected          : PropTypes.bool
}

CardCandidateRanking.muiName = 'CardCandidateRanking'

export default withStyles(styles, { name: 'CardCandidateRanking' })(CardCandidateRanking)
