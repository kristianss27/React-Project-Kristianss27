import React, { Fragment } from "react";
import {
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Card, CardHeader, CardMedia, CardContent, CardActions, Avatar
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import parse from 'html-react-parser'
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  },
  items: {
    height: 60,
    width: 150,
  },
  small: {
    '& svg': {
      fontSize: 18
    }
  },
  medium: {
    '& svg': {
      fontSize: 24
    }
  },
  large: {
    '& svg': {
      fontSize: 32
    }
  },
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    marginTop: '20px',
    paddingTop: '100%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const ExcerciseList = ({ classes, excercises, category, onSelect, onDelete, excercise, openForm, onEdit }) => {
  const title = excercise.title ? excercise.title : "Excercise App";
  const description = excercise.title ? parse(excercise.description) : "Pick up an excercise from the left";
  const images = excercise.images
  ? excercise.images.map(item => {
      return(<CardMedia key={item}
        className={classes.media}
        image={item}
      />
      )
  })
  :''
  return (
    <Grid container>
      <Grid item xs sm>
        <Paper className={classes.paper}>
          {excercises.map(([group, excercises]) =>
            !category || group === category ? (
              <Fragment key={group}>
                <Typography variant="headline">
                  {group.toUpperCase()}
                </Typography>
                <List>
                  {excercises.map(excercise => (
                    <ListItem
                      key={excercise.id}
                      button
                      onClick={() => onSelect(excercise)}
                    >
                    
                    <ListItemText primary={excercise.title}/>

                      <ListItemSecondaryAction>
                        <IconButton className={classes.medium}
                          aria-label="Delete"
                          onClick={() => onEdit(true,excercise)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton className={classes.medium}
                          aria-label="Delete"
                          onClick={() => onDelete(excercise.id)}
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
        <Paper className={classes.paper}>
          <Typography variant="display1">{title}</Typography>
          <Typography variant="subheading" style={{ marginTop: 20 }}>
            {
              description
            }
          </Typography>
          <Card className={classes.card}>
            {images}
          </Card> 
        </Paper>
      </Grid>
    </Grid>
  );
};

ExcerciseList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExcerciseList);


