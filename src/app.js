"use strict"
import { createStore } from 'redux';
import { 
  POST_TODO, 
  DELETE_TODO, 
  UPDATE_TODO 
} from './reducers/todosReducer';

import { ADD_COMPLETED_TODO } from './reducers/completedTodosReducer';
import { addCompletedTodo } from './actions/completedTodosAction';
import { postTodo, deleteTodo, updateTodo } from './actions/todoAction';
import reducers from './reducers/index';

const store = createStore(reducers);

//create and dispatch actions
store.subscribe(function() {
  console.log('The current state is', store.getState())
})
//define reducers

//dispatch action CREATE
store.dispatch(postTodo([{
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
]))

// //dispatch another action DELETE

 store.dispatch(deleteTodo({id: 1}))

// //dispatch another action UPDATE
store.dispatch(updateTodo({
    id: 2,
    title: "New Second Todo",
    text: 'This is the second todo updated',
    completed: false
  }))

//COMPLETED TODOS actions 
store.dispatch(addCompletedTodo([{id: 1}]))