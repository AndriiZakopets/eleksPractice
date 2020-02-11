import { store } from 'react-notifications-component';
import {
  ADD_MOVIE,
  CHANGE_ORDER,
  REMOVE_MOVIE
} from '../constants';

const addNotification = (type, message) => {
  store.addNotification({
    title: type,
    message,
    type,
    insert: "top",
    container: "bottom-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true
    }
  });
}

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

export const removeMovieIndex = movieId => {
  return {
    type: REMOVE_MOVIE,
    payload: {
      movieId
    }
  };
}

export const addWatchlistMovie = (movie = {}) => 
  (dispatch, getState) => {
    const items = getState().watchList.items;
    if (!items.includes(movie.id)) {
      addNotification('success', `the movie added successfully`);
      dispatch(addMovie(movie));
    } else {
      addNotification('warning', `the movie already in your watchlist`);
    }
  }