import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MainButton from "../../containers/MainButton";
import Muscles from "../../containers/Muscles.js" 
import MuscleList from "../../components/MuscleList"

export default () => (
  <React.Fragment>
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
          Excercises database
        </Typography>
        <MainButton />
      </Toolbar>
    </AppBar>
    <Muscles/>
  </React.Fragment>
);

/*<CreateDialog muscles={muscles} onCreate={onExcerciseCreate} />*/
