import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "../reducers"
import * as actionCreators from "../actions"
import sagas from "../sagas"
import initialState, { updateStorage } from "../services"

const composeEnhancers: any = composeWithDevTools({
  actionCreators
})

const sagaMiddleware: any = createSagaMiddleware()

const store: any = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    // TODO: applyMiddleware(sagaMiddleware, asyncInitialState.middleware(initStore))
    applyMiddleware(sagaMiddleware)
  )
)

store.subscribe(() => updateStorage(store.getState()))
sagas.forEach(saga => sagaMiddleware.run(saga))

export default store