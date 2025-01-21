import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/model/store';
import type Task from '../lib/task';
import TasksStatus from '../lib/tasks-status';

export type TodosState = {
  tasks: Task[];
  shownTasksStatus: TasksStatus;
};

const initialState: TodosState = {
  tasks: [],
  shownTasksStatus: TasksStatus.All,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    deleteCompleted: (state) => {
      state.tasks = state.tasks.filter((task) => !task.isCompleted);
    },
    changeTaskCompletion: (state, action: PayloadAction<Task>) => {
      const task = state.tasks.find((item) => item.id === action.payload.id);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    setShownTasksStatus: (state, action: PayloadAction<TasksStatus>) => {
      state.shownTasksStatus = action.payload;
    },
  },
});

const getActiveTasks = (state: RootState) =>
  state.todos.tasks.filter((task) => !task.isCompleted);

const getCompletedTasks = (state: RootState) =>
  state.todos.tasks.filter((task) => task.isCompleted);

export const selectTasks = (state: RootState) => state.todos.tasks;
export const selectActiveTasksCount = (state: RootState) =>
  getActiveTasks(state).length;
export const selectShownTasksStatus = (state: RootState) =>
  state.todos.shownTasksStatus;

export const selectShownTasks = (state: RootState) => {
  switch (state.todos.shownTasksStatus) {
    case TasksStatus.All:
      return state.todos.tasks;
    case TasksStatus.Active:
      return getActiveTasks(state);
    case TasksStatus.Completed:
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
  changeTaskCompletion,
  setShownTasksStatus,
} = todosSlice.actions;

export default todosSlice.reducer;
