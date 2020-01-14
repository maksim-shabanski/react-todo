import React from 'react';
import { connect } from 'react-redux';

import { addTask, removeTask } from 'actions/actionCreators';
import Todos from 'components/Todos';

const TodoContainer = props => <Todos {...props} />;

const mapStateToProps = ({ todos }) => ({
  todos,
});

const mapDispatchToProps = dispatch => ({
  addTaskToStore: (id, text, isCompleted) =>
    dispatch(addTask(id, text, isCompleted)),
  removeTaskFromStore: id => dispatch(removeTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
