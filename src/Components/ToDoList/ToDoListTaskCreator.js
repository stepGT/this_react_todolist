import React, {Component} from 'react';
import {ToDoListServicesCreateTask} from './ToDoListServices';

class ToDoListFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      isWaiting: false
    };
  }

  changeTitle(title) {
    this.setState({
      title: title
    });
  }

  createTask(title) {
    this.setState({
      isWaiting: true,
      title: title
    });
    ToDoListServicesCreateTask(title, 53236)
        .then(data => {
          const newTask = {
            title: data.task.title,
            isDone: data.task.done,
            id: data.task.id
          };
          this.props.parentCreateNewTask(newTask);
          this.setState({
            isWaiting: false,
            title: ''
          });
        });
  }

  render() {
    let {title, isWaiting} = this.state;
    return (
        <ToDoListFormPresentation changeTitle={this.changeTitle.bind(this)}
                                  createTask={this.createTask.bind(this)}
                                  title={title} isWaiting={isWaiting}/>
    );
  }
}

const ToDoListFormPresentation = (props) => {
  const createNewTask = (e) => {
    if (e.key === 'Enter') {
      const newTaskInput = e.currentTarget;
      props.createTask(newTaskInput.value);
    }
  };

  const changeTitle = (e) => {
    props.changeTitle(e.currentTarget.value)
  };

  return (
      <div className="header">
        <input onKeyUp={changeTitle}
               onKeyPress={createNewTask} /*value={props.title}*/
               disabled={props.isWaiting}
               onChange={() => {}}/>
      </div>
  );
};
export default ToDoListFormContainer;