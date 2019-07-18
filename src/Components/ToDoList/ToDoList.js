import React, {Component} from 'react';
import './ToDoList.scss';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title: 'Learn JS',
          isDone: false
        },
        {
          title: 'Learn ReactJS',
          isDone: false
        }
      ]
    }
  }

  createNewTask(e) {
    if (e.key === 'Enter') {
      this.setState({
        tasks: [...this.state.tasks, {title: e.currentTarget.value, isDone: false}]
      });
      e.currentTarget.value = '';
    }
  }

  deleteTask(task, e) {
    this.setState({
      tasks: this.state.tasks.filter((t) => {
        return t !== task
      })
    });
  }

  toggleTaskStatus(task, e) {
    task.isDone = !task.isDone;
    this.forceUpdate();
  }

  render() {
    return (
        <div className="react_todolist">
          <div className="react_todolist__header">
            <input onKeyPress={this.createNewTask.bind(this)} type="text"/>
          </div>
          <div className="react_todolist__tasks">
            {this.state.tasks.map((task, key) => {
              return <div key={key} className={task.isDone ? 'react_todolist__task done' : 'react_todolist__task'}>
                <input onClick={this.toggleTaskStatus.bind(this, task)} type="checkbox"/>
                {task.title}
                <span onClick={this.deleteTask.bind(this, task)} className="react_todolist__delete">x</span>
              </div>
            })}
          </div>
        </div>
    );
  };
}

export default ToDoList;