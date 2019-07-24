import React, {Component} from 'react';
import {ToDoListServicesCreateTask} from './ToDoListServices';

class ToDoListTaskCreator extends Component {
  createNewTask(e) {
    if (e.key === 'Enter') {
      const newTaskInput = e.currentTarget;
      ToDoListServicesCreateTask(newTaskInput.value, 53236)
          .then(data => {
            const newTask = {
              title: data.task.title,
              isDone: data.task.done,
              id: data.task.id
            };
            this.props.parentCreateNewTask(newTask);
            newTaskInput.value = '';
          });
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