export function ToDoListReducer(oldstate, action) {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...oldstate,
        filter: 'completed'
      };
    case 'CREATE_NEW_TASK':
      return {
        ...oldstate,
        tasks: [...oldstate.tasks, {
          id: action.id,
          title: action.title,
          isDone: action.isDone,
        }]
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