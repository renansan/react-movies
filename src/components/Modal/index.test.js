import React from 'react';
import { shallow } from 'enzyme';
import Modal, { CloseButton } from './';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Modal.WrappedComponent />);
})

describe('#render', () => {
  it('renders a <button> tag', () => {
    const button = wrapper.find(CloseButton);
    expect(button.length).toBe(1);
  });

  it('renders children', () => {
    const test = <span>Teste</span>;
    wrapper.setProps({ children: test });
    expect(wrapper.contains(test)).toEqual(true);
  });
});

it('run closeModal when the button is clicked', () => {
  const mockcloseModal = jest.fn();
  wrapper.setProps({ closeModal: mockcloseModal });
  wrapper.find(CloseButton).simulate('click');
  expect(mockcloseModal).toBeCalled();
});
