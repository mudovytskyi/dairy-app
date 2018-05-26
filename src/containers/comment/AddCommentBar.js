import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddCommentForm from '../../forms/AddCommentForm'
import { isCommentBarDisabledSelector } from '../../selectors'

// case 2
// import { addComment } from '../../actions'

class AddCommentBar extends Component {
    render() {
        return (
            <AddCommentForm disabled={this.props.disabled} />
        )
    }
}

const mapStateToProps = (state) => ({
    disabled: isCommentBarDisabledSelector(state)
})

// case 2
// export function remoteSubmit(value, dispatch) {
//     dispatch(addComment(value))
// }

export default connect(
    mapStateToProps,
)(AddCommentBar)