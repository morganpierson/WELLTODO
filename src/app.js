"use strict"
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { 
  POST_TODO, 
  DELETE_TODO, 
  UPDATE_TODO 
} from './reducers/todosReducer';

import { ADD_COMPLETED_TODO } from './reducers/completedTodosReducer';
import { addCompletedTodo } from './actions/completedTodosAction';
import { postTodo, deleteTodo, updateTodo } from './actions/todoAction';
import reducers from './reducers/index';
import TodoList from './components/pages/TodoList';
import Menu from './components/menu';
import Footer from './components/footer';
import TodoForm from './components/pages/TodoForm';
import Main from './Main';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

const Routes = (
  <Provider store={store}>
    <BrowserRouter>
      <div> 
        <Menu />
        <Switch>
          <Route exact path='/' component={TodoList} />
          <Route path='admin' component={TodoForm} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
)

render(Routes, document.getElementById('app'));
//create and dispatch actions

//define reducers

//dispatch action CREATE
// store.dispatch(postTodo([{
//   id: 1,
//   title: "First Todo",
//   text: "This is the first todo",
//   completed: false
//   },
//   {
//     id: 2,
//     title: 'Second Todo',
//     text: 'This is the second todo',
//     completed: false
//   }
// ]))

// //dispatch another action DELETE

//  store.dispatch(deleteTodo({id: 1}))

// // //dispatch another action UPDATE
// store.dispatch(updateTodo({
//     id: 2,
//     title: "New Second Todo",
//     text: 'This is the second todo updated',
//     completed: false
//   }))

// //COMPLETED TODOS actions 
// store.dispatch(addCompletedTodo([{id: 1}]))