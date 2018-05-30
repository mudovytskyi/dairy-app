import {
    ADD_TASK,
    SELECT_TASK,
    DELETE_TASK,
} from '../constants/actionTypes'

let nextTask = Date.now()

//-----------------------------
//
//  TASKS
//
//-----------------------------
export type AddTaskAction = {
    type: ADD_TASK,
    name: string,
    _id: number,
}
export const addTask = task => ({
    type: ADD_TASK,
    name: task.get('name'),
    _id: nextTask++,
})

export type SelectTaskAction = {
    type: SELECT_TASK,
    _id: number,
}

export const selectTask = id => ({
    type: SELECT_TASK,
    _id: id,
})

export type DeleteTaskAction = {
    type: DELETE_TASK,
    _id: number,
}

export const deleteTask = id => ({
    type: DELETE_TASK,
    _id: id,
})
