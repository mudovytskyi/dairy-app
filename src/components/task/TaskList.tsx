import * as React from 'react'
import TaskRecord from './TaskRecord'
import { animateScroll } from 'react-scroll'
import { ITask } from '../../models'
import { ITaskListStateFromProps, ITaskListDispatchFromProps } from '../../containers/task/TaskListView';


export interface ITaskListProps extends ITaskListStateFromProps, ITaskListDispatchFromProps {
    
}

export interface ITaskListState {

}

export default class TaskList extends React.Component<ITaskListProps, ITaskListState> {
    public state: ITaskListState = {}

    constructor(props:ITaskListProps) {
        super(props)
    }

    protected updateScroll():void {
        animateScroll.scrollToBottom({ containerId: 'container' })
    }

    public render(): JSX.Element {
        return (
            <nav>
                <ul id='container' className="TaskList"> {
                    this.props.tasks.map((task:ITask) =>
                        <TaskRecord key={task._id} {...task}
                            onClick={this.props.deleteTask.bind(this, task._id)}
                            onSelect={this.props.selectTask.bind(this, task._id)}
                        />
                    )
                }
                </ul>
            </nav>
        )
    }
}