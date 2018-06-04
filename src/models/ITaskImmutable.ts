
import * as Immutable from 'immutable'
import { ITask } from './ITask'

export interface ITaskImmutable extends Immutable.Map<string, any> {
    toJS(): ITask,
    get<K extends keyof ITask>(key: K): ITask[K]
}