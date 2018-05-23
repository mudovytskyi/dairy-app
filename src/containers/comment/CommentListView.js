import  React, { Component } from 'react';
import CommentList from './CommentList';
import AddCommentBar from './AddCommentBar';

class CommentListView extends Component {
    render () {
        return (
            <div className="CommentListView">
                <p className="App-title">Comments #{this.props.taskIndex > -1 ? this.props.taskIndex + 1 : ""}</p>
                <CommentList items={this.props.comments}/>
                <AddCommentBar addComment={this.props.onAdd} disabled={this.props.taskIndex == -1 }/>
            </div>
        );
    }
}

export default CommentListView;