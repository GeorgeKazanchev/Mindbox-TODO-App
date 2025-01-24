import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import todosReducer from '../../shared/model/todos-slice';

const rootReducer = combineReducers({
  todos: todosReducer,
});

//  Мидлвар для сохранения задач в LocalStorage.
//  Для получения состояния после обновления store.
//  Не очень надёжное решение, но для данной конкретной задачи подойдёт.
const tasksSavingMiddleware: Middleware<{}, RootState> =
  (storeApi) => (next) => async (action) => {
    setTimeout(() => {
      const state = storeApi.getState();
      localStorage.setItem('tasks', JSON.stringify(state.todos.tasks));
    }, 0);

    return next(action);
  };

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksSavingMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
