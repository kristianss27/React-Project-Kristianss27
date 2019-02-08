import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../Excercises/Dialogs/Create'

export default ({ muscles, onExcerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        Excercises database
      </Typography>

      <CreateDialog muscles={muscles} onCreate={onExcerciseCreate} />
    </Toolbar>
  </AppBar>
)
