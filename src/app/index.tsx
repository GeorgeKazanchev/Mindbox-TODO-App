import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './ui/App';
import getInitialTasks from './model/get-initial-tasks';
import { store } from './model/store';
import { setTasks } from '../shared/model/todos-slice';

import 'normalize.css';
import * as styles from './index.module.scss';

document.documentElement.classList.add(styles.page);
document.body.classList.add(styles.pageBody);

const root = document.querySelector('#root');
if (!root) {
  throw new Error('Root not found');
}

const tasks = getInitialTasks();
store.dispatch(setTasks(tasks));

const appContainer = createRoot(root);
appContainer.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
