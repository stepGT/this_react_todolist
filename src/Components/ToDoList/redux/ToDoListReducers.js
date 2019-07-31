import {c} from './ToDoListActions';

/**
 *
 * @param oldstate
 * @param action
 * @returns {*}
 * @constructor
 */
export function ToDoListReducer(oldstate, action) {
  switch (action.type) {
    case c.CHANGE_FILTER:
      return {
        ...oldstate,
        filter: action.value
      };
    case c.CREATE_NEW_TASK:
      return {
        ...oldstate,
        tasks: [...oldstate.tasks, {
          id: action.id,
          title: action.title,
          isDone: action.isDone,
        }]
      };
    case c.PUT_TASKS:
      return {
        ...oldstate,
        tasks: [...oldstate.tasks, ...action.tasks]
      };
    case c.CLEAR_COMPLETED:
      return {
        ...oldstate,
        tasks: oldstate.tasks.filter(t => !t.isDone)
      };
    default:
      if (!!oldstate) {
        return oldstate;
      }
      else {
        return {tasks: [], filter: 'all'}
      }
  }
}