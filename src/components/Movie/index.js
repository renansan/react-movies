import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { getMovie } from '../../api';

class Movie extends Component {
  state = {
    movie: {},
  }

  componentDidMount() {
    const { history, match } = this.props;
    const movieId = match.params.id;

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
      <div className="post-content">
        <article className="post-article">
          <h1>{movie.Title}</h1>
          <p>{movie.Plot}</p>

          {contentMovieData.length && movie && contentMovieData.map((term, idx) => {
            return movie[term] ? (
              <div key={`content-post-data-${movie.imdbID}-${idx}`}>
                <h2>{term}</h2>
                <p>{movie[term]}</p>
              </div>
            ) : ''
          })}

        </article>
        <aside className="post-aside">
          <figure className="post-image">
            <img src={movie.Poster} alt=""/>
          </figure>

          {asideMovieData.length && movie ? (
            <dl className="post-data">
              {asideMovieData.map((term, idx) => {
                return movie[term] ? (
                  <div className="post-data-item" key={`aside-post-data-${movie.imdbID}-${idx}`}>
                    <dt className="post-data-title">{term}</dt>
                    <dd className="post-data-description">{movie[term]}</dd>
                  </div>
                ) : ''
              })}
            </dl>
          ) : (
            <span>no movie</span>
          )}
        </aside>
      </div>
    ) : (
      <span>No movie data</span>
    )
  }
}

export default withRouter(Movie);
