import React from 'react';
import TodoInput from '../../../features/TodoInput';
import TodoList from '../../../features/TodoList';
import TodoControls from '../../../features/TodoControls';
import * as styles from './Todos.module.scss';

export default function Todos(): React.ReactNode {
  return (
    <section className={styles.section}>
      <h2 className={styles.visuallyHidden}>TODO widget</h2>
      <TodoInput />
      <TodoList />
      <TodoControls />
    </section>
  );
}
