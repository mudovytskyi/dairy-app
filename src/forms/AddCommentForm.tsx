import * as React from 'react'
import { Form, Field, reduxForm } from 'redux-form/immutable'
// import { ADD_COMMENT_FORM_NAME } from '../constants/formNames'
import CommentIcon from '../components/comment/CommentIcon'
import { addCommentValidator } from './validators'
import { FormNames } from '../constants/formNames'
// import { InjectedFormProps } from 'redux-form';
// case 1
// import remoteSubmit from './remoteSubmit'
// case 2
// import {remoteSubmit} from '../containers/comment/AddCommentBar'
// const handleKeyPress = (event:any) => {
//     const { valid } = this.props

//     if (event.ctrlKey && event.charCode === 13 && valid) {
//         this.props.handleSubmit()
//         this.props.reset()
//     }
// }

// const AddCommentForm:React.SFC<AddCommentProps, & InjectedFormProps<AddCommentData, {}>> => (props) {
//     return (
//         <Form className="AddCommentForm"
//             onKeyPress={props.handleKeyPress.bind(this)}
//             onSubmitFail={handleSubmitFail}
//             onSubmit={handleSubmit(remoteSubmit)}>

//             <CommentIcon />
//             <Field name="comment"
//                 className="comment-new"
//                 component="textarea"
//                 type="text"
//                 disabled={this.props.disabled}
//             />
//         </Form>
//     )
// }


// export interface AddCommentData {
//     comment: string,
//     disabled: boolean,
// }
  
// interface AddCommentProps {
//     onSubmitFail?: any;
//     onSubmit?: any;
// }


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
        const { handleSubmit, onSubmit, handleSubmitFail, disabled } = this.props
        // onSubmit={handleSubmit(remoteSubmit)}>
        return (
            <Form className="AddCommentForm"
                onKeyPress={this.handleKeyPress}
                onSubmitFail={handleSubmitFail}
                onSubmit={handleSubmit((model: any) => addCommentValidator(model, onSubmit))}>

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

// const validate = value => {
//     const errors = {}

//     if (value && !value.get('comment')) {
//         errors.comment = 'Comment is required'
//     }

//     return errors
// }

export default reduxForm<any, any>({
    form: FormNames.ADD_COMMENT_FORM_NAME,
    // validate: addCommentValidator,
})(AddCommentForm)