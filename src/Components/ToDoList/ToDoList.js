import React, {Component} from 'react';
import './ToDoList.scss';
import ToDoListTask from './ToDoListTask';
import ToDoListFooter from './ToDoListFooter';
import ToDoListTaskCreator from './ToDoListTaskCreator';

class ToDoList extends Component {
  constructor(props) {
    super(props);
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

  parentCreateNewTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  render() {
    return (
        <div className="react_todolist">
          <ToDoListTaskCreator parentCreateNewTask={this.parentCreateNewTask.bind(this)}/>
          <div className="react_todolist__tasks">
            {this.state.tasks.map((task) => {
              return <ToDoListTask deleteCallback={this.deleteTask.bind(this)} key={task.id} task={task}/>
            })}
          </div>
          <ToDoListFooter/>
        </div>
    );
  };
}

export default ToDoList;