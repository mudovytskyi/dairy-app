// // tasks
// export type ADD_TASK = '@@dairy-app/task/ADD_TASK'
// export const ADD_TASK: ADD_TASK = '@@dairy-app/task/ADD_TASK'

// export type SELECT_TASK = '@@dairy-app/task/SELECT_TASK'
// export const SELECT_TASK: SELECT_TASK = '@@dairy-app/task/SELECT_TASK'

// export type DELETE_TASK = '@@dairy-app/task/DELETE_TASK'
// export const DELETE_TASK: DELETE_TASK = '@@dairy-app/task/DELETE_TASK'

// // comments
// export type ADD_COMMENT = '@@dairy-app/comment/ADD_COMMENT'
// export const ADD_COMMENT: ADD_COMMENT = '@@dairy-app/comment/ADD_COMMENT'

// // other
// export type OTHER_TYPE = '@@dairy-app/OTHER_TYPE'
// export const OTHER_TYPE: OTHER_TYPE = '@@dairy-app/OTHER_TYPE'

export enum DairyAppAction {
    // tasks
  ADD_TASK = '@@dairy-app/task/ADD_TASK',
  SELECT_TASK = '@@dairy-app/task/SELECT_TASK',
  DELETE_TASK = '@@dairy-app/task/DELETE_TASK',

// comments
  ADD_COMMENT = '@@dairy-app/comment/ADD_COMMENT',

// other
  OTHER_TYPE = '@@dairy-app/OTHER_TYPE',
}