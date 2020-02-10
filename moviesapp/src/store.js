import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import moviesReducer from './reducers/moviesReducer';
import settingsReducer from './reducers/settingsReducer';
import watchListReducer from './reducers/watchListReducer';
import {
  ADD_MOVIE,
  CHANGE_ORDER,
  REMOVE_MOVIE
} from './constants';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  settings: settingsReducer,
  movies: moviesReducer,
  watchList: watchListReducer
});

const addWatchListToLocalStorage = (store) => (next) => (action) => {
  next(action)
  if (
      action.type === ADD_MOVIE ||
      action.type === CHANGE_ORDER || 
      action.type === REMOVE_MOVIE
  ) {
    localStorage.setItem(
      'watch-list',
      JSON.stringify(store.getState().watchList)
    )
  }
}

const middlewareArr = [ThunkMiddleware, addWatchListToLocalStorage]

export default createStore(
  reducer, 
  composeEnhancers(
    applyMiddleware(...middlewareArr)
  ),
);