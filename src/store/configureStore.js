import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from '../reducers'
import * as actionCreators from '../actions'

export default configureStore = (initialState) =>
    createStore(rootReducer, initialState, devToolsEnhancer({ actionCreators }))