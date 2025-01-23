import { it, describe, expect } from '@jest/globals';
import reducer, { changeTaskStatus } from '../../src/shared/model/todos-slice';
import { getInitialState } from '../util';

describe('Change task status function', () => {
  it('should change status to "true"', () => {
    const task = { id: 0, description: 'Task', isCompleted: false };
    const initialState = getInitialState([task]);

    const updatedState = reducer(initialState, changeTaskStatus(task));
    expect(updatedState.tasks[0].isCompleted).toBe(true);
  });

  it('should change status to "false"', () => {
    const task = { id: 0, description: 'Task', isCompleted: true };
    const initialState = getInitialState([task]);

    const updatedState = reducer(initialState, changeTaskStatus(task));
    expect(updatedState.tasks[0].isCompleted).toBe(false);
  });

  it('should do nothing if there is no given task within the list', () => {
    const isCompletedInitial = false;
    const task = { id: 0, description: 'Task', isCompleted: isCompletedInitial };

    const updatedState = reducer(getInitialState(), changeTaskStatus(task));
    expect(updatedState.tasks.length).toBe(0);
    expect(task.isCompleted).toBe(isCompletedInitial);
  });
});
