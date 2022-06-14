export const ADD_TRACK = 'ADD_TRACK'
export const ADD_EMAIL = 'ADD_EMAIL'
export const RESET_TYPE_ID = 'RESET_TYPE_ID'
export const ADD_INPUT = 'ADD_INPUT'
export const ADD_TODO = 'ADD_TODO'
export const FIND_TRACK = 'FIND_TRACK' 
export function findTrack( name ){
return {
 type: FIND_TRACK, 
  payload: name 
}}
export function addInput( payload ){
return {
   type: ADD_INPUT,
   payload:payload 
  }}
  export function addTrack( payload ){
    return{
       type: ADD_TRACK, 
       payload:payload
       }}

       export function addTodo( payload ){
        return{
           type: ADD_TODO,
            payload: payload }}