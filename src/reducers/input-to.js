import { ADD_INPUT } from "../Action/action-creator";
const initialState = [];
export default function input(state = initialState, action) {
  if (action.type === ADD_INPUT) {
    return [...state, action.payload];
  }

  return state;
}
