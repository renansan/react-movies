import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { getMovie } from '../../api';

class Movie extends Component {
  state = {
    movie: {},
  }

  fetchMovie = () => {
    const { history, match } = this.props;
    const { movie } = this.state;
    const movieId = match && match.params && match.params.id;

    if (movieId && movie && movie.imdbID === movieId) return;

    if (!movieId) return;

    getMovie(movieId).then(movie => {
      if (movie.Response === 'False') {
        history.push({
          pathname: '/',
          state: {
            error: movie.Error,
          },
        })
      } else {
        this.setState({ movie });
      }
    })
  }

  componentDidMount() {
    this.fetchMovie();
  }

  componentDidUpdate() {
    this.fetchMovie();
  }

  render() {
    const { movie } = this.state;
    const asideMovieData = [
      "Genre",
      "Runtime",
      "Year",
      "Released",
      "Rated",
      "imdbRating",
      "Language",
      "Country",
      "Website",
    ];
    const contentMovieData = [
      "Writer",
      "Actors",
      "Director",
      "Production",
    ];

    return Object.keys(movie).length ? (
      <Post>
        <Article>
          <Title>{movie.Title}</Title>
          <Paragraph>{movie.Plot}</Paragraph>

          {contentMovieData.length && movie && contentMovieData.map((term, idx) => {
            return movie[term] ? (
              <div key={`content-post-data-${movie.imdbID}-${idx}`}>
                <Title2>{term}</Title2>
                <Paragraph>{movie[term]}</Paragraph>
              </div>
            ) : ''
          })}

        </Article>
        <Aside>
          <Figure>
            <img src={movie.Poster} alt=""/>
          </Figure>

          {asideMovieData.length && movie ? (
            <Metadata>
              {asideMovieData.map((term, idx) => {
                return movie[term] ? (
                  <MetadataItem key={`aside-post-data-${movie.imdbID}-${idx}`}>
                    <MetadataTitle>{term}</MetadataTitle>
                    <MetadataDescription>{movie[term]}</MetadataDescription>
                  </MetadataItem>
                ) : ''
              })}
            </Metadata>
          ) : (
            <span>no movie</span>
          )}
        </Aside>
      </Post>
    ) : (
      <span>No movie data</span>
    )
  }
}

export const Post = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  padding: 30px 0;
`
const Metadata = styled.dl`
  margin-bottom: 15px;
`
const MetadataItem = styled.div`
  margin-bottom: 15px;
`
const MetadataTitle = styled.dt`
  display: block;
  font-weight: 500;
`
const MetadataDescription = styled.dd`
  margin-bottom: 15px;
`
const Article = styled.article`
  padding: 15px;
  flex: 1 1 auto;
`
const Aside = styled.article`
  flex: 1 0 auto;
  max-width: 360px;
  order: -1;
  padding: 15px;
  width: 100%;
`
const Figure = styled.article`
  margin-bottom: 15px;
`
export const Title = styled.h1`
  font-size: 32px;
`
const Title2 = styled.h2`
  font-size: 24px;
`
export const Paragraph = styled.p`
  margin-bottom: 15px;
`

export default withRouter(Movie);
