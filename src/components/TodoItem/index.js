import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import CustomCheckbox from 'components/CustomCheckbox';
import TodoText from 'components/TodoText';
import './todo.scss';

const TodoItem = ({
  id,
  text,
  isCompleted,
  completeTask,
  onRemoveTask,
  updateTaskText,
}) => {
  return (
    <div className={isCompleted ? 'todo todo--completed' : 'todo'}>
      <div className="todo__toggle">
        <CustomCheckbox
          isChecked={isCompleted}
          onClick={() => completeTask(id)}
        />
      </div>
      <TodoText id={id} text={text} updateTaskText={updateTaskText} />
      <Button onClick={() => onRemoveTask(id)}>
        <svg className="todo__close" viewBox="0 0 20 20">
          <polygon points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644" />
        </svg>
      </Button>
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  completeTask: PropTypes.func.isRequired,
  onRemoveTask: PropTypes.func.isRequired,
  updateTaskText: PropTypes.func.isRequired,
};

export default TodoItem;
