import {
    ADD_TASK,
    SELECT_TASK,
    DELETE_TASK,
} from '../constants/actionTypes'
import ITask from '../components/task/ITask';
import { Map } from 'immutable';

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

export const addTask = (task:Map<ITask>) => ({
    type: ADD_TASK,
    name: task.get('name'),
    _id: nextTask++,
})



export type SelectTaskAction = {
    type: SELECT_TASK,
    _id: number,
}

export const selectTask = (id:number) => ({
    type: SELECT_TASK,
    _id: id,
})



export type DeleteTaskAction = {
    type: DELETE_TASK,
    _id: number,
}

export const deleteTask = (id:number) => ({
    type: DELETE_TASK,
    _id: id,
})
