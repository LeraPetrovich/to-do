import { ADD_TRACK, DELETE_TRACK, UPDATE_TODO } from "../action-creator";
const initialState=[]
export default function playlist(state=initialState,action){
  const { type, payload } = action;

  switch (type) {
      case ADD_TRACK:
          return state.concat(payload);
      case  DELETE_TRACK:
          return state.filter((tracks) => tracks.id !== payload);
          case UPDATE_TODO:
            return state.map((tracks) => {
                if (tracks.id !== payload.id) return tracks;
                return payload;  });
      default:
          return state;
  }
    }


    