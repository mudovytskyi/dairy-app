import { takeEvery, put, call, all, select } from "redux-saga/effects"
import { ISelectTaskAction } from '../actions/tasks';
import { DairyAppAction } from "../constants/actionTypes"
import {patchDataAction} from "../common/axios"
import apiUrlsConsts from "../constants/apiUrlsConsts";
// import { Task } from '../models/ITask';
import { getSelectedTaskSelector } from '../selectors/index';
import { ITaskImmutable } from '../models/ITaskImmutable';

const  {    
    SELECT_TASK,
    SELECT_TASK_REQUEST,
    SELECT_TASK_SUCCESS,
    SELECT_TASK_ERROR,
} = DairyAppAction

function *runSelectTask(action: ISelectTaskAction) {

    console.log("A", action)
        const taskSelected:ITaskImmutable = yield select(getSelectedTaskSelector)
        if (taskSelected)
        yield call(patchDataAction, 
            apiUrlsConsts.TASK,
            {id: taskSelected.get('id'),
            selected: false})

        const {response, error} = yield call(
            patchDataAction, 
            apiUrlsConsts.TASK,
            {id: action.id,
            selected: true}
        )
        console.log("R", response, error)
        if (response)
            yield all({

               success: yield put({
                    type: SELECT_TASK_SUCCESS,
                    response
                }),
                selectTask: yield put({
                    type: SELECT_TASK,
                    task: response.data
                })
            })
        else 
            yield put({
                type: SELECT_TASK_ERROR,
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

export default function *selectTaskSaga() {
  yield takeEvery(SELECT_TASK_REQUEST, runSelectTask)
}
