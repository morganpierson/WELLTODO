"use strict"
import { ADD_COMPLETED_TODO } from '../reducers/completedTodosReducer';

export function addCompletedTodo(todo) {
  return {type: ADD_COMPLETED_TODO, payload: todo }
}