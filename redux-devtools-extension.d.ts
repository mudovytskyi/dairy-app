import * as redux_devtools from 'redux-devtools-extension'

declare module 'redux-devtools-extension' {
    export interface Action<T = any> {
        type: T
    }
    
    export interface AnyAction extends Action {
        [extraProps: string]: any
    }
}

