import { it, describe, expect } from '@jest/globals';
import reducer, { addTask } from '../../src/shared/model/todos-slice';
import TasksFilter from '../../src/shared/lib/tasks-filter';
import { getInitialState } from '../util';

describe('Add task function', () => {
  it('should add a new task to an empty list', () => {
    const taskDescription = 'First task';
    expect(reducer(getInitialState(), addTask(taskDescription))).toEqual({
      tasks: [{ id: 0, description: taskDescription, isCompleted: false }],
      filter: TasksFilter.All,
    });
  });

  it('should add an incompleted task', () => {
    const updatedState = reducer(getInitialState(), addTask('New task'));
    expect(updatedState.tasks[0].isCompleted).toBe(false);
  });

  it('should generate incremented Id of an added task', () => {
    const initialState = getInitialState();

    const taskId = 999;
    const firstTask = { id: taskId, description: 'First task', isCompleted: false };
    initialState.tasks.push(firstTask);

    const updatedState = reducer(initialState, addTask('Second task'));
    expect(updatedState.tasks[1].id).toEqual(taskId + 1);
  });

  it('should generate Id === 0 if a task with negative Id exists', () => {
    const initialState = getInitialState();

    const firstTask = { id: -999, description: 'First task', isCompleted: false };
    initialState.tasks.push(firstTask);

    const updatedState = reducer(initialState, addTask('Second task'));
    expect(updatedState.tasks[1].id).toEqual(0);
  });

  it('should add a new task to a non-empty list', () => {
    const initialState = getInitialState();
    const firstTask = { id: 0, description: 'First task', isCompleted: false };
    initialState.tasks.push(firstTask);

    const taskDescription = 'Second task';

    expect(reducer(initialState, addTask(taskDescription))).toEqual({
      tasks: [
        firstTask,
        { id: 1, description: taskDescription, isCompleted: false },
      ],
      filter: TasksFilter.All,
    });
  });
});
