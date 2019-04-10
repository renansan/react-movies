const apiKey = process.env.REACT_APP_API_KEY;
const api = `http://www.omdbapi.com/?apikey=${apiKey}&r=json&type=movie`;
debugger;
export const getMovie = (movieId) =>
  fetch(`${api}&i=${movieId}&plot=full`)
    .then(res => res.json())
    .then(data => data)

export const search = (query) =>
  fetch(`${api}&i=${query}`)
    .then(res => res.json())
    .then(data => {
      return {
        results: data.Search,
        total: data.totalResults,
      }
    })
