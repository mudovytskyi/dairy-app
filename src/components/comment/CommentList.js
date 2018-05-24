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
        // if (this.props.items) {
        //     return (
        //         <nav>
        //             <ul id="containerComments" className="CommentList">{
        //                     Object.keys(this.props.items).map(commentID =>
        //                         <CommentRecord 
        //                             key = {commentID}
        //                             value={this.props.items[commentID]} />
        //                     )
        //                 }
        //             </ul>
        //         </nav>
        //         );
        // } else {
        //     return (
        //         <ul className="CommentList"/>
        //     );
        // }
    }
}
CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default CommentList;