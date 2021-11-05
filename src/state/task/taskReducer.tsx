import uuid from 'uuid';

import {Task} from '../../models/Task';
import {TaskActionEnum} from './taskActions';
import {TaskAction} from './taskActionTypes';

type TaskState = {
  tasks: Task[];
};

const initialState: TaskState = {
  tasks: [
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
  ],
};

const taskReducer = (
  state: TaskState = initialState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case TaskActionEnum.ADD_TASK:
      const newTask: Task = {
        id: uuid(),
        text: action.text,
        isDone: false,
      };

      return {
        ...state,
        tasks: [newTask, ...state.tasks],
      };

    case TaskActionEnum.TOGGLE_TASK:
      const updatedTaskList = state.tasks.map(task => {
        if (task.id === action.id) {
          task.isDone = !task.isDone;
        }
        return task;
      });

      return {
        ...state,
        tasks: updatedTaskList,
      };

    case TaskActionEnum.DELETE_TASK:
      const filtredTaskList = state.tasks.filter(task => task.id !== action.id);

      return {
        ...state,
        tasks: filtredTaskList,
      };

    default:
      return state;
  }
};

export default taskReducer;
