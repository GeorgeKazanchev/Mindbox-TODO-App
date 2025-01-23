import React from 'react';
import * as styles from './TodoControls.module.scss';
import FilterId from '../lib/filter-id';
import TasksFilter from '../../../shared/lib/tasks-filter';

import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/model/redux-hooks';

import {
  deleteCompleted,
  selectActiveTasksCount,
  selectFilter,
  setFilter,
} from '../../../shared/model/todos-slice';

export default function TodoControls(): React.ReactNode {
  const activeTasksCount = useAppSelector(selectActiveTasksCount);
  const filter = useAppSelector(selectFilter);

  const dispatch = useAppDispatch();

  const areAllShown = filter === TasksFilter.All;
  const areActiveShown = filter === TasksFilter.Active;
  const areCompletedShown = filter === TasksFilter.Completed;

  const handleKeyDown = (
    evt: React.KeyboardEvent<HTMLElement>,
    tasksFilter: TasksFilter,
  ) => {
    if (evt.key === 'Enter' || evt.code === 'Space') {
      dispatch(setFilter(tasksFilter));
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.tasksLeft}>
        Left:
        <span className={styles.tasksLeftCount}>{activeTasksCount}</span>
      </span>

      <div className={styles.filters}>
        <label
          htmlFor={FilterId.All}
          className={`${styles.filter} ${areAllShown ? styles.filterSelected : ''}`}
          tabIndex={0}
          onKeyDown={(evt: React.KeyboardEvent<HTMLElement>) =>
            handleKeyDown(evt, TasksFilter.All)
          }
        >
          All
          <input
            id={FilterId.All}
            className={styles.input}
            type="radio"
            name="tasks-filtration"
            value="all"
            checked={areAllShown}
            onChange={() => dispatch(setFilter(TasksFilter.All))}
          />
        </label>

        <label
          htmlFor={FilterId.Active}
          className={`${styles.filter} ${areActiveShown ? styles.filterSelected : ''}`}
          tabIndex={0}
          onKeyDown={(evt: React.KeyboardEvent<HTMLElement>) =>
            handleKeyDown(evt, TasksFilter.Active)
          }
        >
          Active
          <input
            id={FilterId.Active}
            className={styles.input}
            type="radio"
            name="tasks-filtration"
            value="active"
            checked={areActiveShown}
            onChange={() => dispatch(setFilter(TasksFilter.Active))}
          />
        </label>

        <label
          htmlFor={FilterId.Completed}
          className={`${styles.filter} ${areCompletedShown ? styles.filterSelected : ''}`}
          tabIndex={0}
          onKeyDown={(evt: React.KeyboardEvent<HTMLElement>) =>
            handleKeyDown(evt, TasksFilter.Completed)
          }
        >
          Completed
          <input
            id={FilterId.Completed}
            className={styles.input}
            type="radio"
            name="tasks-filtration"
            value="completed"
            checked={areCompletedShown}
            onChange={() => dispatch(setFilter(TasksFilter.Completed))}
          />
        </label>
      </div>

      <button
        className={styles.clearButton}
        type="button"
        onClick={() => dispatch(deleteCompleted())}
      >
        Clear completed
      </button>
    </div>
  );
}
