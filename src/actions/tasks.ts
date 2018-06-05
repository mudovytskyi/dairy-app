import { DairyAppAction } from '../constants/actionTypes';
import { createFormAction } from 'redux-form-saga';
import { ITask } from '../models';

let nextTask = Date.now()

const  {
    // ADD_TASK,
    ADD_TASK_REQUEST,
    SELECT_TASK,
    DELETE_TASK,
} = DairyAppAction

export interface IAddTaskResponseAction {
    type: DairyAppAction.ADD_TASK,
    task: ITask
}
export interface IAddTaskAction {
    type: DairyAppAction.ADD_TASK_REQUEST,
    _id: number,
    name: string,
}
export const addTask = (name: string):IAddTaskAction => ({
    type: ADD_TASK_REQUEST,
    _id: nextTask++,
    name,
})

 
export const sagaAddTask = createFormAction(ADD_TASK_REQUEST)

export interface ISelectTaskAction {
    type: DairyAppAction.SELECT_TASK,
    _id: number,
}
export const selectTask = (id: number):ISelectTaskAction => ({
    type: SELECT_TASK,
    _id: id,
})


export interface IDeleteTaskAction {
    type: DairyAppAction.DELETE_TASK,
    _id: number,
}
export const deleteTask = (id: number):IDeleteTaskAction => ({
    type: DELETE_TASK,
    _id: id,
})
