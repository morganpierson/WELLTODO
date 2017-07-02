export const POST_TODO = 'POST_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
import { GET_TODOS } from '../actions/todoAction';

export function todosReducer(state = {todos: 
  [{
    _id: 1,
    title: "First Todo",
    text: "This is the first todo",
    completed: false
    },
    {
      _id: 2,
      title: 'Second Todo',
      text: 'This is the second todo',
      completed: false
    }
  ]
}, action) {
  switch(action.type){
    case GET_TODOS:
      return {...state, todos: [...state.todos]}
    case POST_TODO:
      return {
        todos: [...state.todos,
        ...action.payload
        ]
      };

    case DELETE_TODO:
    //create copy of current list of books
    const currentTodoToDelete = [...state.todos]
    //determine at which index in books array is the book to be deleted
    const indexToDelete = currentTodoToDelete.findIndex(
      function(todo){
        return todo.title == action.payload
      }
    )
    //use slice to delete book at specific index
    return {todos: [...currentTodoToDelete.slice(0, indexToDelete),
        ...currentTodoToDelete.slice(indexToDelete + 1)]};
        
    case TOGGLE_TODO:
      //create copy of current list of books
    const currentTodoToUpdate = [...state.todos]
    //determine at which index in books array is the book to be updated
    const indexToUpdate = currentTodoToUpdate.findIndex(
      function(todo){
        return todo._id === action._id
      }
    )

    console.log("ACTION ID: ", action._id)
    console.log('CURRENT TODO TO UPDATE: ', currentTodoToUpdate)
    console.log('CURRENT INDEX TO UPDATE: ', indexToUpdate)
    //create a new book object with new values and with same array index of the item we want to update/replace 
    const newTodoToUpdate = {
      ...currentTodoToUpdate[indexToUpdate],
      completed: !currentTodoToUpdate[indexToUpdate].completed
    }

    let todoUpdate = [...currentTodoToUpdate.slice(0, indexToUpdate), newTodoToUpdate, ...currentTodoToUpdate.slice(indexToUpdate + 1)]
    //use slice to remove the book at the specified index, replace with the new object and concat with rest of items in array 
    return {...state,
      todos: todoUpdate}
    default:
      return state;
  }
}
//create store
