"use strict"
export const ADD_COMPLETED_TODO = 'ADD_COMPLETED_TODO'
//create reducer for storage of completed todos
export function completedTodosReducer(state = {completedTodos:[]}, action) {
  switch(action.type) {
    case 'ADD_COMPLETED_TODO':
      return {completedTodos: [...state, ...action.payload]}
    default:
      return state
  }
}