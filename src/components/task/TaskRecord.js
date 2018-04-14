import  React, { Component } from 'react';
import $ from 'jquery';

class TaskRecord extends Component {

    handleClick = () => {
        this.props.onClick(this.props._id)
     };

     handleSelected = (event) => {
        $('.task-selected').removeClass('task-selected');
        $(event.currentTarget).addClass('task-selected');
        this.props.onSelect(this.props._id);
     };

/*  <div className="TaskRecord">
                <div className="task-name">
                    <span>{this.props.name}</span>
                </div>
                <div className="num-comments">
                    <input type="button" value={this.props.comments.length}/>
                </div>
                <div className="delete-btn" onClick={this.handleClick}>
                    <input type="button" value="Delete"/>
                </div>
            </div> */
    render () {
        return (
            <li className={(this.props.selected == true) ? "TaskRecord task-selected" : "TaskRecord"} onClick={this.handleSelected.bind(this)}>
                <div className="indicator"/>
                <div className="task">
                    <span className="task-name">{this.props.name}</span>
                    <input className="num-comments" type="button" value={this.props.comments.length}/>
                </div>
                <div className="task-action">
                <input className="delete-btn" type="button" value="Delete" onClick={this.handleClick} />
                </div>
            </li>
        );
    }
}
export default TaskRecord;