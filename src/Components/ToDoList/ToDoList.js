import React, {Component} from 'react';
import './ToDoList.scss';
import ToDoListFooter from './ToDoListFooter';
import ToDoListTaskCreator from './ToDoListTaskCreator';
import ToDoListTasksList from './ToDoListTasksList';
import {ToDoListServicesGetTasks} from './ToDoListServices';
import {createStore} from 'redux';
import {ToDoListReducer} from './redux/ToDoListReducers';
import {changeFilterAction, createNewTaskAction} from './redux/ToDoListActions';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    let store = createStore(ToDoListReducer);
    this.state = store.getState();
    ToDoListServicesGetTasks(53236).then(data => {
      let tasks = data.map((item) => {
        return {
          id: item.id,
          title: item.title,
          isDone: item.done
        }
      });
      this.setState({tasks: tasks});
    });
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

  parentClearCompleted() {
    this.setState({
      tasks: this.state.tasks.filter(t => !t.isDone)
    });
  }

  render() {
    let {tasks, filter} = this.state;
    let filteredTasks = [];
    switch (filter) {
      case 'all':
        filteredTasks = tasks;
        break;
      case 'active':
        filteredTasks = tasks.filter((t) => !t.isDone);
        break;
      case 'completed':
        filteredTasks = tasks.filter((t) => t.isDone);
        break;
      default:
        filteredTasks = tasks;
    }
    return (
        <div className="react_todolist">
          <ToDoListTaskCreator
              parentCreateNewTask={this.parentCreateNewTask.bind(this)}/>
          <ToDoListTasksList
              parentUpdateCallback={this.parentUpdateTask.bind(this)}
              parentDeleteTask={this.parentDeleteTask.bind(this)}
              tasks={filteredTasks}/>
          <ToDoListFooter parentClearCompleted={this.parentClearCompleted.bind(this)} parentChangeFilter={this.parentChangeFilter.bind(this)} filter={filter} tasks={filteredTasks}/>
        </div>
    );
  };
}

export default ToDoList;