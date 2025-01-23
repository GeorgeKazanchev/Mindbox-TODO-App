import { it, describe, expect } from '@jest/globals';
import reducer, { setFilter } from '../../src/shared/model/todos-slice';
import TasksFilter from '../../src/shared/lib/tasks-filter';
import { getInitialState } from '../util';

describe('Set tasks filter function', () => {
  it('should set a new filter', () => {
    const filter = TasksFilter.Active;
    const initialState = getInitialState();

    expect(initialState.filter).toBe(TasksFilter.All);
    expect(initialState.filter).not.toBe(filter);

    expect(reducer(getInitialState(), setFilter(filter))).toEqual({
      tasks: [],
      filter: filter,
    });
  });
});
