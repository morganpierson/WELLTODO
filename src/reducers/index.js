
import { combineReducers } from 'redux'

//import reducers to be combined
import {todosReducer} from './todosReducer';
import {completedTodosReducer} from './completedTodosReducer'
//combine reducers
export default combineReducers({
  todos: todosReducer,
  completedTodos: completedTodosReducer
})