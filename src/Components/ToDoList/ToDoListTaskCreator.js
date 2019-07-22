import React, {Component} from 'react';

class ToDoListTaskCreator extends Component {

  constructor(props) {
    super(props);
    this.newIndex = 2;
  }

  createNewTask(e) {
    if (e.key === 'Enter') {
      const newTask = {
        title: e.currentTarget.value,
        isDone: false,
        id: this.newIndex
      };
      this.props.parentCreateNewTask(newTask);
      e.currentTarget.value = '';
      this.newIndex++;
    }
  }

  render() {
    return (
        <div className="react_todolist__header">
          <input onKeyPress={this.createNewTask.bind(this)} type="text"/>
        </div>
    );
  };
}

export default ToDoListTaskCreator;