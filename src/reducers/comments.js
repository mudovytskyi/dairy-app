import { ADD_COMMENT, SHOW_COMMENTS } from '../actions/actionTypes';

const tasks = (state = [], action) => {
    switch (action.type) {
      case ADD_COMMENT:
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
        case SHOW_COMMENTS:
        return state.map(todo =>
            (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
        default:
        return state
    }
  }
  
  export default tasks