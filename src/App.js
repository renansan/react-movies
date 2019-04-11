import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { searchMovie } from './api';
import Modal from './components/Modal';
import Loading from './components/Loading';
import Movie from './components/Movie';
import './App.css';

class App extends Component {
  state = {
    search: '',
    searchQuery: '',
    movies: [],
  }

  handleSearchChange = ev => this.setState({ search: ev.target.value });

  handleSearchSubmit = (ev) => {
    const { search } = this.state;
    const { history } = this.props;

    ev.preventDefault();

    history.push('/');

    this.setState({ searchQuery: search, loading: true }, () => {
      searchMovie(search).then(data => {
        const movies = Array.isArray(data.results) ? data.results : [];
        this.setState({ movies, loading: false });
      })
    });
  }

  componentDidMount() {
    // test api
    // getMovie('tt3896198').then(data => {
    //   debugger;
    // })
  }

  render() {
    const {
      movies,
      search,
      searchQuery,
      loading,
    } = this.state;
    const { location } = this.props;
    const isMovieSingle = !searchQuery && location.pathname !== '/';

    return (
      <div className="app">
        <header className="header">
          <Link to="/" className="logo">React Movies</Link>
          <form className="search-form" onSubmit={this.handleSearchSubmit}>
            <input
              className="search-input"
              type="search"
              onChange={this.handleSearchChange}
              placeholder="type some movie title"
              value={search}
            />
          <button className="btn search-submit">Search</button>
          </form>
        </header>

        {!isMovieSingle && (
          <section className="movies-list">
            {loading && (<Loading />)}
            {movies.length ? (
              <div className="cards-list">
                {movies.map((movie, idx) => (
                  <div key={`movie-item-${movie.imdbID}-${idx}`} className="cards-item">
                    <article className="card">
                      <figure className="card-image">
                        <img src={movie.Poster} alt=""/>
                      </figure>
                      <h2 className="card-title">{movie.Title}</h2>
                      <div className="card-metadata">
                        <b>Year:</b> {movie.Year}
                      </div>
                      <div className="card-description"></div>
                      <Link to={`/movie/${movie.imdbID}`} className="btn card-button">See details</Link>
                    </article>
                  </div>
                ))}
              </div>
            ) : (
              <span>{searchQuery.length ? (
                <span>No movies found for the term <b>{searchQuery}</b></span>
              ) : (
                <span>Search for a movie</span>
              )}</span>
            )}
          </section>
        )}

        <Route path="/movie/:id" render={props => {
          return (searchQuery) ? (
            <Modal>
              <Movie />
            </Modal>
          ) : (
            <section className="movie-details">
              <Movie />
            </section>
          )}}
        />

      </div>
    );
  }
}

export default withRouter(App);
