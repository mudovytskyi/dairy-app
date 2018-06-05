import { connect } from 'react-redux'
import CommentList from '../../components/comment/CommentList'
import { getSelectedTaskCommentsSelector } from '../../selectors'
import { ICommentsListState } from '../../components/comment/CommentList'


export interface ICommentsListStateFromProps {
    comments: [string]
}

const mapStateToProps = (state:ICommentsListState) => ({
    comments: getSelectedTaskCommentsSelector(state).toJS()
})

export default connect<ICommentsListStateFromProps, {}, void>(mapStateToProps)(CommentList)

