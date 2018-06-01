import * as React from 'react'
import AddCommentForm from '../../forms/AddCommentForm'
import { IAddCommentBarStateFromProps, IAddCommentBarDispatchFromProps } from '../../containers/comment/AddCommentBarContainer';

export interface IAddCommentBarProps extends IAddCommentBarStateFromProps, IAddCommentBarDispatchFromProps {}
export interface IAddCommentBarState {}

class AddCommentBar extends React.Component<IAddCommentBarProps, IAddCommentBarState> {

    protected handleSubmit = (value:string) => {
        return this.props.addComment(value)
    }

    protected handleSubmitFail = (value:any) => {
        console.error("FAILED", value)
    }

    public render() {
        const { disabled } = this.props
        return (
            <AddCommentForm disabled={disabled} onSubmit={this.handleSubmit} onSubmitFail={this.handleSubmitFail} />
        )
    }
}

export default AddCommentBar