import { OTHER_TYPE } from "../constants/actionTypes"

export type OtherAction = {
    type: OTHER_TYPE
}

export const otherTask = () => ({
    type: OTHER_TYPE,
})