import { DairyAppAction } from '../constants/actionTypes';
const {
    ADD_COMMENT,
} = DairyAppAction

export interface IAddTaskCommentAction {
    type: DairyAppAction.ADD_COMMENT,
    comment: string,
}

export const addComment = (comment:string):IAddTaskCommentAction => ({
    type: ADD_COMMENT,
    comment,
})