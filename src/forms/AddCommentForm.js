import React, { Component } from 'react'
import { Form, Field, reduxForm } from 'redux-form'
import { ADD_COMMENT_FORM_NAME } from './formNames'
import CommentIcon from '../components/comment/CommentIcon'
// case 1
import remoteSubmit from './remoteSubmit'
// case 2
// import {remoteSubmit} from '../containers/comment/AddCommentBar'

class AddCommentForm extends Component {

    handleKeyPress = (event, dispatch) => {
        if (event.ctrlKey && event.charCode === 13) {
            this.props.handleSubmit()
            this.props.reset()
        }
    }

    render() {
        return (
            <Form className="AddCommentForm"
                onKeyPress={this.handleKeyPress.bind(this)}
                onSubmit={this.props.handleSubmit(remoteSubmit)}>
                <CommentIcon />
                <Field name="comment"
                    className="comment-new"
                    component="textarea"
                    type="text"
                    disabled={this.props.disabled}
                />
            </Form>
        )
    }
}

const validate = values => {
    const errors = {}

    if (!values.comment) {
        errors.comment = 'Task name is required'
    }

    return errors
}

export default AddCommentForm = reduxForm({
    form: ADD_COMMENT_FORM_NAME,
    onSubmit: remoteSubmit,
    validate
})(AddCommentForm)