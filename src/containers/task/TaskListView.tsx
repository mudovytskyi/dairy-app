import { connect } from 'react-redux'
import { selectTask, deleteTask } from '../../actions'
import { getTasksSelector } from '../../selectors'
import TaskList from '../../components/task/TaskList'
import { Dispatch } from '../../../redux'
import { ITaskListState, ITaskListProps } from '../../components/task/TaskList';
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
    selectTask: (id: number) => dispatch(selectTask(id)),
    deleteTask: (id: number) => dispatch(deleteTask(id)),
})

// const 

export default connect<ITaskListStateFromProps, ITaskListDispatchFromProps, void>(
// export default connect<ITaskListProps>(
    mapStateToProps,
    mapDispatchToProps,
    // mergeProps
)(TaskList)