import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SearchForm />);
})

describe('#render', () => {
  it('renders <form> tag', () => {
    expect(wrapper.find('form').length).toBe(1);
  });
  it('renders an <input> and a <button>', () => {
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  });
});

describe('#props', () => {
  it('run the submit prop function on form\'s submit', () => {
    const mockSubmit = jest.fn();
    wrapper.setProps({ submit: mockSubmit });
    wrapper.find('form').simulate('submit');
    expect(mockSubmit).toBeCalled();
  });
  it('run the change prop function on input\'s change', () => {
    const mockChange = jest.fn();
    wrapper.setProps({ change: mockChange });
    wrapper.find('input').simulate('change');
    expect(mockChange).toBeCalled();
  });
  it('set the value prop to input', () => {
    wrapper.setProps({ value: 'lorem' });
    expect(wrapper.find('input').props().value).toEqual('lorem');
  });
});
