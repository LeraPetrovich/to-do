
const initialState=[]
export default function playlist(state=initialState,action){
    if(action.type==="ADD_TRACK"){
      return[
        ...state,
        action.payload
      ];
      /*
      return [
        ...state,
        action.playload
      ];*/
      
    }
    else if (action.type==="ADD_NAME"){
      return[
        ...state,
        action.payload
      ];
    }

    return state;
    }