import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  UPDATE_TASK_TEXT,
} from 'constants/actionType';

const todos = (state = [], { type, id, text, isCompleted }) => {
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
    default:
      return state;
  }
};

export default todos;
