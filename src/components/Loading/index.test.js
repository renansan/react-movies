import React from 'react';
import { shallow } from 'enzyme';
import Loading from './';

it('renders a <svg> tag', () => {
  const wrapper = shallow(<Loading />);
  expect(wrapper.find('svg').length).toBe(1);
});
