import React, {Component} from 'react';

class ToDoListFooter extends Component {
  render() {
    return (
        <div className="react_todolist__footer">
          <div>
            <span>{this.props.tasks.filter((t) => !t.isDone).length} items left</span>
          </div>
          <div className="react_todolist__footer_buttons">
            <button className="active">All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
          <div>
            Clear completed
          </div>
        </div>
    );
  };
}

export default ToDoListFooter;