import { reducer as formReducer } from 'redux-form/immutable'
import tasks from './tasks'
import { Record, List } from 'immutable'
import {
    combineReducers
} from 'redux-immutable'


import * as asyncInitialState from 'redux-async-initial-state'
const StateRecord = Record({ tasks: List([]) })

const asyncReducer = asyncInitialState.outerReducer(combineReducers({
    tasks,
    form: formReducer,
    asyncInitialState: asyncInitialState.innerReducer
}, StateRecord))

export default asyncReducer

// export default combineReducers({
//     tasks,
//     form: formReducer
// }, StateRecord)
