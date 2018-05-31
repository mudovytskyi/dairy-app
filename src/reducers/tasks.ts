import {
    ADD_TASK,
    SELECT_TASK,
    DELETE_TASK,
    ADD_COMMENT,
} from '../constants/actionTypes'

import {
    AddTaskAction,
    SelectTaskAction,
    DeleteTaskAction,
    AddTaskCommentAction,
    OtherAction
} from '../actions'

import { List, Map } from 'immutable'

type TaskAction =
    AddTaskAction |
    SelectTaskAction |
    DeleteTaskAction |
    AddTaskCommentAction

const tasks = (state = List([]), action:TaskAction = OtherAction) => {
    switch (action.type) {
        case ADD_TASK:
            return state
                .map(task => task.update('selected', selected => false))
                .push(Map({
                    _id: action._id,
                    name: action.name,
                    selected: true,
                    comments: List([])
                }))

        case SELECT_TASK:
            return state
                .map(task => {
                    let _id = task.get('_id'),
                        _actId = action._id,
                        _selected = task.get('selected')

                    if (!_selected && _id === _actId ||
                        _selected && _id !== _actId) {
                        task = task.update('selected', selected => !_selected)
                    }

                    return task
                })

        case DELETE_TASK:
            return state.filter((task, index, array) =>
                task.get('_id') !== action._id
            )

        case ADD_COMMENT:
            return state.map(task =>
                (task.get('selected'))
                    ? task.update('comments', comments => comments.push(action.comment))
                    : task
            )

        default:
            return state
    }
}

export default tasks