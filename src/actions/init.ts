
import { getDataAction } from '../common/axios'
import apiUrlsConsts from '../constants/apiUrlsConsts'

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