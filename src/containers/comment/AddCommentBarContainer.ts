import { connect, Dispatch } from 'react-redux'
import { isCommentBarDisabledSelector } from '../../selectors'
import AddCommentBar from '../../components/comment/AddCommentBar'
import { IAddCommentBarState } from '../../components/comment/AddCommentBar'
import { addComment, IAddTaskCommentAction } from '../../actions'

export interface IAddCommentBarStateFromProps {
    disabled: boolean
}

export interface IAddCommentBarDispatchFromProps {
    addComment: (value: string) => IAddTaskCommentAction,
}

const mapStateToProps = (state:IAddCommentBarState) => ({
    disabled: isCommentBarDisabledSelector(state),
})


const mapDispatchToProps = (dispatch: Dispatch) => ({
    addComment: (value: string):IAddTaskCommentAction => dispatch(addComment(value))
})


export default connect<IAddCommentBarStateFromProps, IAddCommentBarDispatchFromProps, void>(
    mapStateToProps, mapDispatchToProps
)(AddCommentBar)