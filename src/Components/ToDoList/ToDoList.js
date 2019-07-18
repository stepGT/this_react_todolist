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

  render() {
    return (
        <div className="react_todolist">
          <div className="react_todolist__header">
            <input onKeyPress={this.createNewTask.bind(this)} type="text"/>
          </div>
          <div className="react_todolist__tasks">
            {this.state.tasks.map((el, key) => {
              return <div key={key} className="react_todolist__task">
                {el}
              </div>
            })}
          </div>
        </div>
    );
  };
}

export default ToDoList;