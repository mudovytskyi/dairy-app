export enum DairyAppAction {
  // tasks
  ADD_TASK = '@@dairy-app/task/ADD_TASK',
  ADD_TASK_REQUEST = '@@dairy-app/task/ADD_TASK_REQUEST',
  ADD_TASK_SUCCESS = '@@dairy-app/task/ADD_TASK_SUCCESS',
  ADD_TASK_ERROR = '@@dairy-app/task/ADD_TASK_ERROR',

  SELECT_TASK = '@@dairy-app/task/SELECT_TASK',
  SELECT_TASK_REQUEST = '@@dairy-app/task/SELECT_TASK_REQUEST',
  SELECT_TASK_SUCCESS = '@@dairy-app/task/SELECT_TASK_SUCCESS',
  SELECT_TASK_ERROR = '@@dairy-app/task/SELECT_TASK_ERROR',
  
  DELETE_TASK = '@@dairy-app/task/DELETE_TASK',
  DELETE_TASK_REQUEST = '@@dairy-app/task/DELETE_TASK_REQUEST',
  DELETE_TASK_SUCCESS = '@@dairy-app/task/DELETE_TASK_SUCCESS',
  DELETE_TASK_ERROR = '@@dairy-app/task/DELETE_TASK_ERROR',

  // comments
  ADD_COMMENT = '@@dairy-app/comment/ADD_COMMENT',
  ADD_COMMENT_REQUEST = '@@dairy-app/comment/ADD_COMMENT_REQUEST',
  ADD_COMMENT_SUCCESS = '@@dairy-app/comment/ADD_COMMENT_SUCCESS',
  ADD_COMMENT_ERROR = '@@dairy-app/comment/ADD_COMMENT_ERROR',

  // other
  OTHER_TYPE = '@@dairy-app/OTHER_TYPE',
}