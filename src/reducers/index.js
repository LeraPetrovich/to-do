import { combineReducers } from "redux";
import tracks from "./tracks"
import autor from './autor'
import filtertracks from "../filterTrac";
import pastState from './past-state'
export default combineReducers({
    tracks,
    autor,
    filtertracks,
    pastState,
})