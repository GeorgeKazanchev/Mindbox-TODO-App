import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './ui/App';
import tasks from '../shared/mocks/tasks';
import { store } from './model/store';
import { setTasks } from '../shared/model/todos-slice';

import 'normalize.css';

const root = document.querySelector('#root');
if (!root) {
  throw new Error('Root not found'); //  TODO: Add error page and render it here
}

store.dispatch(setTasks(tasks));

const appContainer = createRoot(root);
appContainer.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
