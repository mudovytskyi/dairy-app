// import { ADD_COMMENT, SHOW_COMMENTS } from '../actions/actionTypes';

const comments = (state = [], action) => {
    // switch (action.type) {
        // case ADD_COMMENT:
        //     // const selectedTask = {...state[action._id]};
        //     // console.log("SAC", action._id, selectedTask)
        //     // selectedTask.comments.push(action.text)
        //     // let newState = [
        //     //     ...state,
        //     //     ...{
        //     //         [action._id]: selectedTask
        //     //     }
        //     // ]
        //     console.log("ST", state)
        //     let newState = state.map(task =>
        //         {
        //             console.log("TS", task)
        //             return (task.selected)
        //             ? { ...task, comments: [...task.comments, action.text] }
        //             : task
        //         }
        //     )
            
            // return newState
        // console.log("NEW COMMENT STATE", newState)
        // return newState
        // case SHOW_COMMENTS:
        //     return state.map(todo =>
        //         (todo.id === action.id)
        //             ? { ...todo, completed: !todo.completed }
        //             : todo
        //     )
        // default:
            return state
    // }
}

export default comments