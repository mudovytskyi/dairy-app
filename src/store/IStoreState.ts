import { List } from 'immutable'
import { ITask } from '../models/ITask'

export default interface IStoreState {
    tasks: List<ITask>
}