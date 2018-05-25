import React, { Component } from 'react'
import $ from 'jquery'

class TaskRecord extends Component {

    handleClick = () => {
        this.props.onClick(this.props._id)
    }

    handleSelected = (event) => {
        event.preventDefault()
        if ($(event.target).hasClass('delete-btn'))
            return

        $('.task-selected').removeClass('task-selected')
        $(event.currentTarget).addClass('task-selected')
        this.props.onSelect(this.props._id)
    }

    getNumberOfComments = () => {
        return (this.props.comments) ? this.props.comments.length : 0
    }

    render() {
        return (
            <li className={(this.props.selected === true) ? "TaskRecord task-selected" : "TaskRecord"} onClick={this.handleSelected.bind(this)}>
                <div className="indicator" />
                <div className="task">
                    <span className="task-name">{this.props.name}</span>
                    <input className="num-comments" type="button" value={this.getNumberOfComments()} />
                </div>
                <div className="task-action">
                    <input className="delete-btn" type="button" value="Delete" onClick={this.handleClick} />
                </div>
            </li>
        )
    }
}

export default TaskRecord