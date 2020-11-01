import React from 'react';
import { mount } from 'enzyme';
import CustomCheckbox, { prefix } from '../CustomCheckbox';

const mountComponent = (props) => mount(<CustomCheckbox {...props} />);
const findCheckbox = (wrapper) => wrapper.find('[role="checkbox"]');

describe('CustomCheckbox component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Passes className prop', () => {
    const mockClass = 'mock-class';
    const wrapper = mountComponent({ className: mockClass });
    expect(findCheckbox(wrapper).hasClass(mockClass)).toBeTruthy();
  });

  describe('Passes isChecked prop', () => {
    const selectedClass = `${prefix}--selected`;
    const areaCheckedAttr = 'aria-checked';

    test('with "false" value by default', () => {
      const wrapper = mountComponent();
      const checkbox = findCheckbox(wrapper);
      expect(checkbox.hasClass(selectedClass)).toBeFalsy();
      expect(checkbox.prop(areaCheckedAttr)).toBeFalsy();
    });

    test('with "true" value', () => {
      const wrapper = mountComponent({ isChecked: true });
      const checkbox = findCheckbox(wrapper);
      expect(checkbox.hasClass(selectedClass)).toBeTruthy();
      expect(checkbox.prop(areaCheckedAttr)).toBeTruthy();
    });
  });

  describe('Passes onClick prop', () => {
    const mockFn = jest.fn();
    let wrapper;
    let checkbox;

    beforeEach(() => {
      wrapper = mountComponent({ onClick: mockFn });
      checkbox = findCheckbox(wrapper);
    });

    test('Simulate click', () => {
      checkbox.simulate('click');
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test('Simulate press on "Enter" key', () => {
      checkbox.simulate('keypress', { key: 'Enter' });
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test('Simulate press on other key', () => {
      checkbox.simulate('keypress', { key: 'Shift' });
      expect(mockFn).not.toHaveBeenCalled();
    });
  });
});
