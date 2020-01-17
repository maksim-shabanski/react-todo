import React from 'react';
import { connect } from 'react-redux';

import {
  addTask,
  removeTask,
  completeTask,
  updateTaskText,
  moveTask,
} from 'actions/actionCreators';
import Todos from 'components/Todos';

const TodoContainer = props => <Todos {...props} />;

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

const mapDispatchToProps = dispatch => ({
  addTask: (id, text, isCompleted) => dispatch(addTask(id, text, isCompleted)),
  removeTask: id => dispatch(removeTask(id)),
  completeTask: id => dispatch(completeTask(id)),
  updateTaskText: (id, text) => dispatch(updateTaskText(id, text)),
  moveTask: (fromIndex, toIndex) => dispatch(moveTask(fromIndex, toIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
