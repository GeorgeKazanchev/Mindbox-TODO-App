import type Task from '../lib/task';

const tasks: Task[] = [
  {
    id: 1,
    description: 'Почистить зубы',
    isCompleted: true,
  },
  {
    id: 2,
    description: 'Выполнить тестовое задание',
    isCompleted: false,
  },
  {
    id: 3,
    description: 'Написать прекрасный код',
    isCompleted: true,
  },
  {
    id: 4,
    description: 'Покрыть код тестами',
    isCompleted: false,
  },
  {
    id: 5,
    description: 'Попасть на стажировку',
    isCompleted: false,
  },
];

export default tasks;
