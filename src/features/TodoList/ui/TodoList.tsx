import React from 'react';
import * as styles from './TodoList.module.scss';
import TodoItem from '../../../entities/TodoItem';
import { useAppSelector } from '../../../shared/model/redux-hooks';
import { selectShownTasks } from '../../../shared/model/todos-slice';

export default function TodoList(): React.ReactNode {
  const tasks = useAppSelector(selectShownTasks);

  if (tasks.length === 0) {
    return (
      <div className={styles.message}>There are no tasks</div>
    );
  }

  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
