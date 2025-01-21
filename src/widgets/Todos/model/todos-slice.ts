import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/model/store';
import type Task from '../lib/task';

export type TodosState = {
  tasks: Task[];
};

const initialState: TodosState = {
  tasks: [],
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
  },
});

export const selectTasks = (state: RootState) => state.todos.tasks;
export const selectActiveTasksCount = (state: RootState) => (
  state.todos.tasks.filter((task) => !task.isCompleted).length
);

export const { addTask, setTasks } = todosSlice.actions;
export default todosSlice.reducer;
