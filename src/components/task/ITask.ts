import { List } from 'immutable'
import * as Immutable from 'immutable';

export interface ITask {
    _id: number,
    name: string,
    selected: boolean,
    comments: List<string>
}

export interface ITaskImmutable extends Immutable.Map<string, any> {
    toJS(): ITask,
    get<K extends keyof ITask>(key: K): ITask[K]
}