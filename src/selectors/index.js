import { createSelector } from 'reselect'
import { List } from 'immutable'

export const getTasksSelector = (state) => state.get('tasks')

export const getSelectedTaskSelector = createSelector(
    getTasksSelector,
    tasks => tasks.find((task) => task.get('selected') === true)
)

export const isCommentBarDisabledSelector = createSelector(
    getSelectedTaskSelector,
    task => !Boolean(task)
)

export const getSelectedTaskListPositionSelector = createSelector(
    [getSelectedTaskSelector, getTasksSelector],
    (task, tasks) => task ? tasks.indexOf(task) + 1 : ""
)

export const getSelectedTaskCommentsSelector = createSelector(
    getSelectedTaskSelector,
    task => task ? task.get('comments') : List([])
)