import React from 'react'
import { Form, Field, reduxForm } from 'redux-form/immutable'
import { ADD_TASK_FORM_NAME } from '../constants/formNames'

let AddTaskForm = props => {
    const { handleSubmit, handleSubmitFail, pristine, submitting } = props
    return (
        <Form onSubmit={handleSubmit} onSubmitFail={handleSubmitFail} className="AddTaskForm">
            <Field name="name" component="input" type="text"
                placeholder="Type name here..." />
            <button type="submit" disabled={pristine || submitting}>Add new</button>
        </Form>
    )
}

const validate = value => {
    const errors = {}

    if (!value.get('name')) {
        errors.name = 'Task name is required'
    }
    
    return errors
}

export default reduxForm({
    form: ADD_TASK_FORM_NAME,
    validate
})(AddTaskForm)