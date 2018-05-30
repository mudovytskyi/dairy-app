import * as redux_devtools from 'redux-devtools-extension';

declare module 'redux-devtools-extension' {
    //   export type GenericStoreEnhancer = any;
    export interface Action<T = any> {
        type: T;
    }
    /**
     * An Action type which accepts any other properties.
     * This is mainly for the use of the `Reducer` type.
     * This is not part of `Action` itself to prevent users who are extending `Action.
     */
    export interface AnyAction extends Action {
        // Allows any extra properties to be defined in an action.
        [extraProps: string]: any;
    }
}

