import React, {Component} from 'react';
import './ToDoList.scss';
import Task from './Task';
import ToDoListFooter from './ToDoListFooter';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.newIndex = 2;
    this.state = {
      tasks: [
        {
          id: 1,
          title: 'Learn JS',
          isDone: false
        },
        {
          id: 2,
          title: 'Learn ReactJS',
          isDone: false
        }
      ]
    }
  }

  deleteTask(taskId) {
    let newTasksList = this.state.tasks.filter((t) => {
      return t.id !== taskId
    });
    this.setState({
      tasks: newTasksList
    });
  }

  createNewTask(e) {
    if (e.key === 'Enter') {
      this.setState({
        tasks: [...this.state.tasks, {
          title: e.currentTarget.value,
          isDone: false,
          id: this.newIndex
        }]
      });
      e.currentTarget.value = '';
      this.newIndex++;
    }
  }

  render() {
    return (
        <div className="react_todolist">
          <div className="react_todolist__header">
            <input onKeyPress={this.createNewTask.bind(this)} type="text"/>
          </div>
          <div className="react_todolist__tasks">
            {this.state.tasks.map((task) => {
              return <Task deleteCallback={this.deleteTask.bind(this)} key={task.id} task={task}/>
            })}
          </div>
          <ToDoListFooter/>
        </div>
    );
  };
}

export default ToDoList;