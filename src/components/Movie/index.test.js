import React from 'react';
import { shallow } from 'enzyme';
import Movie, { Post, Title, Paragraph } from './';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Movie.WrappedComponent />);
})

describe('#render', () => {
  it('renders "No movie data" if no movie was found on API', () => {
    expect(wrapper.contains('No movie data')).toEqual(true);
  });

  it('renders <Post> if movie state object\'s not empty', () => {
    wrapper.setState({ movie: { key: 'value' }})
    expect(wrapper.find(Post).length).toBe(1);
  });

  it('renders correct values for <Title> and <Paragraph> from movie state object', () => {
    const movie = {
      Title: 'Movie Title',
      Plot: 'Lorem ipsum dolor sit amet...',
    };
    wrapper.setState({ movie })
    expect(wrapper.find(Title).length).toBe(1);
    expect(wrapper.find(Paragraph).length).toBe(1);
    expect(wrapper.find(Title).contains(movie.Title)).toEqual(true);
    expect(wrapper.find(Paragraph).contains(movie.Plot)).toEqual(true);
  });
});
