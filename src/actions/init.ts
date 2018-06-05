
// import { DairyAppAction } from '../constants/actionTypes';
// import { Dispatch } from 'react-redux';
import { getDataAction } from '../common/axios';
import apiUrlsConsts from '../constants/apiUrlsConsts';
// import IStoreState from '../reducers/IStoreState';
// import { resolve } from 'dns';
// import tasks from '../reducers/tasks';
// const {
//     INIT_STORE,
// } = DairyAppAction

// export interface IInitStoreAction {
//     type: DairyAppAction.INIT_STORE,
//     tasks: object[]
// }

// export const initStoreTask = (tasksFrom:object[]):IInitStoreAction => ({
//     type: INIT_STORE,
//     tasks: tasksFrom
// })


export function initStore(getCurrentState:any):any {
    return new Promise( (resolve:any) => {
      getDataAction(apiUrlsConsts.TASKS)
        .then((tasksFrom:any) => tasksFrom.data)
        .then((tasks:any) => {
            resolve({
                ...getCurrentState,
                tasks
            })
        })
    })
}

// export function initStore(dispatch:Dispatch):any {
//     return () => {

//     console.log("DI", dispatch)
//        return  getDataAction(apiUrlsConsts.TASKS)
//         .then((tasksFrom:any) => {dispatch(initStoreTask(tasksFrom))})
//         .catch((error:any) => {throw(error)})
//     }
// }