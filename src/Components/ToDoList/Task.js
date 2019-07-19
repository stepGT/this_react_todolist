import React, {Component} from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {task: props.task}
  }

  deleteTask(e) {

  }

  toggleTaskStatus(e) {

  }

  render() {
    let isDone = this.state.task.isDone ? 'react_todolist__task done' : 'react_todolist__task';
    return (
        <div className={isDone}>
          <input onClick={this.toggleTaskStatus.bind(this)} type="checkbox"/>
          {this.state.task.title}
          <span onClick={this.deleteTask.bind(this)} className="react_todolist__delete">x</span>
        </div>
    );
  };
}

export default Task;