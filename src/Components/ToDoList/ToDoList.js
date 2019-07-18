import React, {Component} from 'react';
import './ToDoList.scss';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['Learn JS', 'Learn ReactJS']
    };
  }

  render() {
    return (
        <div className="react_todolist">
          <div className="react_todolist__header">
            <input type="text"/>
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