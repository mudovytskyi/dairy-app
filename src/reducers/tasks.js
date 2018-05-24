import {
    ADD_TASK,
    SELECT_TASK,
    DELETE_TASK,
    ADD_COMMENT
} from '../actions/actionTypes';

const tasks = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:

            state.map(task => 
                (task.selected)
                    ? { ...task, selected: !task.selected }
                    : task
            )

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
            return state.map(task => 
                (task.selected)
                    ? { ...task, selected: !task.selected }
                    : (task._id === action._id)
                        ? { ...task, selected: !task.selected}
                        : task
            )
        case DELETE_TASK:
            const { [action._id]: removedElement, ...rest } = state;
            return [
                ...rest,
            ]

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