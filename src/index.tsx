import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import AppContainer from "./containers/AppContainer"

// add redux logic
import { Provider } from "react-redux"

// add separate storage logic
import reduxStore from "./store"
// import { initStore } from './actions/init';

// reduxStore.dispatch(initStore(reduxStore.dispatch))
// move localStorage to services
// import { getInitialState, updateStorage } from "./services"

// add immutable
// import Immutable from "immutable"
// import { installDevTools } from "immutable-devtools"
// installDevTools(Immutable)


ReactDOM.render(
  <Provider store={reduxStore}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
)
