import { List } from 'immutable'

export interface ITask {
    _id: number,
    name: string,
    selected: boolean,
    comments: [string]
    // comments: [string] | List<string>
}