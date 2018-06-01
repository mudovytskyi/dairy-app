import { connect } from 'react-redux'
import { selectTask, deleteTask } from '../../actions'
import { getTasksSelector } from '../../selectors'
import TaskList from '../../components/task/TaskList'
import { Dispatch } from '../../../redux'
import { ITaskListState } from '../../components/task/TaskList';
import { ITask } from '../../models/ITask'

export interface ITaskListStateFromProps {
    tasks: [ITask]
}

export interface ITaskListDispatchFromProps {
    selectTask: (id: number) => any,
    deleteTask: (id: number) => any,
}

const mapStateToProps = (state: ITaskListState) => ({
    tasks: (getTasksSelector(state)).toJS()
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    selectTask: (id: number):any => dispatch(selectTask(id)),
    deleteTask: (id: number):any => dispatch(deleteTask(id)),
})

export default connect<ITaskListStateFromProps, ITaskListDispatchFromProps, void>(
    mapStateToProps,
    mapDispatchToProps,
    // mergeProps
)(TaskList)