import React, {Component} from 'react';
import ToDoListTask from './ToDoListTask';

class ToDoListTasksList extends Component {
  render() {
    return (
        <div className="react_todolist__tasks">
          {this.props.tasks.map((task) => {
            return <ToDoListTask store={this.props.store} key={task.id} task={task}/>
          })}
        </div>
    );
  };
}

export default ToDoListTasksList;