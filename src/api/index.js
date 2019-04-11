const apiKey = process.env.REACT_APP_API_KEY;
const api = `http://www.omdbapi.com/?apikey=${apiKey}&r=json&type=movie`;
export const getMovie = (movieId) =>
  fetch(`${api}&i=${movieId}&plot=full`)
    .then(res => res.json())
    .then(data => data)

export const searchMovie = (query) =>
  fetch(`${api}&s=${query}`)
    .then(res => res.json())
    .then(data => {
      return {
        results: data.Search,
        total: data.totalResults,
      }
    })
