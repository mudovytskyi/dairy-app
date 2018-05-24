import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask, saveToStorage } from '../../actions'

class AddTaskBar extends Component {

    addTask = (value) => {
        this.props.addTask(value);
        this.props.updateStorage();
        this.refs.newTaskInput.value = '';
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let newTaskValue = this.refs.newTaskInput.value;
        if (newTaskValue) {
            this.addTask(newTaskValue);
        }
    }

    handleKeyPress = (event) => {
        let newTaskValue = this.refs.newTaskInput.value;
        if (newTaskValue && event.charCode === 13) {
            this.addTask(newTaskValue);
        }
    }

    render() {
        return (
            <div className="AddTaskBar">

                <input type="text"
                    onKeyPress={this.handleKeyPress}
                    ref="newTaskInput"
                    placeholder="Type name here..." />
                <input type="submit" value="Add new" onClick={this.handleSubmit} />

            </div>
        );
    }
}


AddTaskBar = connect(
    null,
    (dispatch) => {
        return {
            addTask: (text) => dispatch(addTask(text)),
            updateStorage: () => dispatch(saveToStorage()),
        }
    }
)(AddTaskBar);


export default AddTaskBar;