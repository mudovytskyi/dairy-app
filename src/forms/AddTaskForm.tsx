import React from 'react'
import { Form, Field, reduxForm } from 'redux-form/immutable'
import { addTaskValidator } from './validators'
import { FormNames } from '../constants/formNames'

const AddTaskForm = (props:any) => {
    const { handleSubmit, handleSubmitFail, pristine, submitting } = props
    return (
        <Form onSubmit={handleSubmit} 
                onSubmitFail={handleSubmitFail} className="AddTaskForm">
            <Field name="name" component="input" type="text"
                placeholder="Type name here..." />
            <button type="submit" disabled={pristine || submitting}>Add new</button>
        </Form>
    )
}

export default reduxForm<any, any>({
    form: FormNames.ADD_TASK_FORM_NAME,
    validate: addTaskValidator
})(AddTaskForm)