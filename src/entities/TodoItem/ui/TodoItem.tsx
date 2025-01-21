import React from 'react';
import { useAppDispatch } from '../../../shared/model/redux-hooks';
import { changeTaskCompletion } from '../../../shared/model/todos-slice';
import type Task from '../../../shared/lib/task';

type Props = {
  task: Task;
};

export default function TodoItem({ task }: Props): React.ReactNode {
  const { description, isCompleted } = task;

  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => dispatch(changeTaskCompletion(task))}
      />
      <span>{`Description: ${description}`}</span>
    </li>
  );
}
