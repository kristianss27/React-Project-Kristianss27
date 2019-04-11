import React from 'react'
import { Button } from '@material-ui/core'

const CustomButton = ({
  classes,
  id,
  text,
  selected = false,
  color = 'secondary',
  action
}) => {
  const variant = selected ? 'contained' : 'outlined'
  const value = selected ? '' : 'body'
  return (
    <Button
      className={classes}
      variant={variant}
      size="small"
      color={color}
      onClick={() => action(id, value)}
    >
      {text}
    </Button>
  )
}

export default CustomButton
