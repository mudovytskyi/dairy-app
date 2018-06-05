import { takeEvery, put, call, all,  select } from 'redux-saga/effects';
import { DairyAppAction } from "../constants/actionTypes"
import {patchDataAction} from "../common/axios"
import apiUrlsConsts from "../constants/apiUrlsConsts";
import { /* getSelectedTaskCommentsSelector, */ getSelectedTaskSelector } from '../selectors/index';
import { IAddTaskCommentAction } from '../actions/comments';
import { ITaskImmutable } from '../models';
// import { List } from 'immutable';

const  {    
    ADD_COMMENT,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_ERROR,
} = DairyAppAction

function *runAddCommentToTask(action: IAddTaskCommentAction) {

    // const comments:List<string> = yield select(getSelectedTaskCommentsSelector)
    const task:ITaskImmutable = yield select(getSelectedTaskSelector)
    if (!task)
        return
    console.log("A", action, task.get('comments'), task.get('id'))
        const {response, error} = yield call(
            patchDataAction, 
            apiUrlsConsts.TASK, {
            id: task.get('id'),
            comments: [...task.get('comments'), action.comment]
        })
        console.log("R", response, error)
        if (response)
            yield all({
               success: yield put({
                    type: ADD_COMMENT_SUCCESS,
                    response
                }),
                newComment: yield put({
                    type: ADD_COMMENT,
                    comment: action.comment
                })
            })
        else 
            yield put({
                type: ADD_COMMENT_ERROR,
                error
            })
    // try {
    //     const response = yield call(
    //         postDataAction, 
    //         apiUrlsConsts.TASKS,
    //        new Task(Date.now(), action.name)

    //     )
    //     put({
    //         type: ADD_COMMENT_SUCCESS,
    //         response
    //     })
    // } catch(error) {
    //     yield put({
    //         type: ADD_COMMENT_ERROR,
    //         error
    //     })
    // }
}

export default function *addCommentToTaskSaga() {
  yield takeEvery(ADD_COMMENT_REQUEST, runAddCommentToTask)
}
