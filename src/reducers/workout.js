import * as types from "../constants/ActionTypes";
export default function workout(state = {
  name: '',
  date: '',
  exercises: [
    {
      id: "1",
      title: "Side Laterals to Front",
      description: `<ol class="ExDetail-descriptionSteps"><li class="ExDetail - descriptionStep">In a standing position, hold a pair of dumbbells at your side. This will be your starting position.</li><li class="ExDetail - descriptionStep">Keeping your elbows slightly bent, raise the weights directly in front of you to shoulder height, avoiding any swinging or cheating.</li><li class="ExDetail - descriptionStep">At the top of the exercise move the weights out in front of you, keeping your arms extended.</li><li class="ExDetail - descriptionStep">Lower the weights with a controlled motion.</li><li class="ExDetail - descriptionStep">On the next repetition, raise the weights in front of you to shoulder height before moving the weights laterally to your sides. </li><li class="ExDetail - descriptionStep">Lower the weights to the starting position.</li></ol>`,
      muscles: "shoulders",
      images: [
        "https://www.bodybuilding.com/exercises/exerciseImages/sequences/1791/Male/m/1791_1.jpg",
        "https://www.bodybuilding.com/exercises/exerciseImages/sequences/1791/Male/m/1791_2.jpg",
        "https://www.bodybuilding.com/exercises/exerciseImages/sequences/366/Male/l/366_1.jpg",
        "https://www.bodybuilding.com/exercises/exerciseImages/sequences/1791/Male/m/1791_2.jpg"
      ]
    }
  ],
  trainner: 'kristianss27',
  createdBy: 'kristianss27'
},action) {
  switch(action.type){
    case types.ADD_EXERCISE_TO_WORKOUT:
    return {
      ...state,
      exercises: [...state.exercises, action.exercise]
    }
    case types.DELETE_EXERCISE_FROM_WORKOUT:
      return{
        ...state,
        exercises: [...state.exercises.filter(exercise => exercise.id!==action.idExercise)]
      }
    default:
    return state
  }


}