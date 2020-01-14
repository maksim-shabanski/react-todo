import React from 'react';
import PropTypes from 'prop-types';

import TodoForm from 'components/TodoForm';
import TodoItem from 'components/TodoItem';
import './todos.scss';

const Todos = ({
  todos,
  addTaskToStore,
  removeTaskFromStore,
  completeTask,
}) => {
  const isTodosExist = todos && todos.length > 0;

  return (
    <div className="todos">
      <div className="todos__form">
        <TodoForm addTaskToStore={addTaskToStore} />
      </div>
      {isTodosExist && (
        <div className="todos__list">
          {todos.map(({ id, text, isCompleted }) => (
            <TodoItem
              key={id}
              id={id}
              text={text}
              isCompleted={isCompleted}
              completeTask={completeTask}
              onRemoveTask={removeTaskFromStore}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      isCompleted: PropTypes.bool,
    })
  ).isRequired,
  addTaskToStore: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  removeTaskFromStore: PropTypes.func.isRequired,
};

export default Todos;
