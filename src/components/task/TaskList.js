import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskRecord from './TaskRecord';
import { animateScroll } from 'react-scroll';
import $ from 'jquery';
import tasks from '../../reducers/comments';
import { selectTask } from '../../actions';

class TaskList extends Component {

    updateScroll = () => {
        animateScroll.scrollToBottom({ containerId: 'container' });
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
                    // Object.keys(this.props.tasks).map(taskID =>
                    //         {   
                    //             let task = this.props.tasks[taskID];
                    //             let record = (task._id === this.props.selectedTaskID) 
                    //                 ? <TaskRecord key = {taskID} selected {...task} onClick={this.props.onDelete} 
                    //                     onSelect={this.props.onSelect} />
                    //                 : <TaskRecord key = {taskID} {...task} onClick={this.props.onDelete} 
                    //                     onSelect={this.props.onSelect} />;

                    //             return record;
                    //         }
                    //     )
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
};

export default TaskList;