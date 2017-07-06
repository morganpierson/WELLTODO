"use strict"
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
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
import About from './components/pages/aboutMe';
import Main from './Main';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

const Routes = (
  <Provider store={store}>
    <BrowserRouter>
      <div> 
        <Menu />
        <Switch>
          <Route exact path='/' component={TodoList} />
          <Route path='/admin' component={About} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
)

render(Routes, document.getElementById('app'));
