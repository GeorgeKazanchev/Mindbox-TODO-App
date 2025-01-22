import React from 'react';
import * as styles from './TodoControls.module.scss';

import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/model/redux-hooks';

import {
  deleteCompleted,
  selectActiveTasksCount,
  selectShownTasksStatus,
  setShownTasksStatus,
} from '../../../shared/model/todos-slice';

import {
  FILTER_ACTIVE_ID,
  FILTER_ALL_ID,
  FILTER_COMPLETED_ID,
} from '../config/consts';

import TasksStatus from '../../../shared/lib/tasks-status';

export default function TodoControls(): React.ReactNode {
  const activeTasksCount = useAppSelector(selectActiveTasksCount);
  const shownTasksStatus = useAppSelector(selectShownTasksStatus);

  const dispatch = useAppDispatch();

  const isAllShown = shownTasksStatus === TasksStatus.All;
  const isActiveShown = shownTasksStatus === TasksStatus.Active;
  const isCompletedShown = shownTasksStatus === TasksStatus.Completed;

  const handleKeyDown = (
    evt: React.KeyboardEvent<HTMLElement>,
    taskStatus: TasksStatus,
  ) => {
    if (evt.key === 'Enter' || evt.code === 'Space') {
      dispatch(setShownTasksStatus(taskStatus));
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
          htmlFor={FILTER_ALL_ID}
          className={`${styles.filter} ${isAllShown ? styles.filterSelected : ''}`}
          tabIndex={0}
          onKeyDown={(evt: React.KeyboardEvent<HTMLElement>) =>
            handleKeyDown(evt, TasksStatus.All)
          }
        >
          All
          <input
            id={FILTER_ALL_ID}
            className={styles.input}
            type="radio"
            name="tasks-filtration"
            value="all"
            checked={isAllShown}
            onChange={() => dispatch(setShownTasksStatus(TasksStatus.All))}
          />
        </label>

        <label
          htmlFor={FILTER_ACTIVE_ID}
          className={`${styles.filter} ${isActiveShown ? styles.filterSelected : ''}`}
          tabIndex={0}
          onKeyDown={(evt: React.KeyboardEvent<HTMLElement>) =>
            handleKeyDown(evt, TasksStatus.Active)
          }
        >
          Active
          <input
            id={FILTER_ACTIVE_ID}
            className={styles.input}
            type="radio"
            name="tasks-filtration"
            value="active"
            checked={isActiveShown}
            onChange={() => dispatch(setShownTasksStatus(TasksStatus.Active))}
          />
        </label>

        <label
          htmlFor={FILTER_COMPLETED_ID}
          className={`${styles.filter} ${isCompletedShown ? styles.filterSelected : ''}`}
          tabIndex={0}
          onKeyDown={(evt: React.KeyboardEvent<HTMLElement>) =>
            handleKeyDown(evt, TasksStatus.Completed)
          }
        >
          Completed
          <input
            id={FILTER_COMPLETED_ID}
            className={styles.input}
            type="radio"
            name="tasks-filtration"
            value="completed"
            checked={isCompletedShown}
            onChange={() =>
              dispatch(setShownTasksStatus(TasksStatus.Completed))
            }
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
