import React, { Component } from 'react'
import './App.css'
import AddTaskBar from '../containers/task/AddTaskBar'
import TaskListView from '../containers/task/TaskListView'
import CommentListView from '../containers/comment/CommentListView'
import AddCommentBar from '../containers/comment/AddCommentBar'

class App extends Component {
 render() {
    return (
      <div className="App">
        <div className="DairyCover">
          <div className="App-name">
            dairy app
        </div>
          <div className="App-slogan">
            Comment with no sense
        </div>
        </div>
        <div className="DairyContent">
          <div className="TaskListView">
            <p className="App-title">Items</p>
            <AddTaskBar />
            <TaskListView />
          </div>
          <div className="CommentListView">
            <p className="App-title">Comments #{this.props.taskPosition}</p>
            <CommentListView />
            <AddCommentBar />
          </div>
        </div>
      </div>
    )
  }
}

export default App