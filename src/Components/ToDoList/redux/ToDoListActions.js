/**
 *
 * @type {{CHANGE_FILTER: string, CREATE_NEW_TASK: string, PUT_TASKS: string}}
 */
export const c = {
  CHANGE_FILTER: 'CHANGE_FILTER',
  CREATE_NEW_TASK: 'CREATE_NEW_TASK',
  PUT_TASKS: 'PUT_TASKS'
};
/**
 *
 * @type {{type: string}}
 */
export const changeFilterAction = {
  type: c.CHANGE_FILTER
};
/**
 *
 * @type {{type: string, id: number, title: string, isDone: boolean}}
 */
export const createNewTaskAction = {
  type: c.CREATE_NEW_TASK,
  id: 2,
  title: 'Learn ReactJS',
  isDone: false
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