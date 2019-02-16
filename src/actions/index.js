import * as types from "../constants/ActionTypes";

export const addExcercise = (newExcercise) => ({
  type: types.ADD_EXCERCISE,
  id: newExcercise.id,
  title: newExcercise.title,
  description: newExcercise.description,
  muscles: newExcercise.muscles
});

export const deleteExcercise = (id) => ({
  type: types.DELETE_EXCERCISE,
  id
})

export const editExcercise = (excercise) => ({
  type: types.EDIT_EXCERCISE,
  excercise
})

export const listExcercises = () => ({
  type: types.ALL_EXCERCISE
});

export const listMuscles = () => ({
  type: types.ALL_MUSCLES
});

export const setCategory = category => ({
  type: types.SET_CATEGORY,
  category
});

export const setExcercise = excercise => ({
  type: types.SET_EXCERCISE,
  excercise
});

export const openForm = openForm => ({
  type: types.OPEN_FORM,
  openForm
});
