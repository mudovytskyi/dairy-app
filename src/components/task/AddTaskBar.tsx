import * as React from 'react'
import AddTaksForm from '../../forms/AddTaskForm'
import { IAddTaskBarDispatchFromProps } from '../../containers/task/AddTaskBarContainer'
import { Map } from 'immutable'

export interface IAddTaskBarProps extends IAddTaskBarDispatchFromProps {}

class AddTaskBar extends React.Component<IAddTaskBarProps, any> {
    constructor(props:IAddTaskBarProps) {
        super(props)
        this.handleSubmit.bind(this)
    }

    protected handleSubmit = (value:Map<string, any>):void => {
        this.props.addTask(value.get('name'))
    }

    public render():JSX.Element {
        return (
            <AddTaksForm onSubmit={this.handleSubmit}/>
        )
    }
}

export default AddTaskBar