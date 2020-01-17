import {
  INITIALIZE_APP,
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  UPDATE_TASK_TEXT,
  MOVE_TASK,
} from 'constants/actionType';

export const initializeApp = () => ({
  type: INITIALIZE_APP,
});

export const addTask = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted,
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id,
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id,
});

export const updateTaskText = (id, text) => ({
  type: UPDATE_TASK_TEXT,
  id,
  text,
});

export const moveTask = (fromIndex, toIndex) => ({
  type: MOVE_TASK,
  fromIndex,
  toIndex,
});
