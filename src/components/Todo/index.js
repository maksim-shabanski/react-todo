import React from 'react';

import Task from 'components/Task';
import './todo.scss';

const tasks = [
  {
    id: 1,
    title: 'Task 1',
    isComplete: true,
  },
  {
    id: 2,
    title: 'Task 2',
    isComplete: false,
  },
];

const Todo = () => (
  <div className="todo">
    <div className="todo__form">
      <input className="todo__input" type="text" placeholder="New task..." />
      <button type="button">Add a task</button>
    </div>
    <div className="todo__tasks">
      {tasks.map(({ id, title, isComplete }) => (
        <Task key={id} title={title} isComplete={isComplete} />
      ))}
    </div>
  </div>
);

export default Todo;
