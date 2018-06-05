import * as reduxForm from 'redux-form-saga'

declare module 'redux-form-saga' {
    export function createFormAction(param:any):any
}