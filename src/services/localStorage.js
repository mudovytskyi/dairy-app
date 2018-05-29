import { fromJS } from 'immutable'
let localStorage
const STORAGE_NAME = 'storage'
const LOCAL_STORAGE = 'localStorage'

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__'
        storage.setItem(x, x)
        storage.removeItem(x)
        return true
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
            storage.length !== 0
    }
}

export function getInitialState() {
    let initialData = { tasks: [] }
    if (storageAvailable(LOCAL_STORAGE)) {
        localStorage = window.localStorage
        initialData = fromJS(JSON.parse(localStorage.getItem(STORAGE_NAME)) || {})
    }
    return fromJS(initialData)
}

export function updateStorage(currentState) {
    if (storageAvailable(LOCAL_STORAGE)) {
        localStorage.setItem(STORAGE_NAME, JSON.stringify(currentState))
    } else {
        console.warn('Please, enable local storage for correct behaviour')
    }
}
