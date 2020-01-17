import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  UPDATE_TASK_TEXT,
  MOVE_TASK,
} from 'constants/actionType';

const tasks = (
  state = [],
  { type, id, text, isCompleted, fromIndex, toIndex }
) => {
  switch (type) {
    case ADD_TASK:
      return [...state, { id, text, isCompleted }];
    case REMOVE_TASK:
      return [...state].filter(task => task.id !== id);
    case COMPLETE_TASK:
      return [...state].map(task => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
    case UPDATE_TASK_TEXT:
      return [...state].map(task => {
        if (task.id === id) {
          task.text = text;
        }
        return task;
      });
    case MOVE_TASK: {
      const copyState = [...state];
      copyState.splice(toIndex, 0, copyState.splice(fromIndex, 1)[0]);
      return copyState;
    }
    default:
      return state;
  }
};

export default tasks;
