import { takeEvery, put, call, all, select } from "redux-saga/effects"
import { IAddTaskAction } from "../actions/tasks"
import { DairyAppAction } from "../constants/actionTypes"
import { postDataAction, patchDataAction } from "../common/axios"
import apiUrlsConsts from "../constants/apiUrlsConsts"
import { Task } from "../models/ITask"
import { ITaskImmutable } from "../models/ITaskImmutable"
import { getSelectedTaskSelector } from "../selectors/index"

const {
  ADD_TASK,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_ERROR
} = DairyAppAction

function* runAddTask(action: IAddTaskAction) {
  const taskSelected: ITaskImmutable = yield select(getSelectedTaskSelector)
  if (taskSelected)
    yield call(patchDataAction, apiUrlsConsts.TASK, {
      id: taskSelected.get("id"),
      selected: false
    })

  const { response, error } = yield call(
    postDataAction,
    apiUrlsConsts.TASKS,
    new Task(Date.now(), action.name, true)
  )

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
}

export default function* addTaskSaga() {
  yield takeEvery(ADD_TASK_REQUEST, runAddTask)
}
