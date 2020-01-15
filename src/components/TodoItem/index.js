import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import CustomCheckbox from 'components/CustomCheckbox';
import './todo.scss';

const TodoItem = ({ id, text, isCompleted, completeTask, onRemoveTask }) => {
  return (
    <div className={isCompleted ? 'todo todo--completed' : 'todo'}>
      <div className="todo__toggle">
        <CustomCheckbox
          isChecked={isCompleted}
          onClick={() => completeTask(id)}
        />
      </div>
      <div className="todo__text">{text}</div>
      <div className="todo__actions">
        <Button variant="danger" size="small" onClick={() => onRemoveTask(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  completeTask: PropTypes.func.isRequired,
  onRemoveTask: PropTypes.func.isRequired,
};

export default TodoItem;
