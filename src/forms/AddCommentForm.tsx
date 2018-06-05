import * as React from 'react'
import { Form, Field, reduxForm } from 'redux-form/immutable'
import CommentIcon from '../components/comment/CommentIcon'
import { addCommentValidator } from './validators'
import { FormNames } from '../constants/formNames'

class AddCommentForm extends React.Component<any, any> {

    constructor(props:any) {
        super(props)
        this.handleKeyPress.bind(this)
    }

   protected handleKeyPress = (event: any) => {
        const { valid } = this.props

        if (event.ctrlKey && event.charCode === 13 && valid) {
            this.props.handleSubmit()
            this.props.reset()
        }
    }

    public render() {
        const { handleSubmit, disabled } = this.props

        return (
            <Form className="AddCommentForm"
                onKeyPress={this.handleKeyPress}
                onSubmit={handleSubmit}>

                <CommentIcon />
                <Field name="comment"
                    className="comment-new"
                    component="textarea"
                    type="text"
                    disabled={disabled}
                />
            </Form>
        )
    }
}

export default reduxForm<any, any>({
    form: FormNames.ADD_COMMENT_FORM_NAME,
    validate: addCommentValidator,
})(AddCommentForm)