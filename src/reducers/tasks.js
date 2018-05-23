import { ADD_TASK, SELECT_TASK, DELETE_TASK } from '../actions/actionTypes';

// const initState = {
//     tasks: [],
//     currentTaskID: -1,
//     lastTaskID: 0,
//   };

const tasks = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            console.log("STATE", state)
            return [
                ...state,
                {
                    _id: action._id,
                    name: action.text,
                    comments: []
                }
                // tasks,
                // ...{ ['currentTaskID']: action._id },
                // ...{ ['lastTaskID']: action._id}
            ]
        // case SELECT_TASK:
        //     return state.map(todo =>
        //         (todo.id === action.id)
        //             ? { ...todo, completed: !todo.completed }
        //             : todo
        //     )
        case DELETE_TASK:
            const {[action._id]: removedElement, ...rest} = state;
            return {
                ...rest,
            }
        default:
            return state
    }
}

export default tasks