import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import { ADD_TASK_FORM_NAME } from '../../forms/formNames'
import AddTaksForm from '../../forms/AddTaskForm';
import { addTask } from '../../actions'

class AddTaskBar extends Component {

    handleSubmit = value => {
        this.props.addTask(value)
    }

    render() {
        return (
            // <div className="AddTaskBar">
                <AddTaksForm onSubmit={this.handleSubmit} />
            // </div>
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