import { store } from 'react-notifications-component';
import {
  ADD_MOVIE,
  CHANGE_ORDER,
  REMOVE_MOVIE
} from '../constants';

let initialState;
const storageWatchList = localStorage.getItem('watch-list');

const notification = (type, message) => {
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

if (storageWatchList) {
  initialState = JSON.parse(storageWatchList);
} else {
  initialState = {
    watchIds: {},
    watchList: []
  };
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_MOVIE: 
      if (state.watchList.includes(payload.id)) {
        notification('warning', `the movie already in your watchlist`);
        return state;
      }
      notification('success', `the movie added successfully`);
      return {
        ...state,
        watchIds: {
          ...state.watchIds,
          [payload.id]: payload
        },
        watchList: [
          ...state.watchList,
          payload.id
        ]
      };
    case CHANGE_ORDER: {
      const newWatchList = [...state.watchList];
      newWatchList.splice(payload.sourceI, 1);
      newWatchList.splice(payload.destinationI, 0, payload.draggableId);
      return {
        ...state,
        watchList: newWatchList
      };
    }
    case REMOVE_MOVIE: {
      const newWatchList = [...state.watchList];
      newWatchList.splice(payload.movieId, 1);
      return {
        ...state,
        watchList: newWatchList
      }
    }
    default: 
      return state;
  }
};

export default reducer;