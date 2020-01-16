import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import CustomCheckbox from 'components/CustomCheckbox';
import TaskText from 'components/TaskText';
import './task.scss';

const Task = ({
  id,
  text,
  isCompleted,
  completeTask,
  removeTask,
  updateTaskText,
}) => {
  const prefix = 'task';

  return (
    <div
      className={isCompleted ? `${prefix} ${prefix}--completed` : `${prefix}`}
    >
      <div className={`${prefix}__checkbox`}>
        <CustomCheckbox
          isChecked={isCompleted}
          onClick={() => completeTask(id)}
        />
      </div>
      <TaskText
        id={id}
        text={text}
        updateTaskText={updateTaskText}
        isCompleted={isCompleted}
      />
      <Button onClick={() => removeTask(id)}>
        <svg className={`${prefix}__close`} viewBox="0 0 20 20">
          <polygon points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644" />
        </svg>
      </Button>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  completeTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  updateTaskText: PropTypes.func.isRequired,
};

export default Task;
