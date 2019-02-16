import { combineReducers } from "redux";
import excercises from "./excercises";
import excercise from "./excercise";
import category from "./category";
import openForm from "./openForm";

const reducer = combineReducers({
  excercises,
  excercise,
  category,
  openForm
});

export default reducer;
