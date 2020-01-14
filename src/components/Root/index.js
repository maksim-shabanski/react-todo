import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import TodosContainer from 'containers/TodosContainer';
import './root.scss';

const Root = ({ onAppInit }) => {
  useEffect(() => {
    onAppInit();
  }, []); // eslint-disable-line

  return (
    <main>
      <h1>Todo list</h1>
      <TodosContainer />
    </main>
  );
};

Root.propTypes = {
  onAppInit: PropTypes.func.isRequired,
};

export default Root;
