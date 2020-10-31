import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Draggable } from 'react-beautiful-dnd';
import { DragHandleDots2Icon, Cross2Icon } from '@modulz/radix-icons';

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
              <DragHandleDots2Icon
                className={`${prefix}__dots-icon`}
                width="18"
                height="18"
                color="#babfc2"
              />
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
              <Cross2Icon className={`${prefix}__close-icon`} color="#babfc2" />
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
