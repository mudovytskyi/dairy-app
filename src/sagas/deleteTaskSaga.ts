import { takeEvery, put, call, all } from "redux-saga/effects"
import { IDeleteTaskAction } from "../actions/tasks"
import { DairyAppAction } from "../constants/actionTypes"
import { deleteDataAction } from "../common/axios"
import apiUrlsConsts from "../constants/apiUrlsConsts"

const {
  DELETE_TASK,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_ERROR
} = DairyAppAction

function* runDeleteTask(action: IDeleteTaskAction) {
  const { response, error } = yield call(
    deleteDataAction,
    apiUrlsConsts.TASK,
    action
  )

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
}

export default function* deleteTaskSaga() {
  yield takeEvery(DELETE_TASK_REQUEST, runDeleteTask)
}