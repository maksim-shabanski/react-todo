import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTaskToStore }) => {
  const [todoText, setTodoText] = useState('');
  const todoInput = useRef();

  const addTodo = () => {
    if (todoText !== '') {
      const id = new Date().getTime();
      addTaskToStore(id, todoText, false);
      setTodoText('');
      todoInput.current.focus();
    }
  };

  const handleChangeInput = e => {
    setTodoText(e.target.value);
  };

  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      addTodo();
    }
  };

  return (
    <>
      <input
        ref={todoInput}
        type="text"
        value={todoText}
        placeholder="Todo name..."
        onChange={handleChangeInput}
        onKeyPress={handleKeyPress}
      />
      <button type="button" onClick={addTodo}>
        Add a todo
      </button>
    </>
  );
};

TodoForm.propTypes = {
  addTaskToStore: PropTypes.func.isRequired,
};

export default TodoForm;
