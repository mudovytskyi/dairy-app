import {
    ADD_TASK,
    SELECT_TASK,
    DELETE_TASK,
    ADD_COMMENT,
    SHOW_COMMENTS,
    GET_FROM_LOCAL_STORAGE,
    SET_TO_LOCAL_STORAGE,
} from './actionTypes';

let nextTask = 0

//-----------------------------
//
//  TASKS
//
//-----------------------------
export const addTask = text => ({
    type: ADD_TASK,
    _id: nextTask++,
    text,
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
export const addComment = text => ({
    type: ADD_COMMENT,
    text,
})

export const showComments = comments => ({
    type: SHOW_COMMENTS,
    comments,
})

//-----------------------------
//
//  STORAGE
//
//-----------------------------
export const getFromStorage = () => ({
    type: GET_FROM_LOCAL_STORAGE,
})

export const saveToStorage = () => ({
    type: SET_TO_LOCAL_STORAGE,
    // state
})