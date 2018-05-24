import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentRecord from './CommentRecord'
import { animateScroll } from 'react-scroll'

class CommentList extends Component {

    componentDidUpdate() {
        animateScroll.scrollToBottom({ containerId: 'containerComments' });
    }

    render() {
        if (this.props.comments) {
            return (
                <nav>
                    <ul id="containerComments" className="CommentList">{
                       
                        Object.keys(this.props.comments).map(commentID =>
                            <CommentRecord
                                key={commentID}
                                value={this.props.comments[commentID]} />
                        )
                    }
                    </ul>
                </nav>
            );
        } else {
            return (
                <ul className="CommentList" />
            );
        }
    }
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.string)
}

export default CommentList;