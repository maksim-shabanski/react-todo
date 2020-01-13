import React from 'react';
import PropTypes from 'prop-types';

import './task.scss';

const Task = ({ title, isComplete }) => (
  <div className="task">
    <div className="task__toggle">
      <input type="radio" checked={isComplete} />
    </div>
    <div className="task__title" contentEditable>
      {title}
    </div>
    <div className="task__actions">
      <button type="button">Delete</button>
    </div>
  </div>
);

Task.propTypes = {
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;
