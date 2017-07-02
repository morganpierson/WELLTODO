"use strict";
import { 
  POST_TODO, 
  DELETE_TODO, 
  UPDATE_TODO 
} from '../reducers/todosReducer'
//Post a todo
export function postTodo(todo) {
  return {
    type: POST_TODO, payload: [{
    id: 1,
    title: "First Todo",
    text: "This is the first todo",
    completed: false
    },
    {
      id: 2,
      title: 'Second Todo',
      text: 'This is the second todo',
      completed: false
    }
  ]}
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