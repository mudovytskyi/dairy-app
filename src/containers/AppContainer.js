import { connect } from 'react-redux'
import App from '../components/App'

const getSelectedTaskListPosition = tasks => {
    let position = tasks.findIndex(task => task.selected)
    return position > -1 ? ++position : ""
}


const mapStateToProps = state => ({
    taskPosition: getSelectedTaskListPosition(state.tasks)
})

export default connect(mapStateToProps)(App)
