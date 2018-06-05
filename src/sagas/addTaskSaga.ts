import { takeEvery, put, call, all } from "redux-saga/effects"
import { IAddTaskAction } from "../actions/tasks"
import { DairyAppAction } from "../constants/actionTypes"
import {postDataAction} from "../common/axios"
import apiUrlsConsts from "../constants/apiUrlsConsts";
import { Task } from '../models/ITask';

const  {    
    ADD_TASK,
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_ERROR,
} = DairyAppAction

function *runAddTask(action: IAddTaskAction) {

    console.log("A", action)
        const {response, error} = yield call(
            // @ts-ignore
            postDataAction, 
            apiUrlsConsts.TASKS,
           new Task(Date.now(), action.name)
        )
        console.log("R", response, error)
        if (response)
            yield all({

               success: yield put({
                    type: ADD_TASK_SUCCESS,
                    response
                }),
                newTask: yield put({
                    type: ADD_TASK,
                    task: response.data
                })
            })
        else 
            yield put({
                type: ADD_TASK_ERROR,
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

export default function *addTaskSaga() {
  yield takeEvery(ADD_TASK_REQUEST, runAddTask)
}
