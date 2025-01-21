import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/model/redux-hooks';

import {
  deleteCompleted,
  selectActiveTasksCount,
  selectShownTasksStatus,
  setShownTasksStatus,
  TasksStatus
} from '../../../widgets/Todos';

export default function TodoControls(): React.ReactNode {
  const activeTasksCount = useAppSelector(selectActiveTasksCount);
  const shownTasksStatus = useAppSelector(selectShownTasksStatus);

  const dispatch = useAppDispatch();

  return (
    <div>
      <span>{`${activeTasksCount} items left`}</span>
      <div>
        <input type='radio' name='tasks-filtration' value='all'
          checked={shownTasksStatus === TasksStatus.All}
          onChange={() => dispatch(setShownTasksStatus(TasksStatus.All))} />
        <input type='radio' name='tasks-filtration' value='active'
          checked={shownTasksStatus === TasksStatus.Active}
          onChange={() => dispatch(setShownTasksStatus(TasksStatus.Active))} />
        <input type='radio' name='tasks-filtration' value='completed'
          checked={shownTasksStatus === TasksStatus.Completed}
          onChange={() => dispatch(setShownTasksStatus(TasksStatus.Completed))} />
      </div>
      <button type='button' onClick={() => dispatch(deleteCompleted())}>Clear completed</button>
    </div>
  );
}
