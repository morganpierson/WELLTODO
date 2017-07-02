"use strict";
import { 
  POST_TODO, 
  DELETE_TODO, 
  UPDATE_TODO 
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
    type: POST_TODO, payload: todo}
}

//Delete a todo
export function deleteTodo(id) {
  return {
    type: DELETE_TODO, 
    payload: id
  }
}

//Update a todo
export function updateTodo(todo) {
  return {
  type: UPDATE_TODO,
  payload: todo
  }
}