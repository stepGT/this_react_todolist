/**
 *
 * @type {{CHANGE_FILTER: string, CREATE_NEW_TASK: string, PUT_TASKS: string}}
 */
export const c = {
  CHANGE_FILTER: 'CHANGE_FILTER',
  CREATE_NEW_TASK: 'CREATE_NEW_TASK',
  PUT_TASKS: 'PUT_TASKS',
  CLEAR_COMPLETED: 'CLEAR_COMPLETED',
  UPDATE_TASK: 'UPDATE_TASK',
  DELETE_TASK: 'DELETE_TASK'
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
/**
 *
 * @param tasks
 * @returns {{type: string, id, title, isDone: *}}
 */
export const createNewTaskCreator = (tasks) => {
  return {
    type: c.CREATE_NEW_TASK,
    id: tasks.id,
    title: tasks.title,
    isDone: tasks.isDone
  }
};
/**
 *
 * @param id
 * @param isDone
 * @param title
 * @returns {{type: string, id: *, isDone: *, title: *}}
 */
export const updateTaskCreator = ({id, isDone, title}) => {
  return {
    type: c.UPDATE_TASK,
    id: id,
    isDone: isDone,
    title: title
  }
};
/**
 *
 * @param taskId
 * @returns {{type: string, id: *}}
 */
export const deleteTaskCreator = (taskId) => {
  return {
    type: c.DELETE_TASK,
    id: taskId
  }
};