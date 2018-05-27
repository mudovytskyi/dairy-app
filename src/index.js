import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppContainer from './containers/AppContainer'
import registerServiceWorker from './registerServiceWorker'

// add redux logic
import { Provider } from 'react-redux'

// add separate storage logic
import configureStore from './store/configureStore'

// move localStorage to services
import { getInitialState, updateStorage } from './services';

// add immutable
import { Immutable } from 'immutable'
import installDevTools from 'immutable-devtools'
installDevTools(Immutable)

let reduxStore = configureStore(getInitialState())

reduxStore.subscribe(() => updateStorage(reduxStore.getState()))

ReactDOM.render(
    <Provider store={reduxStore}>
        <AppContainer />
    </Provider>,
    document.getElementById('root'))
registerServiceWorker()
