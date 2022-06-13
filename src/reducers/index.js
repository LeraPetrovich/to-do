import { combineReducers } from "redux";
import tracks from "./tracks";
import autor from "./autor";
import filtertracks from "../filterTrac";
import pastState from "./past-state";
import todo from "./to-do";
import input from "./input-to";
export default combineReducers({
  tracks,
  autor,
  filtertracks,
  pastState,
  todo,
  input,
});
