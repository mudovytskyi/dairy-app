import { DairyAppAction } from '../constants/actionTypes';

let nextTask = Date.now()

const  {
    ADD_TASK,
    SELECT_TASK,
    DELETE_TASK,
} = DairyAppAction

export interface IAddTaskAction {
    type: DairyAppAction.ADD_TASK,
    _id: number,
    name: string,
}
export const addTask = (name: string):IAddTaskAction => ({
    type: ADD_TASK,
    _id: nextTask++,
    name,
})

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
