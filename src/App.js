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

class App extends Component {
  state = {
    search: '',
    searchQuery: '',
    movies: [],
    savedMovies: [],
  }

  getSavedMovies = () => {
    const savedMovies = localStorage.getItem('savedMovies') || '{}';
    const savedMoviesObj = (typeof savedMovies === 'string') ? JSON.parse(savedMovies) : {};
    const savedMoviesArr = (savedMoviesObj && Object.keys(savedMoviesObj).length)
      ? Object.keys(savedMoviesObj).map(key => savedMoviesObj[key]).filter(item => item.isSaved)
      : []

    // debugger;
    this.setState({ savedMovies: savedMoviesArr });
  }

  /**
   * Handle search input change
   * @param  {Object} ev input's change event
   * @return {Object}    updated state
   */
  handleSearchChange = ev => this.setState({ search: ev.target.value });

  /**
   * Handle search form submit
   * @param  {Object} ev form's submit event
   * @return {Object}    updated state
   */
  handleSearchSubmit = (ev) => {
    const { search } = this.state;
    const { history } = this.props;

    // prevent form's default submit
    ev.preventDefault();

    // push to root path
    history.push('/');

    // Update state
    this.setState({ searchQuery: search, loading: true }, () => {
      // search for movies with the query
      searchMovie(search).then(data => {
        const movies = Array.isArray(data.results) ? data.results : [];
        this.setState({ movies, loading: false });
      })
    });
  }

  /**
   * Close Modal
   * @param  {Object} ev Modal's close events
   */
  onCloseModal = (ev) => {
    const { history } = this.props;
    ev.stopPropagation();
    ev.nativeEvent.stopImmediatePropagation();
    history.push('/');
  }

  componentDidMount() {
    this.getSavedMovies();
    // test api
    // getMovie('tt3896198').then(data => {
    //   debugger;
    // })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     Array.isArray(prevProps.savedMovies)
  //     && Array.isArray(this.state.savedMovies)
  //     && this.state.savedMovies.length !== prevProps.savedMovies) {
  //     this.getSavedMovies();
  //   }
  // }

  render() {
    const {
      movies,
      savedMovies,
      search,
      searchQuery,
      loading,
    } = this.state;
    const { location } = this.props;
    const isMovieSingle = !searchQuery && location.pathname !== '/';

    return (
      <div className="app">
        <GlobalStyle />
        <Header>
          <Logo to="/">React Movies</Logo>
          <SearchForm
            submit={this.handleSearchSubmit}
            change={this.handleSearchChange}
            value={search}
          />
        </Header>

        {!isMovieSingle && (
          <Section className="movies-list">
            {loading && (<Loading />)}
            {movies.length ? (
              <CardList list={movies} />
            ) : (
              <span>{searchQuery.length ? (
                <span>No movies found for the term <b>{searchQuery}</b></span>
              ) : (
                <div>
                  {savedMovies && savedMovies.length ? (
                    <CardList list={savedMovies} />
                  ) : (
                    <span>Search for a movie</span>
                  )}
                </div>

              )}</span>
            )}
          </Section>
        )}

        <Route path="/movie/:id" render={props => {
          return (searchQuery) ? (
            <Modal closeModal={this.onCloseModal}>
              <Movie />
            </Modal>
          ) : (
            <Section className="movie-details">
              <Movie />
            </Section>
          )}}
        />

      </div>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #fafafa;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }
  section {
    padding: 30px;
  }
  p {
    margin-bottom: 15px;
  }
  img {
    max-width: 100%;
    display: block;
  }
  h1, h3, h3 {
    margin-bottom: 15px;
  }
`
const Header = styled.header`
  align-items: center;
  background-color: #ededed;
  display: flex;
  height: 60px;
  padding: 15px 30px;
`
const Logo = styled(Link)`
  margin-right: 15px;
`
const Section = styled.section`
  padding: 30px;
`

export default withRouter(App);
