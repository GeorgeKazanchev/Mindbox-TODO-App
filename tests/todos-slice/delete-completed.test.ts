import { it, describe, expect } from '@jest/globals';
import reducer, { deleteCompleted } from '../../src/shared/model/todos-slice';
import { getInitialState } from '../util';

describe('Delete completed tasks function', () => {
  it('should not change an empty array', () => {
    const updatedState = reducer(getInitialState(), deleteCompleted());
    expect(updatedState.tasks.length).toBe(0);
  });

  it('should delete 1 completed task', () => {
    const initialState = getInitialState();
    initialState.tasks.push({ id: 0, description: 'Completed task', isCompleted: true });

    const updatedState = reducer(initialState, deleteCompleted());
    expect(updatedState.tasks.length).toBe(0);
  });

  it('should delete several completed tasks', () => {
    const initialState = getInitialState();
    initialState.tasks = [
      { id: 0, description: 'Task 1', isCompleted: true },
      { id: 1, description: 'Task 2', isCompleted: true },
    ];

    const updatedState = reducer(initialState, deleteCompleted());
    expect(updatedState.tasks.length).toBe(0);
  });

  it('should not delete an incomplete task', () => {
    const initialState = getInitialState();
    initialState.tasks.push({ id: 0, description: 'Incomplete task', isCompleted: false });

    const updatedState = reducer(initialState, deleteCompleted());
    expect(updatedState.tasks.length).toBe(1);
  });

  it('should delete a completed task in a mixed tasks list', () => {
    const initialState = getInitialState();
    initialState.tasks = [
      { id: 0, description: 'Task 1', isCompleted: false },
      { id: 1, description: 'Task 2', isCompleted: true },
      { id: 2, description: 'Task 3', isCompleted: false },
    ];

    const updatedState = reducer(initialState, deleteCompleted());
    expect(updatedState.tasks.length).toBe(2);
  });
});
