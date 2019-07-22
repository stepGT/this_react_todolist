import React, {Component} from 'react';
import ToDoListTask from './ToDoListTask';

class ToDoListTasksList extends Component {

  constructor(props) {
    super(props);
  }

  deleteTask() {

  }

  render() {
    return (
        <div className="react_todolist__tasks">
          {this.props.tasks.map((task) => {
            return <ToDoListTask deleteCallback={this.deleteTask.bind(this)}
                                 key={task.id} task={task}/>
          })}
        </div>
    );
  };
}

export default ToDoListTasksList;