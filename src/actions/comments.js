import {
    ADD_COMMENT,
} from '../constants/actionTypes'

//-----------------------------
//
//  COMMENTS
//
//-----------------------------
export type AddTaskCommentAction = {
    type: ADD_COMMENT,
    comment: string,
}

export const addComment = comment => ({
    type: ADD_COMMENT,
    comment: comment.get('comment'),
})