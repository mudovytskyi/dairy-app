import { GET_FROM_LOCAL_STORAGE,
     SET_TO_LOCAL_STORAGE } from '../actions/actionTypes';

const tasks = (state = [], action) => {
    switch (action.type) {
      case GET_FROM_LOCAL_STORAGE:
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
        case SET_TO_LOCAL_STORAGE:
        return state.map(todo =>
            (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
        default:
        return state
    }
  }
  
  export default localStorage