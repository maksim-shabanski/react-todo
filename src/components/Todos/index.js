import React from 'react';
import PropTypes from 'prop-types';

import TodoForm from 'components/TodoForm';
import Task from 'components/Task';
import './todos.scss';

const Todos = ({
  tasks,
  addTask,
  removeTask,
  completeTask,
  updateTaskText,
}) => {
  const isTodosExist = tasks && tasks.length > 0;

  return (
    <div className="todos">
      <div className="todos__form">
        <TodoForm addTask={addTask} />
      </div>
      {isTodosExist && (
        <div className="todos__list">
          {tasks.map(({ id, text, isCompleted }) => (
            <Task
              key={id}
              id={id}
              text={text}
              isCompleted={isCompleted}
              completeTask={completeTask}
              removeTask={removeTask}
              updateTaskText={updateTaskText}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Todos.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      isCompleted: PropTypes.bool,
    })
  ).isRequired,
  addTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  updateTaskText: PropTypes.func.isRequired,
};

export default Todos;
