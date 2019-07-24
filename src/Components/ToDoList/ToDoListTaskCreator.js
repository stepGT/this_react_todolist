import React, {Component} from 'react';

class ToDoListTaskCreator extends Component {

  constructor(props) {
    super(props);
    this.newIndex = 2;
  }

  createNewTask(e) {
    if (e.key === 'Enter') {
      const data = new URLSearchParams();
      data.append('widgetId', 53236);
      data.append('title', e.currentTarget.value);
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
            console.log(data);
          });
      const newTask = {
        title: e.currentTarget.value,
        isDone: false,
        id: this.newIndex
      };
      this.props.parentCreateNewTask(newTask);
      e.currentTarget.value = '';
      this.newIndex++;
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