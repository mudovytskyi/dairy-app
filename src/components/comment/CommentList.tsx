import * as React from 'react'
import CommentRecord from './CommentRecord'
import { animateScroll } from 'react-scroll'
import { ICommentsListStateFromProps } from '../../containers/comment/CommentListView';

export interface ICommentsListProps extends ICommentsListStateFromProps {}
export interface ICommentsListState {}

class CommentList extends React.Component<ICommentsListProps, ICommentsListState> {

    public componentDidUpdate() {
        animateScroll.scrollToBottom({ containerId: 'containerComments' })
    }

    public render() {
        const { comments } = this.props

        if (comments) {
            return (
                <nav>
                    <ul id="containerComments" className="CommentList">{
                        comments.map((value, key) =>
                            <CommentRecord key={key} value={value} />
                        )
                    }
                    </ul>
                </nav>
            )
        } else {
            return (
                <ul className="CommentList" />
            )
        }
    }
}

export default CommentList