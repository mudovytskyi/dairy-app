import * as redux_devtools from 'redux-devtools-extension';

declare module 'redux-devtools-extension' {
      export function devToolsEnhancer(param?:any):any
      export function composeWithDevTools(param?:any):any
}

