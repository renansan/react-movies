import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateFavorite } from '../../redux/actions.js';
import styled from 'styled-components';

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state.movie = props.movie || {};
    this.state.isSaved = !!(props.movie && props.movie.isSaved) || false;
  }

  state = {
    isSaved: false,
    savedMovies: {},
  }

  /**
   * Update movie on storage.
   */
  updateMovieData = () => {
    const { isSaved } = this.state;
    const { movie } = this.props;
    const movieId = movie.imdbID;
    if (typeof movieId === 'string') {
      this.props.updateFavorites({
        movieId,
        isSaved,
        movieData: movie,
      }, (data) => {});
    }
  }

  /**
   * Set initial state of movie's isSaved from storage
   */
  setInitialState = () => {
    const { movie, favorites } = this.props;
    const movieId = movie.imdbID;
    this.setState({ isSaved: favorites[movieId] && favorites[movieId].isSaved });
  }

  /**
   * Handle clicks on favorite button
   * @param  {Object} ev button's click event
   */
  handleFavoriteChange = (ev) => {
    this.setState((prevState => {
      return {
        ...prevState,
        isSaved: !prevState.isSaved
      }
    }), () => {
      this.updateMovieData();
    });
  }

  componentDidMount() {
    this.setInitialState();
  }

  render() {
    const { isSaved } = this.state;
    const StarIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 501.28 501.28">
        <g xmlns="http://www.w3.org/2000/svg">
          <Polygon1 points="501.28,194.37 335.26,159.33 250.64,12.27 250.64,419.77 405.54,489.01 387.56,320.29  "/>
          <Polygon2 points="166.02,159.33 0,194.37 113.72,320.29 95.74,489.01 250.64,419.77 250.64,12.27  "/>
        </g>
      </svg>
    )
    const StarOutIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 482.207 482.207">
        <path d="M482.207,186.973l-159.699-33.705L241.104,11.803l-81.404,141.465L0,186.973l109.388,121.134L92.094,470.404l149.01-66.6  l149.01,66.6l-17.294-162.296L482.207,186.973z M241.104,370.943l-113.654,50.798l13.191-123.788l-83.433-92.393l121.807-25.707  l62.09-107.9l62.09,107.9L425,205.561l-83.433,92.393l13.191,123.788L241.104,370.943z"/>
      </svg>
    );

    return (
      <FavoriteButton type="button" onClick={this.handleFavoriteChange}>
        {isSaved ? (<StarIcon />) : (<StarOutIcon />)}
      </FavoriteButton>
    )
  }
}

const FavoriteButton = styled.button`
  background: white;
  border-radius: 5px;
  border: 0;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,.4);
  display: block;
  height: 30px;
  padding: 5px;
  width: 30px;

  & > svg {
    width: 20px;
    height: 20px;
  }
`
const Polygon1 = styled.polygon`
  fill: #ffca29;
`;
const Polygon2 = styled.polygon`
  fill: #ffc107;
`;

Favorite.propTypes = {
  movie: PropTypes.object.isRequired,
}

const mapStateToProps = ({ favorites }) => {
  return { favorites }
};

const mapDispatchToProps = dispatch => {
  return {
    updateFavorites: (data, cb) => dispatch(updateFavorite(data, cb)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
