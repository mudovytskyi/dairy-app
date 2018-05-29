import {
    ADD_COMMENT,
} from '../constants/actionTypes'

//-----------------------------
//
//  COMMENTS
//
//-----------------------------
export const addComment = comment => ({
    type: ADD_COMMENT,
    comment: comment.get('comment'),
})