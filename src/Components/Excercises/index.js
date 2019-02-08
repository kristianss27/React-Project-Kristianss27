import React, { Fragment } from "react";
import {
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({
  excercises,
  category,
  onSelect,
  onDelete,
  excercise: {
    id,
    title = "Welcome to the world",
    description = "Please select an excercises from the list to the left"
  }
}) => {
  return (
    <Grid container>
      <Grid item xs sm>
        <Paper style={styles.Paper}>
          {excercises.map(([group, excercises]) =>
            !category || group === category ? (
              <Fragment key={group}>
                <Typography variant="headline">
                  {group.toUpperCase()}
                </Typography>
                <List component="ul">
                  {excercises.map(({ id, title }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton
                          aria-label="Delete"
                          onClick={() => onDelete(id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item xs sm>
        <Paper style={styles.Paper}>
          <Typography variant="display1">{title}</Typography>
          <Typography variant="subheading" style={{ marginTop: 20 }}>
            {description}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
