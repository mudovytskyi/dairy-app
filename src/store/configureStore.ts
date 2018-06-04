import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from '../reducers'
import * as actionCreators from '../actions'

export default function configureStore (initialState:any) {
    return createStore(rootReducer, initialState, devToolsEnhancer({ actionCreators /* , serialize:{options:{undefined: true,
        function: 'function(fn:any) { return fn.toString() }'}} */}))
}