import uuid from 'uuid';
import {Task} from '../src/models/Task';

export const mockTasks: Task[] = [
  {
    id: uuid(),
    text: 'Morning walk',
    isDone: false,
  },
  {
    id: uuid(),
    text: 'Office Tasks',
    isDone: false,
  },
  {
    id: uuid(),
    text: 'Gym',
    isDone: false,
  },
  {
    id: uuid(),
    text: 'Family dinner',
    isDone: false,
  },
];
