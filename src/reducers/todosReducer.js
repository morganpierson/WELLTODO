export const POST_TODO = 'POST_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
import { GET_TODOS } from '../actions/todoAction';
export function todosReducer(state = {todos: 
  [{
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
        return todo.id === action.payload.id
      }
    )
    //use slice to delete book at specific index
    return {todos: [...currentTodoToDelete.slice(0, indexToDelete),
        ...currentTodoToDelete.slice(indexToDelete + 1)]}

    case UPDATE_TODO:
    //create copy of current list of books
    const currentTodoToUpdate = [...state.todos]
    //determine at which index in books array is the book to be updated
    const indexToUpdate = currentTodoToUpdate.findIndex(
      function(todo){
        return todo.id === action.payload.id
      }
    )
    //create a new book object with new values and with same array index of the item we want to update/replace 
    const newTodoToUpdate = {
      ...currentTodoToUpdate[indexToUpdate],
      title: action.payload.title,
      text: action.payload.text,
      completed: action.payload.completed
    }
    //use slice to remove the book at the specified index, replace with the new object and concat with rest of items in array 
    return {todos: [...currentTodoToUpdate.slice(0, indexToUpdate), newTodoToUpdate, ...currentTodoToUpdate.slice(indexToUpdate + 1)]}
    default:
      return state;
  }
}
//create store
