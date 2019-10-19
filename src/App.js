import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import styled, { createGlobalStyle } from 'styled-components';
import { searchMovie } from './api';
import Modal from './components/Modal';
import Loading from './components/Loading';
import Movie from './components/Movie';
import SearchForm from './components/SearchForm';
import CardList from './components/CardList';
import './App.css';

class App extends Component {
  state = {
    search: '',
    searchQuery: '',
    movies: [],
  }

  /**
   * [handleSearchChange description]
   * @param  {Object} ev input's change event
   * @return {Object}    updated state
   */
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
        <GlobalStyle />
        <header className="header">
          <Link to="/" className="logo">React Movies</Link>
          <SearchForm
            submit={this.handleSearchSubmit}
            change={this.handleSearchChange}
            value={search}
          />
        </header>

        {!isMovieSingle && (
          <section className="movies-list">
            {loading && (<Loading />)}
            {movies.length ? (
              <CardList list={movies} />
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

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }
`
const Section = styled.section``
const Header = styled.header``
const MovieList = styled.div``
const Search = styled.form``


export default withRouter(App);
