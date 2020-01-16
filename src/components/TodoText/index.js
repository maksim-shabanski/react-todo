import React from 'react';
import PropTypes from 'prop-types';

const TodoText = ({ id, text, updateTaskText }) => {
  const handleFocusLost = ({ target }) => {
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
      className="todo__text"
      role="textbox"
      tabIndex="0"
      onBlur={handleFocusLost}
      onKeyPress={handleKeyPress}
      contentEditable
      suppressContentEditableWarning
    >
      {text}
    </div>
  );
};

TodoText.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  updateTaskText: PropTypes.func.isRequired,
};

export default TodoText;
