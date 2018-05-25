import React, { Component } from 'react'
import CommentIcon from './CommentIcon'

class CommentRecord extends Component {
    render() {
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