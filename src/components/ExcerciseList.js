import React, { Fragment } from "react"
import {
  Grid,
  Typography,
  Card, CardMedia, CardContent, CardActionArea, CardActions, List, ListItem, ListItemText
} from "@material-ui/core"
import * as _properties from "../constants/Properties"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import parse from 'html-react-parser'
import red from '@material-ui/core/colors/red'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import toRenderProps from 'recompose/toRenderProps'
import withWidth from '@material-ui/core/withWidth'
import SwipeableImg from './SwipeableImg'
import Drawer from '@material-ui/core/Drawer'
import TabMuscles from "../containers/TabMuscles";

const styles = theme => ({
  root: {
    flexGrow: '1',
    overflow: 'hidden'
  },
  photos: {
    padding: theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      backgroundColor: theme.palette.secondary.main,
    }
  },
  card: {
    flex: 'auto',
    color: theme.palette.text.secondary,
    marginTop: '2px',
    marginBottom: '1px'
  },
  desc: {
    display: 'flex',
    flexWrap: 'wrap', //nowrap (default) | wrap | wrap-reverse
    flexDirection: 'row', //row (default)| row-reverse | column | column-reverse;
    marginTop: 1,
    color: theme.palette.text.secondary
  },
  cover: {
    objectFit: 'cover',
    maxWidth: "220px",
    maxHeight: "220px"
  },
  content: {
    objectFit: 'cover',
    maxWidth: "220px",
    maxHeight: "220px"
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
  cardDescription: {
    maxWidth: 400,
  },
  swipeable: {
    display:'inline-flex'
  },
  media: {

  },
  appBar: {
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 1
  },
  flex: {
    flex: 1,
  },
  drawer: {
    width: '320',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '320',
  },
  drawerImage: {
    marginTop: 3,
    width: '320px'
  },
  textDesc: {
    marginTop: '70px',
    marginLeft: '170px'
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const WithWidth = toRenderProps(withWidth());

class ExcerciseList extends React.Component{
  state = {
    index:0,
    open: false
  }

  handleClickOpen = excercise => e => {
    console.log(`VALUES ${excercise}`)
    this.props.onSelect(excercise)
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  handleChange = (value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeTab = (event,index) => {
    this.setState({
      index,
    });
  };

  render(){

  const { classes, excercises, category, onSelect, onDelete, excercise, openForm, onEdit, 
    match, location, history } = this.props
  const title = excercise.title ? excercise.title : "Excercise App";
  const description = excercise.title ? parse(excercise.description) : "Pick up an excercise from the left";
  const { index } = this.state
  const images = excercise.images
  ? excercise.images.map(item => {
      return(
          <CardMedia key={item} className={classes.media} image={item}/>
      )
  })
  :''
  console.log('REACT ROUTER')
  console.log(match)
  console.log(location)
  console.log(history)
  
  return(
    <div className={classes.root}>
    <div><TabMuscles /></div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={24}
      >
        {excercises.map(excercise => 
        { 
          
        return(
          <Grid item>
            <Card className={classes.card}>
            <CardActionArea onClick={this.handleClickOpen(excercise)}>
              <div className={classes.desc}>
                <CardMedia
                  key={excercise.id}
                  component="img"
                  alt={excercise.title}
                  className={classes.cover}
                  image={ excercise.images && excercise.images.length > 0
                    ? excercise.images[0]
                    :_properties.IMG_DEFAULT 
                  }
                  title={excercise.title}
                />
              </div>
              <CardContent> 
                  <Typography component="subtitle1" variant="subtitle1" gutterBottom color="inherit">
                  {excercise.title}
                  </Typography>
                  <Typography component="p" gutterBottom>
                     description
                  </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions style={{display:'flex',justifyContent:'flex-end'}}>
                  <Button variant="outlined" size="small" color="primary">
                    Share
                  </Button>
                  <Button variant="outlined" size="small" color="primary" >
                    Select
                  </Button>
                </CardActions>
            </Card>
          </Grid>
        )})}
      </Grid>  

      <div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" fontWeight="fontWeightLight" className={classes.flex}>
                OVERVIEW
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>

          <WithWidth>
          {
            ({ width }) => {
              if(width==='xs'){
                return(
                <div>
                <SwipeableImg exercise={excercise} />
                </div>
                )
              }
              else{
                return(
                  <div>
                  <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                      paper: classes.drawerPaper,
                    }}>
                    <List style={{marginTop: '55px'}}>
                      {
                        excercise.images.map((url, index) => (
                        <ListItem button key={index}>
                          <img src={url} className={classes.cover}/>
                        </ListItem>
                        ))}
                    </List>
                  </Drawer>
                  <Typography variant="subheading" className={classes.textDesc}>
                  {
                    description
                  }
                  </Typography>
                  </div>
                )
              }
              //return <div>{`Current width: ${width}`}</div>
            }
          }
          </WithWidth>
        </Dialog>
      </div>
    </div>
  )
}
}

ExcerciseList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExcerciseList);

/**
 * 
 * Card style
 *     padding: theme.spacing.unit * 1,
    marginTop: 5,
    marginBottom: 1,
    marginLeft: 1,
    marginRight: 1,



 */