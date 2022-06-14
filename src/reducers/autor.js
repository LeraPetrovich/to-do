import { ADD_EMAIL } from "../Action/action-creator";
const initialState=[
  ];
export default function playlist(state=initialState,action){
  if(action.type===ADD_EMAIL){
    return[
      ...state,
      action.payload
    ];
    
  }

  return state;
  }