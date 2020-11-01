import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button.scss';

export const prefix = 'btn';

const Button = ({ children, className, variant, size, type, ...rest }) => {
  const classes = classNames(
    className,
    prefix,
    variant && `${prefix}--${variant}`,
    size && `${prefix}--${size}`
  );

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  children: '',
  className: '',
  variant: '',
  size: '',
  type: 'button',
};

export default Button;
