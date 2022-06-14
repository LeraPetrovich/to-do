import { combineReducers } from "redux";
import tracks from "./tracks";
import autor from "./autor";
import filtertracks from "../filterTrac";
import todo from "./to-do";
import input from "./input-to";
export default combineReducers({
  tracks,
  autor,
  filtertracks,
  todo,
  input,
});
