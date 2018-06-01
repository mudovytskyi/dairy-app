import { reducer as formReducer } from 'redux-form/immutable'
import tasks from './tasks'
import { Record, List } from 'immutable'
import {
    combineReducers
} from 'redux-immutable'

const StateRecord = Record({ tasks: List([]) })
export default combineReducers({
    tasks,
    form: formReducer
}, StateRecord)
