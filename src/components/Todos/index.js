import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';

import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';
import './todos.scss';

const Todos = ({
  tasks,
  addTask,
  removeTask,
  completeTask,
  updateTaskText,
  moveTask,
}) => {
  const isTodosExist = tasks && tasks.length > 0;

  const handleDragEnd = ({ source, destination }) => {
    if (destination) {
      const { index: fromIndex } = source;
      const { index: toIndex } = destination;
      moveTask(fromIndex, toIndex);
    }
  };

  return (
    <div className="todos">
      <div className="todos__form">
        <TodoForm addTask={addTask} />
      </div>
      {isTodosExist && (
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            tasks={tasks}
            removeTask={removeTask}
            completeTask={completeTask}
            updateTaskText={updateTaskText}
          />
        </DragDropContext>
      )}
    </div>
  );
};

Todos.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  addTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  updateTaskText: PropTypes.func.isRequired,
  moveTask: PropTypes.func.isRequired,
};

export default Todos;
