import React, { Component } from 'react'
import CommentIcon from './CommentIcon'

interface ICommentRecordProps {
    value: string
}
class CommentRecord extends Component<ICommentRecordProps, any> {
    public render() {
        return (
            <li className="CommentRecord">
                <CommentIcon />
                <div className="comment-name">
                    <span>{this.props.value}</span>
                </div>
            </li>
        )
    }
}

export default CommentRecord