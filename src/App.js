import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    movies: [
      {
        Title: "Guardians of the Galaxy Vol. 2",
        Year: "2017",
        Rated: "PG-13",
        Released: "05 May 2017",
        Runtime: "136 min",
        Genre: "Action, Adventure, Comedy, Sci-Fi",
        Director: "James Gunn",
        Writer: "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
        Actors: "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
        Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
        Language: "English",
        Country: "USA",
        Awards: "Nominated for 1 Oscar. Another 12 wins & 42 nominations.",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "7.7/10"
          },
          {
            Source: "Rotten Tomatoes",
            Value: "83%"
          },
          {
            Source: "Metacritic",
            Value: "67/100"
          }
        ],
        Metascore: "67",
        imdbRating: "7.7",
        imdbVotes: "458,168",
        imdbID: "tt3896198",
        Type: "movie",
        DVD: "22 Aug 2017",
        BoxOffice: "$389,804,217",
        Production: "Walt Disney Pictures",
        Website: "https://marvel.com/guardians",
        Response: "True"
      }
    ],
  }

  render() {
    const { movies } = this.state;
    const movie = movies[0];
    const asideMovieData = [
      "Genre",
      "Runtime",
      "Year",
      "Released",
      "Rated",
      "imdbRating",
      "Director",
      "Production",
      "Language",
      "Country",
      "Website",
    ];

    return (
      <div className="app">
        <header className="header">
          <div className="logo">React Movies</div>
          <input
            type="search"
            placeholder="type some movie title"
          />
        </header>

        <section className="movies-list">
          {movies.length ? (
            <div className="cards-list">
              {movies.map((movie) => (
                <article key={`movie-item-${movie.imdbID}`} className="card-item">
                  <figure className="card-image">
                    <img src={movie.Poster} alt=""/>
                  </figure>
                  <h2 className="card-title">{movie.Title}</h2>
                  <div className="card-metadata">
                    <span>{`Release: ${movie.Released} | IMDB: ${movie.imdbRating}`}</span>
                  </div>
                  <div className="card-description">{movie.Plot}</div>
                  <button type="button" className="card-button">See details</button>
                </article>
              ))}
            </div>
          ) : (
            <span>No movies to show</span>
          )}
        </section>

        <br/>
        <br/>
        <br/>

        <article className="movie-details">
          <div className="article-content">
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>

            <h2>Writer</h2>
            <p>{movie.Writer}</p>

            <h2>Actors</h2>
            <p>{movie.Actors}</p>
          </div>
          <div className="article-aside">
            <figure>
              <img src={movie.Poster} alt=""/>
            </figure>

            {asideMovieData.length && movie ? (
              <dl>
                {asideMovieData.map((term, idx) => {
                  return movie[term] ? (
                    <div key={`movie-details-${movie.imdbID}-${idx}`}>
                      <dt>{term}</dt>
                      <dd>{movie[term]}</dd>
                    </div>
                  ) : ''
                })}
              </dl>
            ) : (
              <span>no movie</span>
            )}
          </div>
        </article>
      </div>
    );
  }
}

export default App;
