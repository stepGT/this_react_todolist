import React, {Component} from 'react';
import './ToDoList.scss';
import ToDoListFooter from './ToDoListFooter';
import ToDoListFormContainer from './ToDoListTaskCreator';
import ToDoListTasksList from './ToDoListTasksList';
import {ToDoListServicesGetTasks} from './ToDoListServices';
import {createStore} from 'redux';
import {ToDoListReducer} from './redux/ToDoListReducers';
import {
  changeFilterCreator,
  clearCompletedCreator, createNewTaskCreator, deleteTaskCreator,
  putTasksActionCreator, updateTaskCreator
} from './redux/ToDoListActions';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.store = createStore(ToDoListReducer);
    this.state = this.store.getState();
    // subscribe to store changes
    this.store.subscribe(() => {
      let state = this.store.getState();
      this.setState(state);
    });
    //
    ToDoListServicesGetTasks(53236).then(data => {
      let tasks = data.map((item) => {
        return {
          id: item.id,
          title: item.title,
          isDone: item.done
        }
      });
      let action = putTasksActionCreator(tasks);
      this.store.dispatch(action);
    });
  }

  parentDeleteTask(taskId) {
    this.store.dispatch(deleteTaskCreator(taskId));
  }

  parentCreateNewTask(task) {
    this.store.dispatch(createNewTaskCreator(task));
  }

  parentUpdateTask(task) {
    this.store.dispatch(updateTaskCreator(task));
  }

  parentChangeFilter(filterValue) {
    this.store.dispatch(changeFilterCreator(filterValue));
  }

  parentClearCompleted() {
    this.store.dispatch(clearCompletedCreator());
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
          <ToDoListFormContainer
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