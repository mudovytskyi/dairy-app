import { DairyAppAction } from '../constants/actionTypes'

const {
    ADD_TASK,
    SELECT_TASK,
    DELETE_TASK,
    ADD_COMMENT,
    OTHER_TYPE
} = DairyAppAction

import {
    // IAddTaskAction,
    IAddTaskResponseAction,
    // ISelectTaskAction,
    ISelectTaskResponseAction,
    IDeleteTaskAction,
    // IAddTaskCommentAction,
    IAddTaskCommentResponseAction,
    IOtherAction
} from '../actions'

import { List, Map } from 'immutable'
import { ITaskImmutable } from '../models/ITaskImmutable'
// import { Task } from '../models/ITask'

type TaskAction =
    // IAddTaskAction |
    IAddTaskResponseAction |
    // ISelectTaskAction |
    ISelectTaskResponseAction |
    IDeleteTaskAction |
    // IAddTaskCommentAction |
    IAddTaskCommentResponseAction |
    IOtherAction

    const tasks = (state:List<ITaskImmutable> = List([]), action:TaskAction = {type:OTHER_TYPE}) => {
        switch (action.type) {
            case ADD_TASK:
            return state
            .map((task:ITaskImmutable) => task.update('selected', selected => false))
                // @ts-ignore
                .push(Map({
                    id:  action.task.id,
                    name:  action.task.name,
                    selected:  action.task.selected,
                    comments: List([])
                } /* new Task(action.id, action.name, true)
           /*  action.task */))

        case SELECT_TASK:
            return state
                .map((task:ITaskImmutable) => {
                    const id:number = task.get('id'),
                        _actId:number = action.task.id,
                        _selected:boolean = task.get('selected')

                    if (!_selected && id === _actId ||
                        _selected && id !== _actId) {
                        task = task.update('selected', selected => !_selected)
                    }

                    return task
                })

        case DELETE_TASK:
            return state.filter((task:ITaskImmutable, index:number, array) =>
                task.get('id') !== action.id
            )

        case ADD_COMMENT:
        console.log("COM", action, action.comment)
            return state.map((task:ITaskImmutable) => {
                console.log("TC", task.get('name'), task.get('comments'))
               return (task.get('selected'))
                ? task.update('comments', comments => comments.push(action.comment))
                : task
            }
            )

        default:
            return state
    }
}

export default tasks