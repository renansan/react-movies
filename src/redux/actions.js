export const UPDATE_FAVORITE = 'UPDATE_FAVORITE';
export const FETCH_FAVORITES = 'FETCH_FAVORITES';

const getSavedMovies = () => {
  const savedMovies = localStorage.getItem('savedMovies') || '{}';
  return (typeof savedMovies === 'string') ? JSON.parse(savedMovies) : {};
}

export const fetchFavorites = (cb) => dispatch => {
  const savedMovies = getSavedMovies();
  dispatch(fetchFavoritesAction(savedMovies));
  if (cb) {
    cb(savedMovies);
  }
}

export const updateFavorite = ({ movieId, isSaved, movieData }, cb) => dispatch => {
  const savedMovies = getSavedMovies();
  const moviesData = savedMovies;
  moviesData[movieId] = {
    ...movieData,
    isSaved,
  };
  localStorage.setItem('savedMovies', JSON.stringify(moviesData));
  dispatch(updateFavoriteAction({ movieId, isSaved, movieData }));
  if (cb) {
    cb({ movieId, isSaved });
  }
}

const fetchFavoritesAction = (favorites) => {
  return {
    type: FETCH_FAVORITES,
    favorites,
  }
}

const updateFavoriteAction = ({ movieId, isSaved, movieData }) => {
  return {
    type: UPDATE_FAVORITE,
    movieId,
    isSaved,
    movieData,
  }
}
