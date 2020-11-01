import React from 'react';
import { mount } from 'enzyme';
import Button, { prefix } from '../Button';

const mountComponent = (props) => mount(<Button {...props} />);
const findButton = (wrapper) => wrapper.find('button');

describe('Button component', () => {
  test('Passes different props which affect the class', () => {
    const props = {
      size: 'small',
      variant: 'primary',
      className: 'mock-class',
    };
    const wrapper = mountComponent(props);
    const button = findButton(wrapper);
    Object.entries(props).forEach(([key, value]) => {
      const searchedClass = key === 'className' ? value : `${prefix}--${value}`;
      expect(button.hasClass(searchedClass)).toBeTruthy();
    });
  });

  describe('Type prop', () => {
    test('By default', () => {
      const wrapper = mountComponent();
      expect(findButton(wrapper).prop('type')).toBe('button');
    });

    test('Explicitly passes prop', () => {
      const type = 'submit';
      const wrapper = mountComponent({ type });
      expect(findButton(wrapper).prop('type')).toBe(type);
    });
  });
});
