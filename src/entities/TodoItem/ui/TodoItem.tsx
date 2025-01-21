import React from 'react';
import * as styles from './TodoItem.module.scss';
import { useAppDispatch } from '../../../shared/model/redux-hooks';
import { changeTaskCompletion } from '../../../shared/model/todos-slice';
import type Task from '../../../shared/lib/task';

type Props = {
  task: Task;
};

export default function TodoItem({ task }: Props): React.ReactNode {
  const { id, description, isCompleted } = task;

  const dispatch = useAppDispatch();

  const isCompletedId = `todo-${id}-completed`;

  return (
    <li
      className={`${styles.todoItem} ${isCompleted ? styles.todoItemCompleted : ''}`}
    >
      <label className={styles.description} htmlFor={isCompletedId}>
        {description}
      </label>
      <input
        id={isCompletedId}
        className={styles.input}
        type="checkbox"
        checked={isCompleted}
        onChange={() => dispatch(changeTaskCompletion(task))}
      />
    </li>
  );
}
