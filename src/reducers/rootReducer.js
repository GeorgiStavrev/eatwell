import {
  combineReducers
} from "redux";
import dishReducer from "./dishReducer";
import recipeReducer from "./recipeReducer";
import uiReducer from "./uiReducer";
import shoppingListReducer from "./shoppigListReducer";
import menuReducer from "./menuReducer"

export default combineReducers({
  dishReducer,
  recipeReducer,
  uiReducer,
  shoppingListReducer,
  menuReducer
});