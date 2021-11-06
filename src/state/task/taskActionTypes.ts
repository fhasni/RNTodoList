import {TaskActionEnum} from './taskActions';

interface AddTaskAction {
  type: TaskActionEnum.ADD_TASK;
  text: string;
}

interface DeleteTaskAction {
  type: TaskActionEnum.DELETE_TASK;
  id: string;
}

interface ToggleTaskAction {
  type: TaskActionEnum.TOGGLE_TASK;
  id: string;
}

export type TaskAction = AddTaskAction | DeleteTaskAction | ToggleTaskAction;
