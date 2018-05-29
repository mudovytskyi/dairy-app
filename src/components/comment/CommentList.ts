import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import CommentRecord from './CommentRecord'
import { animateScroll } from 'react-scroll'

class CommentList extends Component {

    componentDidUpdate() {
        animateScroll.scrollToBottom({ containerId: 'containerComments' })
    }

    render() {
        let { comments } = this.props

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

CommentList.propTypes = {
    comments: ImmutablePropTypes.listOf(PropTypes.string)
}

export default CommentList