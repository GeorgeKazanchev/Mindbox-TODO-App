import mockTasks from '../../shared/mocks/tasks';
import { tasksNameInStorage } from '../config/consts';
import type Task from '../../shared/lib/task';

export default function getInitialTasks(): Task[] {
  const tasksInStorage = localStorage.getItem(tasksNameInStorage);

  if (!tasksInStorage) {
    return mockTasks;
  }

  try {
    return JSON.parse(tasksInStorage);
  } catch {
    return mockTasks;
  }
}
