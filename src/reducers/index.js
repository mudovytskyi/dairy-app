import { combineReducers } from 'redux'
import tasks from './tasks'
import comments from './comments'
import localStorage from './localStorage'

export default combineReducers({
    tasks,
    comments,
    localStorage,
})