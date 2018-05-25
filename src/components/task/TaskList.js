import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TaskRecord from './TaskRecord'
import { animateScroll } from 'react-scroll'

class TaskList extends Component {

    updateScroll = () => {
        animateScroll.scrollToBottom({ containerId: 'container' })
    }

    render() {
        return (
            <nav>
                <ul id='container' className="TaskList"> {
                    this.props.tasks.map(task =>
                        <TaskRecord key={task._id} {...task}
                            onClick={() => this.props.deleteTask(task._id)}
                            onSelect={() => this.props.selectTask(task._id)}
                        />
                    )
                }
                </ul>
            </nav>
        )
    }
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired,
        comments: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired).isRequired,
    selectTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
}

export default TaskList