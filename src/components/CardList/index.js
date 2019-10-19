import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardList = props => {
  const { list } = props;
  return (
    <div className="cards-list">
      {list && list.map((movie, idx) => (
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
  )
}

export default CardList;
