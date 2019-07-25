import React, {Component} from 'react';
import {ToDoListUpdateTask} from './ToDoListServices';

class ToDoListTask extends Component {
  constructor(props) {
    super(props);
    this.parentDeleteCallback = props.deleteCallback;
    this.parentUpdateCallback = props.updateCallback;
  }

  deleteTask() {
    this.parentDeleteCallback(this.props.task.id);
  }

  toggleTaskStatus() {
    let task = {
      ...this.props.task
    };
    task.isDone = !task.isDone;
    ToDoListUpdateTask(53236, task.title, task.isDone)
        .then(data => {
          this.parentUpdateCallback(task);
        });
  }

  render() {
    let isDone = this.props.task.isDone ? 'react_todolist__task done' : 'react_todolist__task';
    return (
        <div className={isDone}>
          <input checked={this.props.task.isDone} onChange={this.toggleTaskStatus.bind(this)} type="checkbox"/>
          {this.props.task.title}
          <span onClick={this.deleteTask.bind(this)} className="react_todolist__delete">x</span>
        </div>
    );
  };
}

export default ToDoListTask;