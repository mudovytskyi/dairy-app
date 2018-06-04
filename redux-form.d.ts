import * as reduxForm from 'redux-form/immutable'

declare module 'redux-form/immutable' {
  export function reset(formName: any):any
  export const Form: any
}