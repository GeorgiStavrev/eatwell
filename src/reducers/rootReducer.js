import { combineReducers } from "redux";
import dishReducer from "./dishReducer";
import recipeReducer from "./recipeReducer";
import uiReducer from "./uiReducer";
import shoppingListReducer from "./shoppigListReducer";

export default combineReducers({
  dishReducer,
  recipeReducer,
  uiReducer,
  shoppingListReducer
});
