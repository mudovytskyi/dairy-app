import React, { Component } from 'react'
import { ITask } from '../../models'

interface ITaskRecordProps extends ITask {
    onClick: (id: number) => void,
    onSelect: (id: number) => void,
}

class TaskRecord extends Component<ITaskRecordProps, any> {
    constructor(props: ITaskRecordProps) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.handleSelected = this.handleSelected.bind(this)
    }

    protected handleClick = () => {
        this.props.onClick(this.props._id)
    }

    protected handleSelected = (event: any) => {
        event.preventDefault()
        this.props.onSelect(this.props._id)
    }

    public render() {
        const { name, comments, selected } = this.props
        return (
            <li className={selected ? "TaskRecord task-selected" : "TaskRecord"} onClick={this.handleSelected}>
                <div className="indicator" />
                <div className="task">
                    <span className="task-name">{name}</span>
                    <input className="num-comments" type="button" value={comments.length} />
                </div>
                <div className="task-action">
                    <input className="delete-btn" type="button" value="Delete" onClick={this.handleClick} />
                </div>
            </li>
        )
    }
}

export default TaskRecord