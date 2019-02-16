import {
  ADD_EXCERCISE,
  DELETE_EXCERCISE,
  EDIT_EXCERCISE
} from "../constants/ActionTypes";

export default function excercises(state = null, action) {
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

    default:
      return state;
  }
}
