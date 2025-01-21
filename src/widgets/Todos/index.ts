import Todos from './ui/Todos';
import todosReducer from './model/todos-slice';
import type Task from './lib/task';

import { setTasks, addTask } from './model/todos-slice';
import { selectTasks, selectActiveTasksCount } from './model/todos-slice';

export { todosReducer };
export { setTasks, addTask };
export { selectTasks, selectActiveTasksCount };

export type { Task };
export default Todos;
