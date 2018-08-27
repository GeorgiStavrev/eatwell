import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import dishReducer from "./dishReducer";

export default combineReducers({
  simpleReducer,
  dishReducer
});
