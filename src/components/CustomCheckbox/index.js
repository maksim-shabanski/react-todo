import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CheckIcon } from '@modulz/radix-icons';

import './checkbox.scss';

const CustomCheckbox = ({ className, isChecked, onClick }) => {
  const prefix = 'checkbox';
  const parentClasses = classNames(
    className,
    prefix,
    isChecked && `${prefix}--selected`
  );

  return (
    <div
      className={parentClasses}
      role="checkbox"
      aria-checked={isChecked}
      tabIndex="0"
      onClick={onClick}
      onKeyPress={onClick}
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
  onClick: () => { }, // eslint-disable-line
};

export default CustomCheckbox;
