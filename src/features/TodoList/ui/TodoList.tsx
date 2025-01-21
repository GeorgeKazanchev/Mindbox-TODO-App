import React from 'react';
import TodoItem from '../../../entities/TodoItem';
import { useAppSelector } from '../../../shared/model/redux-hooks';
import { selectShownTasks } from '../../../widgets/Todos';

export default function TodoList(): React.ReactNode {
  const tasks = useAppSelector(selectShownTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
