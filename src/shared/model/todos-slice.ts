import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/model/store';
import type Task from '../lib/task';
import TasksFilter from '../lib/tasks-filter';

export type TodosState = {
  tasks: Task[];
  filter: TasksFilter;
};

const initialState: TodosState = {
  tasks: [],
  filter: TasksFilter.All,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({
        id:
          state.tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1) + 1,
        description: action.payload,
        isCompleted: false,
      });
    },
    deleteCompleted: (state) => {
      state.tasks = state.tasks.filter((task) => !task.isCompleted);
    },
    changeTaskStatus: (state, action: PayloadAction<Task>) => {
      const task = state.tasks.find((item) => item.id === action.payload.id);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    setFilter: (state, action: PayloadAction<TasksFilter>) => {
      state.filter = action.payload;
    },
  },
});

const getActiveTasks = (state: RootState) =>
  state.todos.tasks.filter((task) => !task.isCompleted);

const getCompletedTasks = (state: RootState) =>
  state.todos.tasks.filter((task) => task.isCompleted);

export const selectTasks = (state: RootState) => state.todos.tasks;
export const selectFilter = (state: RootState) => state.todos.filter;
export const selectActiveTasksCount = (state: RootState) =>
  getActiveTasks(state).length;

export const selectShownTasks = (state: RootState) => {
  switch (state.todos.filter) {
    case TasksFilter.All:
      return state.todos.tasks;
    case TasksFilter.Active:
      return getActiveTasks(state);
    case TasksFilter.Completed:
      return getCompletedTasks(state);
    default:
      throw new Error(
        'Cannot select shown tasks because of the unknown status',
      );
  }
};

export const {
  setTasks,
  addTask,
  deleteCompleted,
  changeTaskStatus,
  setFilter,
} = todosSlice.actions;

export default todosSlice.reducer;
