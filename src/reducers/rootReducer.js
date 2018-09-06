import { combineReducers } from "redux";
import dishReducer from "./dishReducer";
import recipeReducer from "./recipeReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  dishReducer,
  recipeReducer,
  uiReducer
});
