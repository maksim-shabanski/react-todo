import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from 'constants/actionType';

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
    default:
      return state;
  }
};

export default todos;
