import React, {Component} from 'react';
import './ToDoList.scss';
import Task from './Task';

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
        tasks: [...this.state.tasks, {
          title: e.currentTarget.value,
          isDone: false
        }]
      });
      e.currentTarget.value = '';
    }
  }

  render() {
    return (
        <div className="react_todolist">
          <div className="react_todolist__header">
            <input onKeyPress={this.createNewTask.bind(this)} type="text"/>
          </div>
          <div className="react_todolist__tasks">
            {this.state.tasks.map((task, key) => {
              return <Task key={key} task={task}/>
            })}
          </div>
        </div>
    );
  };
}

export default ToDoList;