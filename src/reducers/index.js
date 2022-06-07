import { combineReducers } from "redux";
import tracks from "./tracks"
import autor from './autor'
import filtertracks from "../filterTrac";
export default combineReducers({
    tracks,
    autor,
    filtertracks,
})