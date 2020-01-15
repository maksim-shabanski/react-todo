import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
        <svg className={`${prefix}__icon`} viewBox="0 0 20 20">
          <polygon points="0 11 2 9 7 14 18 3 20 5 7 18" />
        </svg>
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
