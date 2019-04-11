import * as types from '../constants/ActionTypes'
export default function workout(
  state = {
    name: '',
    date: '',
    exercises: [
      {
        id: '0',
        title: 'Dumbbell Bench Press',
        description: `<ol class="ExDetail-descriptionSteps"><li class="ExDetail-descriptionStep">Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other.</li><li class="ExDetail-descriptionStep">Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width.</li><li class="ExDetail-descriptionStep">Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you.  The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle.  Be sure to maintain full control of the dumbbells at all times.  This will be your starting position.</li><li class="ExDetail-descriptionStep">Then, as you breathe out, use your chest to push the dumbbells up.  Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it.</li><li class="ExDetail-descriptionStep">Repeat the movement for the prescribed amount of repetitions of your training program.</li></ol><p></p><p><strong>Caution:</strong> When you are done, do not drop the dumbbells next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you.</p><p>Just lift your legs from the floor bending at the knees, twist your wrists so that the palms of your hands are facing each other and place the dumbbells on top of your thighs.  When both dumbbells are touching your thighs simultaneously push your upper torso up (while pressing the dumbbells on your thighs) and also perform a slight kick forward with your legs (keeping the dumbbells on top of the thighs).  By doing this combined movement, momentum will help you get back to a sitting position with both dumbbells still on top of your thighs.  At this moment you can place the dumbbells on the floor.</p><p><strong>Variations:</strong></p><p>Another variation of this exercise is to perform it with the palms of the hands facing each other.</p> <p>Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body.  I personally do not use this variation very often as it seems to be hard on my shoulders.</p>`,
        muscles: 'chest',
        images: [
          'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1/Male/l/1_1.jpg',
          'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1/Male/l/1_2.jpg'
        ],
        sets: 4,
        repeats: 12,
        weight: ''
      },
      {
        id: '1',
        title: 'Side Laterals to Front',
        description: `<ol class="ExDetail-descriptionSteps"><li class="ExDetail - descriptionStep">In a standing position, hold a pair of dumbbells at your side. This will be your starting position.</li><li class="ExDetail - descriptionStep">Keeping your elbows slightly bent, raise the weights directly in front of you to shoulder height, avoiding any swinging or cheating.</li><li class="ExDetail - descriptionStep">At the top of the exercise move the weights out in front of you, keeping your arms extended.</li><li class="ExDetail - descriptionStep">Lower the weights with a controlled motion.</li><li class="ExDetail - descriptionStep">On the next repetition, raise the weights in front of you to shoulder height before moving the weights laterally to your sides. </li><li class="ExDetail - descriptionStep">Lower the weights to the starting position.</li></ol>`,
        muscles: 'shoulders',
        images: [
          'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1791/Male/m/1791_1.jpg',
          'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1791/Male/m/1791_2.jpg',
          'https://www.bodybuilding.com/exercises/exerciseImages/sequences/366/Male/l/366_1.jpg',
          'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1791/Male/m/1791_2.jpg'
        ],
        sets: 0,
        repeats: 0,
        weight: ''
      }
    ],
    trainer: '',
    createdBy: ''
  },
  action
) {
  switch (action.type) {
    case types.ADD_EXERCISE_TO_WORKOUT:
      return {
        ...state,
        exercises: [...state.exercises, action.exercise]
      }
    case types.DELETE_EXERCISE_FROM_WORKOUT:
      return {
        ...state,
        exercises: [
          ...state.exercises.filter(
            exercise => exercise.id !== action.idExercise
          )
        ]
      }
    case types.GET_EXERCISE_SELECTED:
      return state.exercises
    case types.ADJUST_SETS_WORKOUT:
      return {
        ...state,
        exercises: [
          ...state.exercises.map(exercise => {
            if (exercise.id === action.exerciseId) {
              exercise = {
                ...exercise,
                sets: action.newValue
              }
            }
            return exercise
          })
        ]
      }
    case types.ADJUST_REPEATS_WORKOUT:
      return {
        ...state,
        exercises: [
          ...state.exercises.map(exercise => {
            if (exercise.id === action.exerciseId) {
              exercise = {
                ...exercise,
                repeats: action.newValue
              }
            }
            return exercise
          })
        ]
      }
    case types.SET_WEIGHT_WORKOUT:
      return {
        ...state,
        exercises: [
          ...state.exercises.map(exercise => {
            if (exercise.id === action.exerciseId) {
              exercise = {
                ...exercise,
                weight: action.newValue
              }
              console.log('entro')
              console.log(exercise)
            }

            return exercise
          })
        ]
      }
    default:
      return state
  }
}
