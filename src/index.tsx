import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import AppContainer from "./containers/AppContainer"

// add redux logic
import { Provider } from "react-redux"

// add separate storage logic
import reduxStore from "./store"

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
