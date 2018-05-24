import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment, selectTask } from '../../actions'
import CommentIcon from '../../components/comment/CommentIcon'


class AddCommentBar extends Component {

    handleKeyPress = (event) => {
        if (event.ctrlKey && event.charCode === 13) {

            let newCommentValue = this.refs.newCommentTA.value;
            if (newCommentValue) {
                this.props.addComment(newCommentValue);
                this.refs.newCommentTA.value = '';
            }
        }
    }

    render() {
        return (
            <div className="AddCommentBar">
                <CommentIcon />
                <div className="comment-new" onKeyPress={this.handleKeyPress}>
                    <textarea ref="newCommentTA" disabled={this.props.disabled} />
                </div>
            </div>

        );
    }
}


const getSelectedTask = (tasks) => {
    console.log("TASKS", tasks)
    let disabled = true
    tasks.forEach(task => {
        console.log("TASK", task)
        if (task.selected)
             disabled = false
         }
     )
     console.log("FIRE")
    return disabled;
}

const mapStateToProps = (state) => ({
    disabled: getSelectedTask(state.tasks)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    addComment: comment => dispatch(addComment(comment))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCommentBar);