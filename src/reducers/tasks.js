import {
    ADD_TASK,
    SELECT_TASK,
    DELETE_TASK,
    ADD_COMMENT,
} from '../actions/actionTypes'

const tasks = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state.map(task =>
                    (task.selected)
                        ? { ...task, selected: !task.selected }
                        : task
                ),
                {
                    _id: action._id,
                    name: action.text,
                    selected: true,
                    comments: []
                }
            ]

        case SELECT_TASK:
            return state.map(task => {
                if (!task.selected && task._id === action._id ||
                    task.selected && task._id !== action._id) {
                    return { ...task, selected: !task.selected }
                }
                return task
            })

        case DELETE_TASK:
            return state.filter((task, index, array) =>
                task._id !== action._id
            )

        case ADD_COMMENT:
            return state.map(task =>
                (task.selected)
                    ? { ...task, comments: [...task.comments, action.text] }
                    : task
            )

        default:
            return state
    }
}

export default tasks