import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button.scss';

const Button = ({ children, className, variant, size, onClick }) => {
  const prefix = 'btn';
  const classes = classNames(
    className,
    prefix,
    variant && `${prefix}--${variant}`,
    size && `${prefix}--${size}`
  );

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: '',
  className: '',
  variant: '',
  size: '',
  onClick: () => { }, // eslint-disable-line
};

export default Button;
