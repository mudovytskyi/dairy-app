import { connect } from 'react-redux'
import TaskList from '../../components/task/TaskList'
import { selectTask, deleteTask, saveToStorage } from '../../actions'

const mapStateToProps = state => ({
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    selectTask: id => dispatch(selectTask(id)),
    deleteTask: id => dispatch(deleteTask(id)),
    updateStorage: () => dispatch(saveToStorage()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList)