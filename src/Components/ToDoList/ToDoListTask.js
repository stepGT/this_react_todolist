import React, {Component} from 'react';
import {ToDoListDeleteTask, ToDoListUpdateTask} from './ToDoListServices';
import {deleteTaskCreator} from './redux/ToDoListActions';

class ToDoListTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      title: props.task.title
    };
    this.parentUpdateCallback = props.updateCallback;
  }

  deleteTask() {
    ToDoListDeleteTask(53236, this.props.task.id).then(() => {this.props.store.dispatch(deleteTaskCreator(this.props.task.id))});
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

  ToDoListTaskSaveTitle(e) {
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

  ToDoListTaskChangeTitle(e) {
    this.setState({title: e.currentTarget.value});
  }

  render() {
    let {isDone} = this.props.task;
    let {title} = this.state;
    let isDoneClass = isDone ? 'react_todolist__task done' : 'react_todolist__task';
    let displayTitle = this.state.editMode ?
        <input type="text" value={title} onChange={this.ToDoListTaskChangeTitle.bind(this)} onBlur={this.ToDoListTaskSaveTitle.bind(this)}/> : <span onDoubleClick={this.ToDoListTaskEditMode.bind(this)}>{title}</span>;
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