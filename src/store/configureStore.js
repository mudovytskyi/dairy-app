import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from '../reducers'
import * as actionCreators from '../actions'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, devToolsEnhancer({ actionCreators }))
    return store
}