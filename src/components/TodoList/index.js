import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import Task from 'components/Task';

const TodoList = ({ tasks, completeTask, removeTask, updateTaskText }) => {
  return (
    <div className="todos__list">
      <Droppable droppableId="droppable">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map(({ id, text, isCompleted }, index) => (
              <Task
                key={id}
                id={id}
                dragIndex={index}
                text={text}
                isCompleted={isCompleted}
                completeTask={completeTask}
                removeTask={removeTask}
                updateTaskText={updateTaskText}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      isCompleted: PropTypes.bool,
    })
  ).isRequired,
  completeTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  updateTaskText: PropTypes.func.isRequired,
};

export default TodoList;
