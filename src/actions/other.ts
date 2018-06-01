
import { DairyAppAction } from '../constants/actionTypes';
const {
    OTHER_TYPE,
} = DairyAppAction

export interface IOtherAction {
    type: DairyAppAction.OTHER_TYPE
}

export const otherTask = ():IOtherAction => ({
    type: OTHER_TYPE,
})