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
export const addTask = task => ({
    type: ADD_TASK,
    name: task.get('name'),
    _id: nextTask++,
})

export const selectTask = id => ({
    type: SELECT_TASK,
    _id: id,
})

export const deleteTask = id => ({
    type: DELETE_TASK,
    _id: id,
})
