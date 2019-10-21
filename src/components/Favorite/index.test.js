import React from 'react';
import { shallow } from 'enzyme';
import CardList from './';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CardList />);
})

describe('#render', () => {
  it('renders a <div> tag for cards list', () => {
    expect(wrapper.find('.cards-list').length).toBe(1);
  });

  it('should renders no card items if no props was passed', () => {
    expect(wrapper.find('.cards-item').length).toBe(0);
  });

  it('should renders 10 card items', () => {
    wrapper.setProps({ list: new Array(10).fill({}) });
    expect(wrapper.find('.cards-item').length).toBe(10);
  });
});
