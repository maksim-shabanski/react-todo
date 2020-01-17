import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Draggable } from 'react-beautiful-dnd';

import Button from 'components/Button';
import CustomCheckbox from 'components/CustomCheckbox';
import TaskText from 'components/TaskText';
import './task.scss';

const Task = ({
  id,
  dragIndex,
  text,
  isCompleted,
  completeTask,
  removeTask,
  updateTaskText,
}) => {
  const prefix = 'task';
  const blockClasses = classNames(
    prefix,
    isCompleted && `${prefix}--completed`
  );

  return (
    <Draggable draggableId={`draggable-${id}`} index={dragIndex}>
      {provided => (
        <div
          className={blockClasses}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className={`${prefix}__move`}>
            <div {...provided.dragHandleProps}>
              {/* TODO: combine two icon into one */}
              <svg className={`${prefix}__dots-icon`} viewBox="0 0 20 20">
                <path d="M10,12 C11.1045695,12 12,11.1045695 12,10 C12,8.8954305 11.1045695,8 10,8 C8.8954305,8 8,8.8954305 8,10 C8,11.1045695 8.8954305,12 10,12 Z M10,6 C11.1045695,6 12,5.1045695 12,4 C12,2.8954305 11.1045695,2 10,2 C8.8954305,2 8,2.8954305 8,4 C8,5.1045695 8.8954305,6 10,6 Z M10,18 C11.1045695,18 12,17.1045695 12,16 C12,14.8954305 11.1045695,14 10,14 C8.8954305,14 8,14.8954305 8,16 C8,17.1045695 8.8954305,18 10,18 Z" />
              </svg>
              <svg className={`${prefix}__dots-icon`} viewBox="0 0 20 20">
                <path d="M10,12 C11.1045695,12 12,11.1045695 12,10 C12,8.8954305 11.1045695,8 10,8 C8.8954305,8 8,8.8954305 8,10 C8,11.1045695 8.8954305,12 10,12 Z M10,6 C11.1045695,6 12,5.1045695 12,4 C12,2.8954305 11.1045695,2 10,2 C8.8954305,2 8,2.8954305 8,4 C8,5.1045695 8.8954305,6 10,6 Z M10,18 C11.1045695,18 12,17.1045695 12,16 C12,14.8954305 11.1045695,14 10,14 C8.8954305,14 8,14.8954305 8,16 C8,17.1045695 8.8954305,18 10,18 Z" />
              </svg>
              {/* End TODO */}
            </div>
          </div>
          <div className={`${prefix}__toggle`}>
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
          <div className={`${prefix}__actions`}>
            <Button onClick={() => removeTask(id)}>
              <svg className={`${prefix}__close-icon`} viewBox="0 0 20 20">
                <polygon points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644" />
              </svg>
            </Button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  dragIndex: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  updateTaskText: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default Task;
