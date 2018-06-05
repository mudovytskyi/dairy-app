import { DairyAppAction } from "../constants/actionTypes"
import { ITask } from "../models"

const { ADD_COMMENT_REQUEST } = DairyAppAction

export interface IAddTaskCommentAction {
  type: DairyAppAction.ADD_COMMENT_REQUEST
  comment: string
}

export interface IAddTaskCommentResponseAction {
  type: DairyAppAction.ADD_COMMENT
  comment: ITask
}

export const addComment = (comment: string): IAddTaskCommentAction => ({
  type: ADD_COMMENT_REQUEST,
  comment
})
