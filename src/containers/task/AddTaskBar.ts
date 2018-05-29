import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form/immutable'
import { ADD_TASK_FORM_NAME } from '../../constants/formNames'
import AddTaksForm from '../../forms/AddTaskForm';
import { addTask } from '../../actions'

class AddTaskBar extends Component {

    handleSubmit = value => {
        return this.props.addTask(value)
    }

    handleSubmitFail2 = value => {
        console.log("FAILED", value)
    }

    render() {
        return (
            <AddTaksForm onSubmit={this.handleSubmit} onSubmitFail={this.handleSubmitFail} />
        )
    }
}

AddTaskBar = connect(
    null,
    (dispatch) => {
        return {
            addTask: (text) => {
                dispatch(addTask(text))
                dispatch(reset(ADD_TASK_FORM_NAME))
            }
        }
    }
)(AddTaskBar)


export default AddTaskBar