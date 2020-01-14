import React from 'react';
import PropTypes from 'prop-types';

import './todo.scss';

const TodoItem = ({ id, text, isCompleted, completeTask, onRemoveTask }) => {
  return (
    <div className={isCompleted ? 'todo todo--completed' : 'todo'}>
      <div className="todo__toggle">
        <input
          type="checkbox"
          value={text}
          checked={isCompleted}
          onChange={() => completeTask(id)}
        />
      </div>
      <div className="todo__text">{text}</div>
      <div className="todo__actions">
        <button type="button" onClick={() => onRemoveTask(id)}>
          Delete
        </button>
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
