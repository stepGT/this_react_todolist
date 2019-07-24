import React, {Component} from 'react';

class ToDoListTaskCreator extends Component {
  createNewTask(e) {
    if (e.key === 'Enter') {
      const data = new URLSearchParams();
      const newTaskInput = e.currentTarget;
      data.append('widgetId', 53236);
      data.append('title', newTaskInput.value);
      fetch('https://repetitora.net/api/JS/Tasks', {
        method: 'POST',
        body: data,
        headers: {
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'accept': 'application/json'
        },
        mode: 'cors'
      })
          .then(result => result.json())
          .then(data => {
            const newTask = {
              title: data.task.title,
              isDone: data.task.done,
              id: data.task.id
            };
            this.props.parentCreateNewTask(newTask);
            newTaskInput.value = '';
          });
    }
  }

  render() {
    return (
        <div className="react_todolist__header">
          <input onKeyPress={this.createNewTask.bind(this)} type="text"/>
        </div>
    );
  };
}

export default ToDoListTaskCreator;