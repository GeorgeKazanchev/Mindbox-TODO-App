import React from 'react';
import * as styles from './TodoInput.module.scss';
import { useAppDispatch } from '../../../shared/model/redux-hooks';
import { addTask } from '../../../shared/model/todos-slice';

export default function TodoInput(): React.ReactNode {
  const [taskDescription, setTaskDescription] = React.useState('');

  const dispatch = useAppDispatch();

  const inputId = 'new-task-description';

  const addNewTask = () => {
    const task = {
      id: '123',
      description: taskDescription,
      isCompleted: false,
    };
    dispatch(addTask(task));
    setTaskDescription('');
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    addNewTask();
  };

  const handleSubmitButtonClick = (
    evt: React.MouseEvent<HTMLButtonElement>,
  ) => {
    evt.preventDefault();
    addNewTask();
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <label
        htmlFor={inputId}
        className={styles.label}
        aria-label="Insert new task"
      >
        <input
          id={inputId}
          className={styles.input}
          type="text"
          value={taskDescription}
          name="description"
          placeholder="What needs to be done?"
          onInput={(evt: React.ChangeEvent<HTMLInputElement>) => {
            setTaskDescription(evt.currentTarget.value);
          }}
        />
      </label>
      <button
        style={{ display: taskDescription.length === 0 ? 'none' : 'block' }}
        className={styles.submitButton}
        type="submit"
        onClick={handleSubmitButtonClick}
      >
        Add
      </button>
    </form>
  );
}
