"use strict";
import { combineReducers } from 'redux'

//import reducers to be combined
import {todosReducer} from './todosReducer';

//combine reducers
export default combineReducers({
  todos: todosReducer
})