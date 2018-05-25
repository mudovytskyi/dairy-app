import { addComment } from '../actions'

function remoteSubmit(value, dispatch) {
    dispatch(addComment(value))
}
export default remoteSubmit