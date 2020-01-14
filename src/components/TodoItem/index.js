import React from 'react';
import PropTypes from 'prop-types';

import './todo.scss';

const TodoItem = ({ id, text, isCompleted, onRemoveTask }) => {
  return (
    <div className="todo">
      <div className="todo__toggle">
        <input type="radio" checked={isCompleted} />
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
  onRemoveTask: PropTypes.func.isRequired,
};

export default TodoItem;
