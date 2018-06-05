import * as React from 'react'
import AddCommentForm from '../../forms/AddCommentForm'
import { IAddCommentBarStateFromProps, IAddCommentBarDispatchFromProps } from '../../containers/comment/AddCommentBarContainer'

export interface IAddCommentBarProps extends IAddCommentBarStateFromProps, IAddCommentBarDispatchFromProps {}
export interface IAddCommentBarState {}

class AddCommentBar extends React.Component<IAddCommentBarProps, IAddCommentBarState> {

    protected handleSubmit = (value:Map<string, any>):void => {
        this.props.addComment(value.get('comment'))
    }

    public render():JSX.Element {
        const { disabled } = this.props
        return (
            <AddCommentForm disabled={disabled} onSubmit={this.handleSubmit} />
        )
    }
}

export default AddCommentBar