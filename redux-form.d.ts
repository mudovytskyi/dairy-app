import * as reduxForm from 'redux-form/immutable';

declare module 'redux-form/immutable' {
  export const reset: any
  export const Form: any
}