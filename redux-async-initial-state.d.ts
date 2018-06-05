import * as redux_async from 'redux-async-initial-state'

declare module 'redux-async-initial-state' {
      export function outerReducer(param?:any):any
      export function innerReducer(param?:any):any
      export function middleware(param?:any):any
}
