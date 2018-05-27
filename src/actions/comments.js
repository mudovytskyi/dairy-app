import {
    ADD_COMMENT,
} from './actionTypes'

//-----------------------------
//
//  COMMENTS
//
//-----------------------------
export const addComment = comment => ({
    type: ADD_COMMENT,
    ...comment,
})