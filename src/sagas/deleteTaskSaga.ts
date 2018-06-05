import { takeEvery, put, call, all } from "redux-saga/effects"
import { IDeleteTaskAction } from "../actions/tasks"
import { DairyAppAction } from "../constants/actionTypes"
import {deleteDataAction} from "../common/axios"
import apiUrlsConsts from "../constants/apiUrlsConsts";
// import { Task } from '../models/ITask';

const  {    
    DELETE_TASK,
    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_ERROR,
} = DairyAppAction

function *runDeleteTask(action: IDeleteTaskAction) {

    console.log("A", action)
        const {response, error} = yield call(
            deleteDataAction, 
            apiUrlsConsts.TASK,
            action
        )
        console.log("R", response, error)
        if (response)
            yield all({

               success: yield put({
                    type: DELETE_TASK_SUCCESS,
                    response
                }),
                deleteTask: yield put({
                    type: DELETE_TASK,
                    id: action.id
                })
            })
        else 
            yield put({
                type: DELETE_TASK_ERROR,
                error
            })
    // try {
    //     const response = yield call(
    //         postDataAction, 
    //         apiUrlsConsts.TASKS,
    //        new Task(Date.now(), action.name)

    //     )
    //     put({
    //         type: ADD_TASK_SUCCESS,
    //         response
    //     })
    // } catch(error) {
    //     yield put({
    //         type: ADD_TASK_ERROR,
    //         error
    //     })
    // }
}

export default function *deleteTaskSaga() {
  yield takeEvery(DELETE_TASK_REQUEST, runDeleteTask)
}
