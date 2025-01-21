import Todos from './ui/Todos';
import todosReducer from './model/todos-slice';
import TasksStatus from './lib/tasks-status';
import type Task from './lib/task';

//  Import reducers
import {
  setTasks,
  addTask,
  deleteCompleted,
  changeTaskCompletion,
  setShownTasksStatus
} from './model/todos-slice';

//  Import selectors
import {
  selectTasks,
  selectActiveTasksCount,
  selectShownTasksStatus,
  selectShownTasks,
} from './model/todos-slice';

export { todosReducer };

//  Re-export reducers
export {
  setTasks,
  addTask,
  deleteCompleted,
  changeTaskCompletion,
  setShownTasksStatus,
};

//  Re-export selectors
export {
  selectTasks,
  selectActiveTasksCount,
  selectShownTasksStatus,
  selectShownTasks,
};

export { TasksStatus };
export type { Task };
export default Todos;
