import React, { Component } from 'react'
import { Form, Field, reduxForm } from 'redux-form/immutable'
import { ADD_COMMENT_FORM_NAME } from '../constants/formNames'
import CommentIcon from '../components/comment/CommentIcon'
// case 1
import remoteSubmit from './remoteSubmit'
// case 2
// import {remoteSubmit} from '../containers/comment/AddCommentBar'

class AddCommentForm extends Component {

    handleKeyPress = (event, dispatch) => {
        const { valid } = this.props

        if (event.ctrlKey && event.charCode === 13 && valid) {
            this.props.handleSubmit()
            this.props.reset()
        }
    }

    render() {
        const { handleSubmit, handleSubmitFail } = this.props
        return (
            <Form className="AddCommentForm"
                onKeyPress={this.handleKeyPress.bind(this)}
                onSubmitFail={handleSubmitFail}
                onSubmit={handleSubmit(remoteSubmit)}>

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

const validate = value => {
    const errors = {}

    if (value && !value.get('comment')) {
        errors.comment = 'Comment is required'
    }

    return errors
}

export default AddCommentForm = reduxForm({
    form: ADD_COMMENT_FORM_NAME,
    onSubmit: remoteSubmit,
    validate
})(AddCommentForm)