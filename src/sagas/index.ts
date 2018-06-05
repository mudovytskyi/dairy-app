import addTaskSaga from './addTaskSaga'
import selectTaskSaga from './selectTaskSaga'
import deleteTaskSaga from './deleteTaskSaga'
import addCommentToTaskSaga from './addCommentToTaskSaga'
import formActionSaga from 'redux-form-saga'

export default [
    addTaskSaga,
    selectTaskSaga,
    deleteTaskSaga,
    addCommentToTaskSaga,
    formActionSaga
]