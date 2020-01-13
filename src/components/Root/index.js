import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Todo from 'components/Todo';
import './root.scss';

const Root = ({ onAppInit }) => {
  useEffect(() => {
    onAppInit();
  }, []); // eslint-disable-line

  return (
    <main>
      <h1>Todo list</h1>
      <Todo />
    </main>
  );
};

Root.propTypes = {
  onAppInit: PropTypes.func.isRequired,
};

export default Root;
