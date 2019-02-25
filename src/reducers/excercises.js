import {
  ADD_EXCERCISE,
  DELETE_EXCERCISE,
  EDIT_EXCERCISE,
  REQUEST_EXCERCISES,
  RECEIVE_EXCERCISES
} from "../constants/ActionTypes";
import initialState from "../store";
import { excercises as excercisesByDefault } from '../store'


export default function excercises(state = [...excercisesByDefault], action) {
  switch (action.type) {
    case ADD_EXCERCISE:
    const array = [
        ...state,
        {
          id: action.id,
          title: action.title,
          muscles: action.muscles,
          description: action.description,
        }
      ]
      return array;
    case DELETE_EXCERCISE:
      return state.filter(excercise=>excercise.id!==action.id)
    case EDIT_EXCERCISE:
      return state.map(excercise => {
        excercise= excercise.id===action.excercise.id
        ? action.excercise
        : excercise
        return excercise
      })
    case REQUEST_EXCERCISES:
      return state
    case RECEIVE_EXCERCISES:
      const result = [
        ...action.items,...state
      ]
      return result;
    default:
      return state;
  }
}
