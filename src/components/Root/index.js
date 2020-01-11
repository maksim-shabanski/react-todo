import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Root = ({ onAppInit }) => {
  useEffect(() => {
    onAppInit();
  }, []); // eslint-disable-line

  return <h1>Todo application</h1>;
};

Root.propTypes = {
  onAppInit: PropTypes.func.isRequired,
};

export default Root;
