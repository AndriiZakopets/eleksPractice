import {
  ADD_MOVIE,
  CHANGE_ORDER,
  REMOVE_MOVIE
} from '../constants';

export const addMovie = movie => {
  return {
    type: ADD_MOVIE,
    payload: movie
  };
}

export const changeOrder = (sourceI, destinationI, draggableId) => {
  return {
    type: CHANGE_ORDER,
    payload: {
      sourceI,
      destinationI,
      draggableId
    }
  };
}

export const removeMovie = movieId => {
  return {
    type: REMOVE_MOVIE,
    payload: {
      movieId
    }
  };
}