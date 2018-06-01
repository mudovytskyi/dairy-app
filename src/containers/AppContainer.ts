import { connect } from 'react-redux'
import App from '../components/App';
import { getSelectedTaskListPositionSelector } from '../selectors'
import { IAppState } from '../components/App';

export interface IAppStateFromProps {
    taskPosition: number | string
}

const mapStateToProps = (state:IAppState) => ({
    taskPosition: getSelectedTaskListPositionSelector(state)
})

export default connect<IAppStateFromProps, {}, void>(mapStateToProps)(App)

