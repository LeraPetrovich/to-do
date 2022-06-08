
const initialState=[]
export default function pastState(state = initialState, action) {
  switch (action.type) {
    case 'RESET_TYPE_ID':
      return {...state, type_id: null};
    default:
      return state;
  }
}