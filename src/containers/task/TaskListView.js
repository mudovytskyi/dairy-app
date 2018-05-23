import  React, { Component } from 'react';
import AddTaskBar from './AddTaskBar';
import TaskList from './TaskList';

class TaskListView extends Component {
   
    onAddNewHandler = (newTask) => {
        this.props.onAdd(newTask);
        this.refs.list.updateScroll();
    }

    render () {
        return (
            <div className="TaskListView">
                <p className="App-title">Items</p>
                <AddTaskBar/>
                { /* addTask={this.onAddNewHandler} */}
                <TaskList/>
                {// ref='list' items={this.props.tasks} 
                    // onSelect={this.props.onSelect}
                    // selectedTaskID={this.props.taskID} 
                    // onDelete={this.props.onDelete}
                }
             </div>
        );
    }
}

export default TaskListView;