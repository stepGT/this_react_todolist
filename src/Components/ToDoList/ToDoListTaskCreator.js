import React, {Component} from 'react';
import {ToDoListServicesCreateTask} from './ToDoListServices';

class ToDoListFormContainer extends Component {
  createTask(title) {
    ToDoListServicesCreateTask(title, 53236)
        .then(data => {
          const newTask = {
            title: data.task.title,
            isDone: data.task.done,
            id: data.task.id
          };
          this.props.parentCreateNewTask(newTask);
          //newTaskInput.value = '';
        });
  }

  render() {
    return (
        <ToDoListTaskCreator createTask={this.createTask.bind(this)}/>
    );
  }
}

const ToDoListTaskCreator = (props) => {
  const createNewTask = (e) => {
    if (e.key === 'Enter') {
      const newTaskInput = e.currentTarget;
      props.createTask(newTaskInput.value);
    }
  };
  return (
      <div className="react_todolist__header">
        <input onKeyPress={createNewTask} type="text"/>
      </div>
  );
};
export default ToDoListFormContainer;