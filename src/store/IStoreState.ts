import { List } from 'immutable'
import ITask from '../components/task/ITask'

export default interface IStoreState {
    tasks: List<ITask>
}