"use strict"
import { createStore } from 'redux';

//import combine reducers
import reducers from './reducers/index';

const store = createStore(reducers);

//create and dispatch actions
store.subscribe(function() {
  console.log('The current state is', store.getState())
})
//define reducers

//dispatch action CREATE
store.dispatch({type: 'POST_TODO', payload: [{
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
]})

// //dispatch another action DELETE
 store.dispatch({type: 'DELETE_TODO', payload: {id: 1}})

// //dispatch another action UPDATE
store.dispatch({
  type: "UPDATE_TODO",
  payload: {
    id: 2,
    title: "New Second Todo",
    text: 'This is the second todo updated',
    completed: false
  }
})

//COMPLETED TODOS actions 
store.dispatch({type: 'ADD_TO_COMPLETED_TODOS', payload: [{id: 1}]})