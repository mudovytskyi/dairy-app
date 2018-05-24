import { connect } from 'react-redux'
import CommentList from '../../components/comment/CommentList'

const getSelectedTaskComments = (tasks) => {
    let taskComments
    tasks.forEach(task => {
        if (task.selected)
            taskComments = task.comments
        }
    )
    return taskComments;
}

const mapStateToProps = state => ({
    comments: getSelectedTaskComments(state.tasks)
})

export default connect(mapStateToProps)(CommentList)

