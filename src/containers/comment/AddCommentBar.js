import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddCommentForm from '../../forms/AddCommentForm'
// case 2
// import { addComment } from '../../actions'


class AddCommentBar extends Component {
    render() {
        return (
            <AddCommentForm disabled={this.props.disabled} />
        )
    }
}


const getSelectedTask = (tasks) => {
    let disabled = true
    tasks.forEach(task => {
        if (task.selected)
            disabled = false
    })
    return disabled
}

const mapStateToProps = (state) => ({
    disabled: getSelectedTask(state.tasks)
})

// case 2
// export function remoteSubmit(value, dispatch) {
//     dispatch(addComment(value))
// }

export default connect(
    mapStateToProps,
)(AddCommentBar)