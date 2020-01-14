import { ADD_TASK, REMOVE_TASK } from 'constants/actionType';

const todos = (state = [], { type, id, text, isCompleted }) => {
  switch (type) {
    case ADD_TASK:
      return [...state, { id, text, isCompleted }];
    case REMOVE_TASK:
      return [...state].filter(todo => todo.id !== id);
    default:
      return state;
  }
};

export default todos;
