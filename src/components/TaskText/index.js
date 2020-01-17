import React from 'react';
import PropTypes from 'prop-types';

const TaskText = ({ id, text, updateTaskText, isCompleted }) => {
  const canEditTaskText = !isCompleted;

  const handleLostFocus = ({ target }) => {
    const updatedText = target.innerText.trim();

    if (updatedText && updatedText !== text) {
      updateTaskText(id, updatedText);
    } else {
      target.innerText = text;
    }
  };

  const handleKeyPress = ({ target, key }) => {
    if (key === 'Enter') {
      target.blur();
    }
  };

  return (
    <div
      className="task__text"
      role="textbox"
      tabIndex="0"
      onBlur={handleLostFocus}
      onKeyPress={handleKeyPress}
      contentEditable={canEditTaskText}
      suppressContentEditableWarning
    >
      {text}
    </div>
  );
};

TaskText.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  updateTaskText: PropTypes.func.isRequired,
};

export default TaskText;
