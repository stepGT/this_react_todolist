/**
 *
 * @type {{CHANGE_FILTER: string, CREATE_NEW_TASK: string, PUT_TASKS: string}}
 */
export const c = {
  CHANGE_FILTER: 'CHANGE_FILTER',
  CREATE_NEW_TASK: 'CREATE_NEW_TASK',
  PUT_TASKS: 'PUT_TASKS',
  CLEAR_COMPLETED: 'CLEAR_COMPLETED',
};
/**
 *
 * @returns {{type: string}}
 */
export const clearCompletedCreator = () => {
  return {
    type: c.CLEAR_COMPLETED
  }
};
/**
 *
 * @param filterValue
 * @returns {{type: string, value: *}}
 */
export const changeFilterCreator = (filterValue) => {
  return {
    type: c.CHANGE_FILTER,
    value: filterValue
  }
};
/**
 *
 * @param tasks
 * @returns {{type: *, tasks: *}}
 */
export const putTasksActionCreator = (tasks) => {
  return {
    type: c.PUT_TASKS,
    tasks: tasks
  }
};