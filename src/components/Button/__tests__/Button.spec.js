import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';

describe('Button component', () => {
  it('Should output a button', () => {
    expect(shallow(<Button>Button</Button>).find('button')).toHaveLength(1);
  });

  it('Should have block class', () => {
    expect(
      shallow(<Button>Button</Button>)
        .find('button')
        .hasClass('btn')
    ).toBe(true);
  });

  it('Should apply size class', () => {
    expect(
      shallow(<Button size="small">Button</Button>)
        .find('button')
        .hasClass('btn--small')
    ).toBe(true);
  });

  it('Should apply variant class', () => {
    expect(
      shallow(<Button variant="primary">Button</Button>)
        .find('button')
        .hasClass('btn--primary')
    ).toBe(true);
  });

  it('Should call onClick callback', () => {
    const mockHandleClick = jest.fn();
    const wrapper = shallow(
      <Button onClick={() => mockHandleClick()}>Button</Button>
    );
    wrapper.find('button').simulate('click');
    expect(mockHandleClick.mock.calls).toHaveLength(1);
  });
});
