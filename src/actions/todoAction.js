"use strict";
import { 
  POST_TODO, 
  DELETE_TODO, 
  UPDATE_TODO, 
  TOGGLE_TODO 
} from '../reducers/todosReducer'
export const GET_TODOS = 'GET_TODOS';
//Get todos
export function getTodos() {
  return {
    type: GET_TODOS
  }
}

//Post a todo
export function postTodo(todo) {
  return {
    type: POST_TODO, payload: todo
}
}
//Delete a todo
export function deleteTodo(title) {
  return {
    type: DELETE_TODO, 
    payload: title
  }
}

//Toggle a todo
export function toggleTodo(_id, completed) {
  return {
    type: TOGGLE_TODO,
    _id: _id,
    completed: completed
    
  }
}

//Update a todo
export function updateTodo(todo) {
  return {
  type: UPDATE_TODO,
  payload: {
    _id: action.payload._id,
    completed: action.payload.completed
  }
  }
}