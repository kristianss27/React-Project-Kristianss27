import React from 'react'
import {
  ButtonBase,
  ExpansionPanelActions,
  CardMedia,
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Divider,
  Avatar,
  TextField
} from '@material-ui/core'
import * as _properties from '../constants/Properties'
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import NumericFilter from './NumericFilter'
import * as properties from '../constants/Properties'
import CustomButton from './CustomButton'
import CustomTextField from './CustomTextField'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  image: {
    width: 100,
    height: 100,
    objectFit: 'cover'
  },
  content: {
    display: 'flex',
    margin: '1px 0',
    '& > :last-child': {
      paddingRight: 2
    }
  },
  rootSummary: {
    padding: 0
  },
  expandIcon: {},
  title: {
    flex: '1 1 auto',
    padding: '0 16px',
    minWidth: 0,
    alignSelf: 'center'
  },
  fieldset: {
    display: 'flex',
    minInlineSize: 'min-content',
    borderWidth: '1px',
    flexGrow: 1,
    flexDirection: 'column'
  },
  button: {
    margin: theme.spacing.unit,
    padding: '6px 8px'
  },
  rootTextField: {
    // Reset fieldset default style.
    maxWidth: '70px',
    margin: theme.spacing.unit,
    border: 0,
    verticalAlign: 'top' // Fix alignment issue on Safari.
  },
  input: {
    padding: '8px 4px'
  },
  avatar: {
    margin: theme.spacing.unit
  },
  errorBox: {
    color: 'red',
    marginTop: '.1rem',
    alignSelf: 'flex-end'
  }
})

const WorkOut = ({
  classes,
  workout,
  deleteExercise_workout,
  adjustSets,
  adjustRepeats,
  setWeight
}) => {
  return (
    <div className={classes.root}>
      <Grid justify="center" alignItems="center" container spacing={16}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          {workout.exercises.length > 0
            ? workout.exercises.map(exercise => (
                <div key={exercise.id}>
                  <ExpansionPanel square={true} elevation={0}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      classes={{
                        root: classes.rootSummary,
                        content: classes.content,
                        expandIcon: classes.expandIcon
                      }}
                    >
                      <CardMedia
                        key={exercise.id}
                        component="img"
                        alt={exercise.title}
                        className={classes.image}
                        image={
                          exercise.images && exercise.images.length > 0
                            ? exercise.images[0]
                            : _properties.IMG_DEFAULT
                        }
                        title={exercise.title}
                      />
                      <Typography variant="subtitle2" className={classes.title}>
                        {exercise.title}
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <fieldset className={classes.fieldset}>
                        <legend>
                          {<Typography>Set up your workout</Typography>}
                        </legend>
                        <Grid
                          container
                          spacing={24}
                          justify="center"
                          alignItems="center"
                        >
                          <Grid item alignContent="center">
                            <Typography align="center">Trainer</Typography>
                            <Avatar
                              className={classes.avatar}
                              src={
                                workout.trainer
                                  ? workout.trainer
                                  : properties.AVATAR_DEFAULT
                              }
                            />
                          </Grid>
                          <Grid item alignContent="center">
                            <NumericFilter
                              title="Sets"
                              action={adjustSets}
                              id={exercise.id}
                              value={exercise.sets}
                            />
                          </Grid>
                          <Grid item>
                            <NumericFilter
                              title="Reps"
                              action={adjustRepeats}
                              id={exercise.id}
                              value={exercise.repeats}
                            />
                          </Grid>
                          <Grid item>
                            <Typography align="center">Weight</Typography>
                            <CustomButton
                              id={exercise.id}
                              text={`Body`}
                              action={setWeight}
                              selected={exercise.weight === 'body'}
                              classes={classes.button}
                            />
                            <CustomTextField
                              id={exercise.id}
                              method={setWeight}
                              disabled={exercise.weight === 'body'}
                              value={
                                exercise.weight === 'body'
                                  ? ''
                                  : exercise.weight
                              }
                              placeholder={'lb/kg'}
                              classes={classes}
                            />
                          </Grid>
                        </Grid>
                      </fieldset>
                    </ExpansionPanelDetails>
                    <ExpansionPanelActions>
                      <ButtonBase
                        focusRipple={false}
                        disableTouchRipple={true}
                        disableRipple={true}
                        color="secondary"
                        style={{ margin: '9px' }}
                        onClick={() => deleteExercise_workout(exercise.id)}
                      >
                        <DeleteIcon />
                      </ButtonBase>
                    </ExpansionPanelActions>
                  </ExpansionPanel>
                  <Divider />
                </div>
              ))
            : 'You should pick up some exercises first'}
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(WorkOut)
