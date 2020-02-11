import {
  ADD_MOVIE,
  CHANGE_ORDER,
  REMOVE_MOVIE
} from '../constants';

let initialState;
const storageWatchList = localStorage.getItem('watch-list');

if (storageWatchList) {
  initialState = JSON.parse(storageWatchList);
} else {
  initialState = {
    itemsById: {},
    items: []
  };
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_MOVIE: 
      return {
        ...state,
        itemsById: {
          ...state.itemsById,
          [payload.id]: payload
        },
        items: [
          ...state.items,
          payload.id
        ]
      };
    case CHANGE_ORDER: {
      const newWatchList = [...state.items];
      newWatchList.splice(payload.sourceI, 1);
      newWatchList.splice(payload.destinationI, 0, payload.draggableId);
      return {
        ...state,
        items: newWatchList
      };
    }
    case REMOVE_MOVIE: {
      return {
        ...state,
        items: state.items.filter((item, index) => index != payload.movieId)
      }
    }
    default: 
      return state;
  }
};

export default reducer;