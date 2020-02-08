import API from '../API';
import {
  startFetching,
  getMoviesSuccess,
  getDetailsSuccess,
  rejectAction
} from '../actions/moviesActions';

export const asyncActionFactory = (apiFunc, fetchingAction, fulfillledAction, rejectedAction, section) =>
  (...args) => async dispatch => {
    dispatch(fetchingAction(section, ...args));

    try {
      const response = await apiFunc(...args);

      dispatch(fulfillledAction(response, section, ...args));
    } catch (error) {
      dispatch(rejectedAction(error, section, ...args));
    }
  }

export const getMovieById = asyncActionFactory(API.getDetails, startFetching, getDetailsSuccess, rejectAction);
export const getMovieByQuery = asyncActionFactory(API.getMovieByQuery, startFetching, getMoviesSuccess, rejectAction);
export const discoverMovies = asyncActionFactory(API.getMovieDiscover, startFetching, getMoviesSuccess, rejectAction);
