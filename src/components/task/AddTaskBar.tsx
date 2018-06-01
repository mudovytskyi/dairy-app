import * as React from 'react'
import AddTaksForm from '../../forms/AddTaskForm'
import { IAddTaskBarDispatchFromProps } from '../../containers/task/AddTaskBarContainer';


export interface IAddTaskBarProps extends IAddTaskBarDispatchFromProps {}

class AddTaskBar extends React.Component<IAddTaskBarProps, any> {
    constructor(props:IAddTaskBarProps) {
        super(props)
        this.handleSubmit.bind(this)
        this.handleSubmitFail.bind(this)
    }

    protected handleSubmit = (value:string) => {
        return this.props.addTask(value)
    }

    protected handleSubmitFail = (value:any) => {
        console.error("FAILED", value)
    }

    public render() {
        return (
            <AddTaksForm onSubmit={this.handleSubmit} onSubmitFail={this.handleSubmitFail} />
        )
    }
}

export default AddTaskBar