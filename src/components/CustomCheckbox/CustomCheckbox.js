import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CheckIcon } from '@modulz/radix-icons';

import './checkbox.scss';

export const prefix = 'checkbox';

const CustomCheckbox = ({ className, isChecked, onClick }) => {
  const classes = classNames(
    className,
    prefix,
    isChecked && `${prefix}--selected`
  );

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div
      className={classes}
      role="checkbox"
      aria-checked={isChecked}
      tabIndex="0"
      onClick={onClick}
      onKeyPress={handleKeyPress}
    >
      <div className={`${prefix}__input`}>
        <CheckIcon width="16" height="16" color="#fff" />
      </div>
    </div>
  );
};

CustomCheckbox.propTypes = {
  className: PropTypes.string,
  isChecked: PropTypes.bool,
  onClick: PropTypes.func,
};

CustomCheckbox.defaultProps = {
  className: '',
  isChecked: false,
  onClick: () => {},
};

export default CustomCheckbox;
