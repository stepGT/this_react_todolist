import React, {Component} from 'react';
import ToDoListTask from './ToDoListTask';

class ToDoListTasksList extends Component {
  render() {
    return (
        <div className="react_todolist__tasks">
          {this.props.tasks.map((task) => {
            return <ToDoListTask
                updateCallback={this.props.parentUpdateCallback.bind(this)}
                deleteCallback={this.props.parentDeleteTask.bind(this)}
                key={task.id} task={task}/>
          })}
        </div>
    );
  };
}

export default ToDoListTasksList;