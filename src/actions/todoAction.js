"use strict";
import axios from 'axios';

import { 
  POST_TODO, 
  DELETE_TODO, 
  UPDATE_TODO, 
  TOGGLE_TODO ,
  POST_TODO_REJECTED,
  GET_TODOS_REJECTED,
  DELETE_TODO_REJECTED
} from '../reducers/todosReducer'
export const GET_TODOS = 'GET_TODOS';
//Get todos
export function getTodos() {
  return function(dispatch) {
    axios.get('/todos')
    .then(function(response) {
      dispatch({ type: GET_TODOS, payload: response.data })
    })
    .catch(function(err) {
      dispatch({ type: GET_TODOS_REJECTED, payload: err })
    })
  }
}

//Post a todo
export function postTodo(todo) {
  return function(dispatch) {
    axios.post('/todos', todo)
    .then(function(response) {
      dispatch({ type: POST_TODO, payload: response.data })
    })
    .catch(function(err){
      dispatch({ type: POST_TODO_REJECTED, payload: err })
    })
  }
//   return {
//     type: POST_TODO, payload: todo
// }
}
//Delete a todo
export function deleteTodo(id) {
  return function(dispatch) {
    axios.delete(`/todos/${id}`)
    .then(function(response) {
      dispatch({ type: DELETE_TODO, payload: id })
    })
    .catch(function (err) {
      dispatch({ type: DELETE_TODO_REJECTED, payload: err })
    })
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