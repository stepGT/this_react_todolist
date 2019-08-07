import React, {Component} from 'react';
import './ToDoList.scss';
import ToDoListFooter from './ToDoListFooter';
import ToDoListFormContainer from './ToDoListTaskCreator';
import ToDoListTasksList from './ToDoListTasksList';
import {ToDoListServicesGetTasks} from './ToDoListServices';
import {createStore} from 'redux';
import {ToDoListReducer} from './redux/ToDoListReducers';
import {createNewTaskCreator, putTasksActionCreator} from './redux/ToDoListActions';

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

  parentCreateNewTask(task) {
    this.store.dispatch(createNewTaskCreator(task));
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
          <ToDoListTasksList store={this.store} tasks={filteredTasks}/>
          <ToDoListFooter store={this.store} filter={filter} tasks={filteredTasks}/>
        </div>
    );
  };
}

export default ToDoList;