import {
    ADD_TASK,
    SELECT_TASK,
    DELETE_TASK,
    ADD_COMMENT,
} from './actionTypes'

let nextTask = Date.now()

//-----------------------------
//
//  TASKS
//
//-----------------------------
export const addTask = task => ({
    type: ADD_TASK,
    ...task,
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

//-----------------------------
//
//  COMMENTS
//
//-----------------------------
export const addComment = comment => ({
    type: ADD_COMMENT,
    ...comment,
})