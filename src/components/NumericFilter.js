import React from 'react'
import { withStyles, Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  sizeSmall: {
    padding: '4px 8px',
    minWidth: 10,
    fontSize: theme.typography.pxToRem(13)
  }
})

const NumericFilter = ({ classes, action, id, value, title }) => {
  const isSubmitting = false

  return (
    <div>
      <Typography variant="body2" align="center">
        {title}
      </Typography>
      <Button
        type="submit"
        size="small"
        variant="outlined"
        disabled={isSubmitting}
        color="secondary"
        classes={{ sizeSmall: classes.sizeSmall }} //overwritting the original style
        className={classes.button}
        onClick={() => (value !== 0 ? action(id, value - 1) : null)}
      >
        {'-'}
      </Button>
      <Typography inline={true} variant="body2">
        {value}
      </Typography>
      <Button
        type="submit"
        size="small"
        variant="outlined"
        disabled={isSubmitting}
        color="secondary"
        classes={{ sizeSmall: classes.sizeSmall }} //overwritting the original style
        className={classes.button}
        onClick={() => (value !== 99 ? action(id, value + 1) : null)}
      >
        {'+'}
      </Button>
    </div>
  )
}

export default withStyles(styles)(NumericFilter)
