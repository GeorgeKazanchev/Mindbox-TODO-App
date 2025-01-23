import { TodosState } from '../src/shared/model/todos-slice';
import TasksFilter from '../src/shared/lib/tasks-filter';
import type Task from '../src/shared/lib/task';

export const getInitialState = (tasks: Task[] = []): TodosState => ({
  tasks: tasks,
  filter: TasksFilter.All,
});
