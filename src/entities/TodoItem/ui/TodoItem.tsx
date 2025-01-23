import React from 'react';
import * as styles from './TodoItem.module.scss';
import { useAppDispatch } from '../../../shared/model/redux-hooks';
import { changeTaskStatus } from '../../../shared/model/todos-slice';
import type Task from '../../../shared/lib/task';

type Props = {
  task: Task;
};

export default function TodoItem({ task }: Props): React.ReactNode {
  const { id, description, isCompleted } = task;

  const dispatch = useAppDispatch();

  const checkboxId = `todo-${id}-completed`;

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLElement>) => {
    if (evt.key === 'Enter' || evt.code === 'Space') {
      dispatch(changeTaskStatus(task));
    }
  };

  return (
    <li
      className={`${styles.todoItem} ${isCompleted ? styles.todoItemCompleted : ''}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <label htmlFor={checkboxId} className={styles.description}>
        {description}
      </label>
      <input
        id={checkboxId}
        className={styles.input}
        type="checkbox"
        checked={isCompleted}
        onChange={() => dispatch(changeTaskStatus(task))}
      />
    </li>
  );
}
