import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// add redux logic
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

let reduxStore = createStore(rootReducer)

let localStorage, inputData = {};
const STORAGE_NAME = 'storage';

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

if (storageAvailable('localStorage')) {
    localStorage = window.localStorage;
    inputData = JSON.parse(localStorage.getItem(STORAGE_NAME)) || {};
}

function updateStorage(storageData) {
    if (storageAvailable('localStorage')) {
        localStorage.setItem(STORAGE_NAME, JSON.stringify(storageData));
    }
}

ReactDOM.render(<Provider store={reduxStore}>
                    <App {...inputData} onUpdate={updateStorage} />
                </Provider>,
                document.getElementById('root'));
// ReactDOM.render(<App {...inputData} onUpdate={updateStorage} />, document.getElementById('root'));
registerServiceWorker();
