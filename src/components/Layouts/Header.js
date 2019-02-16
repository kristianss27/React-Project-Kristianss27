import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import MainButton from '../../containers/MainButton'

export default () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        Excercises database
      </Typography>

      <MainButton />
    </Toolbar>
  </AppBar>
  
)

/*<CreateDialog muscles={muscles} onCreate={onExcerciseCreate} />*/
