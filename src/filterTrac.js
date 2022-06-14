import { FIND_TRACK } from "./React/action-creator";
const initialState=''
export default function filtertracks(state=initialState,action){
    if(action.type===FIND_TRACK){
      return action.payload;
      
    }
    return state;
    }