import {Dispatch} from 'redux';
import {TaskActionEnum} from './taskActions';
import {TaskAction} from './taskActionTypes';

export const addTask = (text: string) => {
  return (dispatch: Dispatch<TaskAction>) => {
    dispatch({
      type: TaskActionEnum.ADD_TASK,
      text,
    });
  };
};

export const deleteTask = (id: string) => {
  return (dispatch: Dispatch<TaskAction>) => {
    dispatch({
      type: TaskActionEnum.DELETE_TASK,
      id,
    });
  };
};

export const toggleTask = (id: string) => {
  return (dispatch: Dispatch<TaskAction>) => {
    dispatch({
      type: TaskActionEnum.TOGGLE_TASK,
      id,
    });
  };
};
