
import { DairyAppAction } from '../constants/actionTypes';
import { Dispatch } from 'react-redux';
import { getDataAction } from '../common/axios';
import apiUrlsConsts from '../constants/apiUrlsConsts';
const {
    INIT_STORE,
} = DairyAppAction

export interface IInitStoreAction {
    type: DairyAppAction.INIT_STORE,
    tasks: object[]
}

export const initStoreTask = (tasksFrom:object[]):IInitStoreAction => ({
    type: INIT_STORE,
    tasks: tasksFrom
})


export function initStore(dispatch:Dispatch):any {
    return () => {

    console.log("DI", dispatch)
       return  getDataAction(apiUrlsConsts.TASKS)
        .then((tasksFrom:any) => {dispatch(initStoreTask(tasksFrom))})
        .catch((error:any) => {throw(error)})
    }
}