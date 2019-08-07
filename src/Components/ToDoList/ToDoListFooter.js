import React, {Component} from 'react';
import {changeFilterCreator, clearCompletedCreator} from './redux/ToDoListActions';

class ToDoListFooter extends Component {
  handleFilterChanged(e) {
    this.props.store.dispatch(changeFilterCreator(e.currentTarget.dataset.value));
  }

  clearCompleted() {
    this.props.store.dispatch(clearCompletedCreator());
  }

  render() {
    let {tasks, filter} = this.props;
    return (
        <div className="react_todolist__footer">
          <div>
            <span>{tasks.filter((t) => !t.isDone).length} items left</span>
          </div>
          <div className="react_todolist__footer_buttons">
            <button data-value="all"
                    onClick={this.handleFilterChanged.bind(this)}
                    className={filter === 'all' ? 'selected' : ''}>All
            </button>
            <button data-value="active"
                    onClick={this.handleFilterChanged.bind(this)}
                    className={filter === 'active' ? 'selected' : ''}>Active
            </button>
            <button data-value="completed"
                    onClick={this.handleFilterChanged.bind(this)}
                    className={filter === 'completed' ? 'selected' : ''}>
              Completed
            </button>
          </div>
          <div>
            <button onClick={this.clearCompleted.bind(this)}>
              Clear completed
            </button>
          </div>
        </div>
    );
  };
}

export default ToDoListFooter;