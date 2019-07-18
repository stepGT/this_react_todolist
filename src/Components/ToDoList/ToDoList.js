import React, {Component} from 'react';
import './ToDoList.scss';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['Learn JS', 'Learn ReactJS']
    };
  }

  createNewTask(e) {
    if (e.key === 'Enter') {
      this.setState({
        tasks: [...this.state.tasks, e.currentTarget.value]
      });
      e.currentTarget.value = '';
    }
  }

  deleteTask(task, e) {
    this.setState({
      tasks: this.state.tasks.filter((t) => {
        return t !== task
      })
    });
  }

  render() {
    return (
        <div className="react_todolist">
          <div className="react_todolist__header">
            <input onKeyPress={this.createNewTask.bind(this)} type="text"/>
          </div>
          <div className="react_todolist__tasks">
            {this.state.tasks.map((task, key) => {
              return <div key={key} className="react_todolist__task">
                {task}
                <span onClick={this.deleteTask.bind(this, task)} className="react_todolist__delete">x</span>
              </div>
            })}
          </div>
        </div>
    );
  };
}

export default ToDoList;