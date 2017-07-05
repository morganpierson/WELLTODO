export const POST_TODO = 'POST_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const POST_TODO_REJECTED = 'POST_TODO_REJECTED';
export const GET_TODOS_REJECTED = 'GET_TODOS_REJECTED';
export const DELETE_TODO_REJECTED = 'DELETE_TODO_REJECTED';
import { GET_TODOS } from '../actions/todoAction';

export function todosReducer(state = {todos: 
  [
  ]
}, action) {
  switch(action.type){
    case GET_TODOS:
      return {...state, todos: [...action.payload]}
    case POST_TODO:
      return {
        todos: [...state.todos,
        ...action.payload
        ]
      };

    case DELETE_TODO:
    //create copy of current list of todos
    const currentTodoToDelete = [...state.todos]
    //determine at which index in todos array is the todo to be deleted
    const indexToDelete = currentTodoToDelete.findIndex(
      function(todo){
        return todo._id == action.payload
      }
    )
    //use slice to delete todo at specific index
    return {todos: [...currentTodoToDelete.slice(0, indexToDelete),
        ...currentTodoToDelete.slice(indexToDelete + 1)]};
        
    case TOGGLE_TODO:
      //create copy of current list of todo
    const currentTodoToUpdate = [...state.todos]
    //determine at which index in todos array is the todo to be updated
    const indexToUpdate = currentTodoToUpdate.findIndex(
      function(todo){
        return todo._id === action._id
      }
    )

    //create a new todo object with new values and with same array index of the item we want to update/replace 
    const newTodoToUpdate = {
      ...currentTodoToUpdate[indexToUpdate],
      completed: !currentTodoToUpdate[indexToUpdate].completed
    }

    let todoUpdate = [...currentTodoToUpdate.slice(0, indexToUpdate), newTodoToUpdate, ...currentTodoToUpdate.slice(indexToUpdate + 1)]
    //use slice to remove the todo at the specified index, replace with the new object and concat with rest of items in array 
    return {...state,
      todos: todoUpdate}
    default:
      return state;
  }
}

