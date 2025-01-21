import React from 'react';
import { useAppDispatch } from '../../../shared/model/redux-hooks';
import { addTask } from '../../../shared/model/todos-slice';

export default function TodoInput(): React.ReactNode {
  const [taskDescription, setTaskDescription] = React.useState('');

  const dispatch = useAppDispatch();

  return (
    <div>
      <form
        onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
          evt.preventDefault();
          const task = {
            id: '123',
            description: taskDescription,
            isCompleted: false,
          };
          dispatch(addTask(task));
          setTaskDescription('');
        }}
      >
        <input
          type="text"
          name="description"
          value={taskDescription}
          placeholder="What needs to be done?"
          onInput={(evt: React.ChangeEvent<HTMLInputElement>) => {
            setTaskDescription(evt.currentTarget.value);
          }}
        />
      </form>
    </div>
  );
}
