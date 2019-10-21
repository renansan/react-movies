import { combineReducers } from 'redux';

import {
  UPDATE_FAVORITE,
  FETCH_FAVORITES,
} from './actions.js';

function favorites (state = {}, action) {
  const { movieId, movieData, isSaved, favorites } = action;

  switch (action.type) {
    case FETCH_FAVORITES :
      return favorites

    case UPDATE_FAVORITE :
    return {
      ...state,
      [movieId]: {
        ...movieData,
        isSaved,
      }
    }

    default :
      return state
  }
}

export default combineReducers({ favorites })
