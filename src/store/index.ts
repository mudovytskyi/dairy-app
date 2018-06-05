import { /* Store, */ createStore, applyMiddleware/*, compose  */ } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { /* devToolsEnhancer ,*/ composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'
import * as actionCreators from '../actions'
import sagas from '../sagas'
import initialState, {updateStorage} from '../services'
// import IStoreState from '../reducers/IStoreState';
// import { initStore } from '../actions/init';


import * as asyncInitialState from 'redux-async-initial-state'
import { initStore } from '../actions/init';

// const asyncReducer = asyncInitialState.outerReducer()

const composeEnhancers:any = composeWithDevTools({
        actionCreators
    })
    // @ts-ignore
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    const sagaMiddleware:any = createSagaMiddleware()
    
    

    // export default function configureStore (initialState:any) {
        // return createStore(rootReducer, initialState, devToolsEnhancer({ actionCreators /* , serialize:{options:{undefined: true,
    // function: 'function(fn:any) { return fn.toString() }'}} */}))
    // const store:Store<IStoreState> = createStore(rootReducer, initialState!, compose(
    // const store:Store<IStoreState> = createStore(rootReducer, initialState, composeEnhancers(
    const store:any = createStore(rootReducer, initialState, composeEnhancers(
    // const store:Store<IStoreState> = createStore(rootReducer, composeEnhancers(
        applyMiddleware(sagaMiddleware, asyncInitialState.middleware(initStore))
    ))
    store.subscribe(() => updateStorage(store.getState()))
    // const store:any = createStore(rootReducer, initialState, composeEnhancers(
    //     applyMiddleware(sagaMiddleware)
    // ))
    console.log("SAGAS", sagas)
    sagas.forEach((saga) => sagaMiddleware.run(saga))
    
    export default store
    // return store
// }