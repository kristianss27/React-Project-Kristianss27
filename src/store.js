//With redux
const initialState = {
  excercises: [
    {
      id: "overhead-press",
      title: "Overhead Press",
      description: "Delts excercise",
      muscles: "shoulders"
    },
    {
      id: "overhead-press2",
      title: "Overhead Press2",
      description: "Delts excercise",
      muscles: "shoulders"
    },
    {
      id: "dips",
      title: "Dips",
      description: "Triceps excercise",
      muscles: "triceps"
    },
    {
      id: "barbell-curls",
      title: "Barbell Curls",
      description: "Biceps excercise",
      muscles: "biceps"
    }
  ]
};

export default initialState;
//Without redux
export const muscles = ["shoulders", "chest", "legs", "biceps", "triceps"];

export const excercises = [
  {
    id: "overhead-press",
    title: "Overhead Press",
    description: "Delts excercise",
    muscles: "shoulders"
  },
  {
    id: "overhead-press2",
    title: "Overhead Press2",
    description: "Delts excercise",
    muscles: "shoulders"
  },
  {
    id: "dips",
    title: "Dips",
    description: "Triceps excercise",
    muscles: "triceps"
  },
  {
    id: "barbell-curls",
    title: "Barbell Curls",
    description: "Biceps excercise",
    muscles: "biceps"
  }
];
