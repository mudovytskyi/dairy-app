import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddCommentForm from '../../forms/AddCommentForm'
import { isCommentBarDisabledSelector } from '../../selectors'

// case 2
// import { addComment } from '../../actions'

class AddCommentBar extends Component {

    handleSubmitFail = value => {
        console.log("FAILED", value)
    }

    render() {
        const { disabled } = this.props
        return (
            <AddCommentForm disabled={disabled} onSubmitFail={this.handleSubmitFail} />
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