import { createSelector } from 'reselect'
import { List } from 'immutable'
import { ITaskImmutable } from '../models';

export const getTasksSelector = (state:any):List<ITaskImmutable> => state.get('tasks')

export const getSelectedTaskSelector = createSelector(
    getTasksSelector,
    (tasks:List<ITaskImmutable>):ITaskImmutable => 
        tasks.find((task:ITaskImmutable):boolean => task.get('selected') === true)
)

export const isCommentBarDisabledSelector = createSelector(
    getSelectedTaskSelector,
    (task:ITaskImmutable):boolean => !Boolean(task)
)

export const getSelectedTaskListPositionSelector = createSelector(
    [getSelectedTaskSelector, getTasksSelector],
    (task:ITaskImmutable, tasks:List<ITaskImmutable>):number | string => task ? tasks.indexOf(task) + 1 : ""
)

export const getSelectedTaskCommentsSelector = createSelector(
    getSelectedTaskSelector,
    (task:ITaskImmutable):List<string> => (task) ? List(task.get('comments')) : List([])
)