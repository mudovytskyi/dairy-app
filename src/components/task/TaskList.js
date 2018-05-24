import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskRecord from './TaskRecord';
import { animateScroll } from 'react-scroll';
import $ from 'jquery';
import tasks from '../../reducers/comments';

class TaskList extends Component {

    updateScroll = () => {
        animateScroll.scrollToBottom({ containerId: 'container' });
    }
    
    processAction = (func, id) => {
        func(id)
        this.props.updateStorage()
    }

    render() {
        return (
            <nav>
                <ul id='container' className="TaskList"> {
                    this.props.tasks.map(task =>
                        <TaskRecord key={task._id} {...task}
                            onClick={() => this.processAction(this.props.deleteTask, task._id)}
                            onSelect={() => this.processAction(this.props.selectTask, task._id)}
                            // onClick={() => this.props.deleteTask(task._id)}
                            // onSelect={() => this.props.selectTask(task._id)}
                        />
                    )
                }
                </ul>
            </nav>
        );
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
    updateStorage: PropTypes.func.isRequired,
};

export default TaskList;