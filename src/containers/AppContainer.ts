import { connect } from 'react-redux'
import App from '../components/App'
import { getSelectedTaskListPositionSelector } from '../selectors'

const mapStateToProps = state => ({
    taskPosition: getSelectedTaskListPositionSelector(state)
})

export default connect(mapStateToProps)(App)
