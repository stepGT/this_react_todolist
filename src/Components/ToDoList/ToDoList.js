import React, {Component} from 'react';
import './ToDoList.scss';
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
      ],
      filter: 'all'
    }
  }

  parentDeleteTask(taskId) {
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

  parentUpdateTask(task) {
    const newTasksList = [...this.state.tasks];
    newTasksList.forEach((t) => {
      if (t.id === task.id) {
        t.isDone = task.isDone;
        return;
      }
    });
    this.setState({
      tasks: newTasksList
    });
  }

  parentChangeFilter(filterValue) {
    this.setState({
      filter: filterValue
    });
  }

  render() {
    let {tasks, filter} = this.state;
    return (
        <div className="react_todolist">
          <ToDoListTaskCreator
              parentCreateNewTask={this.parentCreateNewTask.bind(this)}/>
          <ToDoListTasksList
              parentUpdateCallback={this.parentUpdateTask.bind(this)}
              parentDeleteTask={this.parentDeleteTask.bind(this)}
              tasks={tasks}/>
          <ToDoListFooter parentChangeFilter={this.parentChangeFilter.bind(this)} filter={filter} tasks={tasks}/>
        </div>
    );
  };
}

export default ToDoList;