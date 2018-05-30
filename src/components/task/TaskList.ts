import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import TaskRecord from './TaskRecord'
import { animateScroll } from 'react-scroll'
import { List } from 'immutable'
import ITask from './ITask'


export interface ITaskListProps {
    tasks: List<ITask>,
    deleteTask: () => void,
    selectTask: () => void,
}


class TaskList extends Component<ITaskListProps> {

    updateScroll = () => {
        animateScroll.scrollToBottom({ containerId: 'container' })
    }

    render() {
        return (
            <nav>
                <ul id='container' className="TaskList"> {
                    this.props.tasks.map(task =>
                        <TaskRecord key={task.get('_id')} {...task.toJS()}
                            onClick={() => this.props.deleteTask(task.get('_id'))}
                            onSelect={() => this.props.selectTask(task.get('_id'))}
                        />
                    )
                }
                </ul>
            </nav>
        )
    }
}

// TaskList.propTypes = {
//     tasks: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
//         _id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         selected: PropTypes.bool.isRequired,
//         comments: ImmutablePropTypes.listOf(PropTypes.string).isRequired
//     }).isRequired).isRequired,
//     selectTask: PropTypes.func.isRequired,
//     deleteTask: PropTypes.func.isRequired,
// }

export default TaskList