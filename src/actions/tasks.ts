import { DairyAppAction } from '../constants/actionTypes';
// import {
//     ADD_TASK,
//     SELECT_TASK,
//     DELETE_TASK,
// } from DairyAppAction
import { ITask } from '../models/ITask'
import { Map } from 'immutable'

let nextTask = Date.now()

//-----------------------------
//
//  TASKS
//
//-----------------------------
export const addTask = (task: any) => ({
    type: DairyAppAction.ADD_TASK,
    name: task.name,
    _id: nextTask++,
})

export const selectTask = (id: number) => ({
    type: DairyAppAction.SELECT_TASK,
    _id: id,
})

export const deleteTask = (id: number) => ({
    type: DairyAppAction.DELETE_TASK,
    _id: id,
})
