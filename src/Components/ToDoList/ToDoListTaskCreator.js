import React, {Component} from 'react';
import {ToDoListServicesCreateTask} from './ToDoListServices';

const ToDoListTaskCreator = (props) => {
  const createNewTask = (e) => {
    if (e.key === 'Enter') {
      const newTaskInput = e.currentTarget;
      ToDoListServicesCreateTask(newTaskInput.value, 53236)
          .then(data => {
            const newTask = {
              title: data.task.title,
              isDone: data.task.done,
              id: data.task.id
            };
            props.parentCreateNewTask(newTask);
            newTaskInput.value = '';
          });
    }
  };
  return (
      <div className="react_todolist__header">
        <input onKeyPress={createNewTask} type="text"/>
      </div>
  );
};
export default ToDoListTaskCreator;