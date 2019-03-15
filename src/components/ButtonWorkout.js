import React from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { addExerciseToWorkout, deleteExerciseFromWorkout } from '../actions/workout.js'

const ButtonWorkout = ({ exercise, exerciseOnWorkout, addToWorkout, unSelect}) => {
  
  const selected = exerciseOnWorkout.filter(item => { 
      return item.id===exercise.id
    })

  const variant = selected.length > 0 ?'contained':'outlined'
  const word = selected.length > 0 ? 'Selected' : 'Select'
  const onClick = () => { selected.length > 0 ? unSelect(exercise):addToWorkout(exercise) }

  return(
    <Button variant={variant} size="small" color="primary" onClick={onClick}>
      {word}
    </Button>
  )
}

const mapStateToProps = state => ({
  exerciseOnWorkout: state.workout.exercises
})

const mapDispatchToProps = dispatch => ({
  addToWorkout: (exercise) => {
    dispatch(addExerciseToWorkout(exercise))
  },
  unSelect: (exercise) => {
    dispatch(deleteExerciseFromWorkout(exercise.id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonWorkout)


/**if (state.workout.exercises.filter(workoutExercise => {
    return workoutExercise === result
  })) { item['selected'] = true } */