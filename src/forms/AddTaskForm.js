import React from 'react'
import { Form, Field, reduxForm } from 'redux-form'
import { ADD_TASK_FORM_NAME } from './formNames'

let AddTaskForm = props => {
    const { handleSubmit, pristine, submitting } = props
    return (
        <Form onSubmit={handleSubmit} className="AddTaskForm">
            <Field name="name" component="input" type="text"
                placeholder="Type name here..." />
            <button type="submit" disabled={pristine || submitting}>Add new</button>
        </Form>
    )
}

const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = 'Task name is required'
    }

    return errors
}

export default reduxForm({
    form: ADD_TASK_FORM_NAME,
    validate
})(AddTaskForm)