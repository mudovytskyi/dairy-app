import React, { Component } from 'react';
import './App.css';
import TaskListView from './task/TaskListView';
import CommentListView from './comment/CommentListView';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: this.props.tasks || [],
      currentTaskID: this.props.currentTaskID || -1,
      lastTaskID: this.props.lastTaskID || 0,
    };
  }

  componentDidUpdate() {
    this.props.onUpdate(this.state);
  }

  fetchTask = (taskID) => {
    if (this.state.tasks.length) {
      return this.state.tasks.find(task => {
        return task._id === taskID;
      }) || {};
    }
    return {};
  };

  // addNewTaskHandler = (newTaskName) => {
  //   let newTask = {
  //     _id: this.state.lastTaskID + 1,
  //     name: newTaskName,
  //     comments: [],
  //   };

  //   this.setState({
  //     currentTaskID: newTask._id,
  //     tasks: [...this.state.tasks, newTask],
  //     lastTaskID: newTask._id,
  //   });

  //   //CALL STORAGE
  // }

  deleteTaskHandler = (taskID) => {
    let taskToDelete = this.fetchTask(taskID);
    let index = this.state.tasks.indexOf(taskToDelete);
    let updatedTaskList = this.state.tasks.slice();
    updatedTaskList.splice(index, 1);

    this.setState({
      tasks: updatedTaskList,
      currentTaskID: ((taskToDelete._id === this.state.currentTaskID) ?
        -1 :
        this.state.currentTaskID),
    })

    //CALL STORAGE
  }


  addNewCommentHandler = (newComment) => {
    let currentTask = this.fetchTask(this.state.currentTaskID)
    let taskToUpdate = Object.assign({}, currentTask);
    let index = this.state.tasks.indexOf(currentTask);
    taskToUpdate.comments.push(newComment);

    let updatedTaskList = this.state.tasks.slice();
    updatedTaskList.splice(index, 1, taskToUpdate);

    this.setState({
      tasks: updatedTaskList,
    })

    //CALL STORAGE
  }

  selectTaskHandler = (taskID) => {
    this.setState({
      currentTaskID: taskID,
    })
  }

  render() {
    return (<div className="App">
      <div className="DairyCover">
        <div className="App-name">
          dairy app
                  </div>
        <div className="App-slogan">
          Comment with no sense
                  </div>
      </div>
      <div className="DairyContent">
        <TaskListView tasks={this.state.tasks}
          // taskID={this.state.currentTaskID}
          // onAdd={this.addNewTaskHandler}
          // onDelete={this.deleteTaskHandler}
          // onSelect={this.selectTaskHandler} 
          />
        <CommentListView comments={this.fetchTask(this.state.currentTaskID).comments || []}
          onAdd={this.addNewCommentHandler}
          taskIndex={this.state.tasks.indexOf(this.fetchTask(this.state.currentTaskID))} />
      </div>
    </div>
    );
  }
}

export default App;