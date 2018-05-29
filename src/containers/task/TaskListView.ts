import { connect } from 'react-redux'
import TaskList from '../../components/task/TaskList'
import { selectTask, deleteTask } from '../../actions'
import { getTasksSelector } from '../../selectors'

const mapStateToProps = state => ({
    tasks: getTasksSelector(state)
})

const mapDispatchToProps = dispatch => ({
    selectTask: id => dispatch(selectTask(id)),
    deleteTask: id => dispatch(deleteTask(id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList)