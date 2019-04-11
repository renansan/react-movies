import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { search } from './api';
import Modal from './components/Modal';
import Loading from './components/Loading';
import Movie from './components/Movie';
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
      },
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
        imdbID: "tt3896199",
        Type: "movie",
        DVD: "22 Aug 2017",
        BoxOffice: "$389,804,217",
        Production: "Walt Disney Pictures",
        Website: "https://marvel.com/guardians",
        Response: "True"
      },
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
        imdbID: "tt3896197",
        Type: "movie",
        DVD: "22 Aug 2017",
        BoxOffice: "$389,804,217",
        Production: "Walt Disney Pictures",
        Website: "https://marvel.com/guardians",
        Response: "True"
      },
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
        imdbID: "tt3896196",
        Type: "movie",
        DVD: "22 Aug 2017",
        BoxOffice: "$389,804,217",
        Production: "Walt Disney Pictures",
        Website: "https://marvel.com/guardians",
        Response: "True"
      },
    ],
  }

  componentDidMount() {
    // test api
    // getMovie('tt3896198').then(data => {
    //   debugger;
    // })
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="app">
        <header className="header">
          <Link to="/" className="logo">React Movies</Link>
          <input
            className="search-input"
            type="search"
            placeholder="type some movie title"
          />
        </header>

        <section className="movies-list">
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
                      <span>
                        <b>Release:</b> {movie.Released}
                      </span>
                      <span>
                        <b>IMDB:</b> {movie.imdbRating}
                      </span>
                    </div>
                    <div className="card-description"></div>
                    <Link to={`/movie/${'tt3896198'}`} className="btn card-button">See details</Link>
                  </article>
                </div>
              ))}
            </div>
          ) : (
            <span>No movies to show</span>
          )}
        </section>

        <Route path="/movie/:id" render={props => (
          <Modal>
              <Movie />
          </Modal>
        )}/>

      </div>
    );
  }
}

export default App;
