const initialState = [];
export default function todo(state = initialState, action) {
  if (action.type === "ADD_TODO") {
    return [...state, action.payload];
  }

  return state;
}
