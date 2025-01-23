import { it, describe, expect } from '@jest/globals';
import reducer, { setTasks } from '../../src/shared/model/todos-slice';
import TasksFilter from '../../src/shared/lib/tasks-filter';
import { getInitialState } from '../util';

describe('Set tasks function', () => {
  it('should set tasks to an empty list', () => {
    const tasks = [{ id: 0, description: 'First task', isCompleted: false }];
    expect(reducer(getInitialState(), setTasks(tasks))).toEqual({
      tasks: tasks,
      filter: TasksFilter.All,
    });
  });

  it('should remove all tasks when an empty array is passed', () => {
    const initialState = getInitialState();
    initialState.tasks.push({ id: 0, description: 'First task', isCompleted: false });
    expect(reducer(initialState, setTasks([]))).toEqual({
      tasks: [],
      filter: TasksFilter.All,
    });
  });

  it('should rewrite existing tasks', () => {
    const initialState = getInitialState();

    const tasks = [
      { id: 0, description: 'First task', isCompleted: false },
      { id: 1, description: 'Second task', isCompleted: false },
    ];

    initialState.tasks = tasks;

    const newTasks = [
      { id: 2, description: 'Do smth', isCompleted: false },
      { id: 3, description: 'Finished task', isCompleted: true },
    ];

    expect(reducer(initialState, setTasks(newTasks))).toEqual({
      tasks: newTasks,
      filter: TasksFilter.All,
    });
  });
});
