import * as types from '../constants/ActionTypes'
import * as properties from '../constants/Properties.js'

export const addExerciseToWorkout = newExercise => ({
  type: types.ADD_EXERCISE_TO_WORKOUT,
  exercise: {
    ...newExercise,
    sets: 0,
    repeats: 0,
    weight: ''
  }
})

export const getExerciseSelected = () => ({
  type: types.GET_EXERCISE_SELECTED
})

export const deleteExercise_workout = idExercise => ({
  type: types.DELETE_EXERCISE_FROM_WORKOUT,
  idExercise
})

export const adjustSets = (exerciseId, newValue) => ({
  type: types.ADJUST_SETS_WORKOUT,
  exerciseId,
  newValue
})

export const adjustRepeats = (exerciseId, newValue) => ({
  type: types.ADJUST_REPEATS_WORKOUT,
  exerciseId,
  newValue
})

export const setWeight = (exerciseId, newValue) => ({
  type: types.SET_WEIGHT_WORKOUT,
  exerciseId,
  newValue
})
