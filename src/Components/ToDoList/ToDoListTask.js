import React, {Component} from 'react';
import {ToDoListUpdateTask} from './ToDoListServices';

class ToDoListTask extends Component {
  constructor(props) {
    super(props);
    this.state = {editMode: false};
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
    ToDoListUpdateTask(53236, task.id, task.title, task.isDone)
        .then(data => {
          this.parentUpdateCallback(task);
        });
  }

  ToDoListTaskEditMode() {
    this.setState({editMode: true});
  }

  ToDoListTaskOnBlur(e) {
    let newTitle = e.currentTarget.value;
    let task = {
      ...this.props.task
    };
    task.title = newTitle;
    ToDoListUpdateTask(53236, task.id, newTitle, null)
        .then(data => {
          this.setState({editMode: false});
          this.parentUpdateCallback(task);
        });
  }

  render() {
    let {title, isDone} = this.props.task;
    let isDoneClass = isDone ? 'react_todolist__task done' : 'react_todolist__task';
    let displayTitle = this.state.editMode ?
        <input type="text" value={title} onChange={()=>{}}/> : <span onDoubleClick={this.ToDoListTaskEditMode.bind(this)} onBlur={this.ToDoListTaskOnBlur.bind(this)}>{title}</span>;
    return (
        <div className={isDoneClass}>
          <input checked={isDone} onChange={this.toggleTaskStatus.bind(this)}
                 type="checkbox"/>
          {displayTitle}
          <span onClick={this.deleteTask.bind(this)}
                className="react_todolist__delete">x</span>
        </div>
    );
  };
}

export default ToDoListTask;