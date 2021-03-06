import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import styled, { createGlobalStyle } from 'styled-components';
import { connect } from 'react-redux';
import { fetchFavorites } from './redux/actions.js';
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

  /**
   * Fetch Movies from localStorage and set to savedMovies state
   */
  fetchSavedMovies = () => {
    const { favorites } = this.props;
    const savedMovies = (favorites && Object.keys(favorites).length)
      ? Object.keys(favorites).map(key => favorites[key]).filter(item => item.isSaved)
      : []

    this.setState({ savedMovies: savedMovies });
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
    this.props.getFavorites(this.fetchSavedMovies);
    // test api
    // getMovie('tt3896198').then(data => {
    //   debugger;
    // })
  }

  componentDidUpdate(prevProps) {
    const favorites = JSON.stringify(this.props.favorites);
    const prevFavorites = JSON.stringify(prevProps.favorites);
    if (favorites !== prevFavorites) {
      this.fetchSavedMovies();
    }
  }

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

const mapStateToProps = ({ favorites }) => {
  return { favorites }
};

const mapDispatchToProps = dispatch => {
  return {
    getFavorites: () => dispatch(fetchFavorites()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
