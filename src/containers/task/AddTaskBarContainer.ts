import { connect } from 'react-redux'
import { reset } from 'redux-form/immutable'
import { addTask } from '../../actions'
import { FormNames } from '../../constants/formNames'
import AddTaskBar from '../../components/task/AddTaskBar'
import { Dispatch } from '../../../redux'

const { ADD_TASK_FORM_NAME } = FormNames

export interface IAddTaskBarDispatchFromProps {
    addTask: (name: string) => any,
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addTask: (name: string):any => {
        dispatch(addTask(name))
        dispatch(reset(ADD_TASK_FORM_NAME))
    }
})

export default connect<void, IAddTaskBarDispatchFromProps, void>(
    null,
    mapDispatchToProps,
)(AddTaskBar)