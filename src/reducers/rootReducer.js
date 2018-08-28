import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import dishReducer from "./dishReducer";
import recipeReducer from "./recipeReducer";

export default combineReducers({
  simpleReducer,
  dishReducer,
  recipeReducer
});
