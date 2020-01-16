import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

const TodoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');
  const input = useRef();

  const handleSubmitTask = () => {
    if (taskText !== '') {
      const id = new Date().getTime();
      addTask(id, taskText, false);
      setTaskText('');
      input.current.focus();
    }
  };

  const handleChangeInput = e => {
    setTaskText(e.target.value);
  };

  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      handleSubmitTask();
    }
  };

  return (
    <>
      <input
        ref={input}
        type="text"
        value={taskText}
        placeholder="What are you need to do?"
        onChange={handleChangeInput}
        onKeyPress={handleKeyPress}
      />
      <Button onClick={handleSubmitTask} variant="primary-outline">
        Add task
      </Button>
    </>
  );
};

TodoForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TodoForm;
