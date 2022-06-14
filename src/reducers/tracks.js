import { ADD_TRACK } from "../Action/action-creator";
const initialState=[]
export default function playlist(state=initialState,action){
    if(action.type===ADD_TRACK){
      return[
        ...state,
        action.payload
      ];}

    return state;
    }