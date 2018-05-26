import { connect } from 'react-redux'
import CommentList from '../../components/comment/CommentList'
import { getSelectedTaskCommentsSelector } from '../../selectors'

const mapStateToProps = state => ({
    comments: getSelectedTaskCommentsSelector(state)
})

export default connect(mapStateToProps)(CommentList)

