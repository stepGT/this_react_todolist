import React, {Component} from 'react';
import './ToDoList.scss';
import ToDoListTask from './ToDoListTask';
import ToDoListFooter from './ToDoListFooter';
import ToDoListTaskCreator from './ToDoListTaskCreator';
import ToDoListTasksList from './ToDoListTasksList';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 0,
          title: 'Learn JS',
          isDone: false
        },
        {
          id: 1,
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
          <ToDoListTasksList tasks={this.state.tasks}/>
          <ToDoListFooter/>
        </div>
    );
  };
}

export default ToDoList;