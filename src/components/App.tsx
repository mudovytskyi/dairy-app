import * as React from 'react'
import './App.css'
import AddTaskBarContainer from '../containers/task/AddTaskBarContainer'
import TaskListView from '../containers/task/TaskListView'
import CommentListView from '../containers/comment/CommentListView'
import AddCommentBarContainer from '../containers/comment/AddCommentBarContainer'
import { IAppStateFromProps } from '../containers/AppContainer'

export interface IAppProps extends IAppStateFromProps {}
export interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
 public render() {
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
            <AddTaskBarContainer />
            <TaskListView />
          </div>
          <div className="CommentListView">
            <p className="App-title">Comments #{this.props.taskPosition}</p>
            <CommentListView />
            <AddCommentBarContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default App