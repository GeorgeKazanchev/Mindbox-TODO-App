import React from 'react';
import TodoInput from '../../../features/TodoInput';
import TodoList from '../../../features/TodoList';
import TodoControls from '../../../features/TodoControls';

export default function Todos(): React.ReactNode {
  return (
    <section>
      <TodoInput />
      <TodoList />
      <TodoControls />
    </section>
  );
}
