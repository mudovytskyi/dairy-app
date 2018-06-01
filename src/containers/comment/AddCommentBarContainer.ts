import { connect, Dispatch } from 'react-redux'
import { isCommentBarDisabledSelector } from '../../selectors'
import AddCommentBar from '../../components/comment/AddCommentBar'
import { IAddCommentBarState } from '../../components/comment/AddCommentBar'
import { addComment } from '../../actions'

export interface IAddCommentBarStateFromProps {
    disabled: boolean
}

export interface IAddCommentBarDispatchFromProps {
    addComment: (value: string) => any,
}

const mapStateToProps = (state:IAddCommentBarState) => ({
    disabled: isCommentBarDisabledSelector(state),
})


const mapDispatchToProps = (dispatch: Dispatch) => ({
    addComment: (value: string):any => dispatch(addComment(value))
})


export default connect<IAddCommentBarStateFromProps, IAddCommentBarDispatchFromProps, void>(
    mapStateToProps, mapDispatchToProps
)(AddCommentBar)