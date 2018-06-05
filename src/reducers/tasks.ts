import { DairyAppAction } from '../constants/actionTypes';

const {
    ADD_TASK,
    SELECT_TASK,
    DELETE_TASK,
    ADD_COMMENT,
    OTHER_TYPE
} = DairyAppAction

import {
    IAddTaskAction,
    IAddTaskResponseAction,
    ISelectTaskAction,
    IDeleteTaskAction,
    IAddTaskCommentAction,
    IOtherAction
} from '../actions'

import { List, Map } from 'immutable'
import { ITaskImmutable } from '../models/ITaskImmutable';
// import { Task } from '../models/ITask';

type TaskAction =
    IAddTaskAction |
    IAddTaskResponseAction |
    ISelectTaskAction |
    IDeleteTaskAction |
    IAddTaskCommentAction |
    IOtherAction

    const tasks = (state:List<ITaskImmutable> = List([]), action:TaskAction = {type:OTHER_TYPE}) => {
        switch (action.type) {
            case ADD_TASK:
            return state
            .map((task:ITaskImmutable) => task.update('selected', selected => false))
                // @ts-ignore
                .push(Map(/* {
                    _id: action._id,
                    name: action.name,
                    selected: true,
                    comments: List([])
                } *//* new Task(action._id, action.name, true) */
            action.task))

        case SELECT_TASK:
            return state
                .map((task:ITaskImmutable) => {
                    const _id:number = task.get('_id'),
                        _actId:number = action._id,
                        _selected:boolean = task.get('selected')

                    if (!_selected && _id === _actId ||
                        _selected && _id !== _actId) {
                        task = task.update('selected', selected => !_selected)
                    }

                    return task
                })

        case DELETE_TASK:
            return state.filter((task:ITaskImmutable, index:number, array) =>
                task.get('_id') !== action._id
            )

        case ADD_COMMENT:
            return state.map((task:ITaskImmutable) =>
                (task.get('selected'))
                    ? task.update('comments', comments => comments.push(action.comment))
                    : task
            )

        default:
            return state
    }
}

export default tasks