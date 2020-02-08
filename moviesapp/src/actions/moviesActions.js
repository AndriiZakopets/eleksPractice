import {
  START_FETCHING,
  SUCCESS_ACTION,
  SET_ERROR
} from '../constants';

export const startFetching = () => ({
    type: START_FETCHING
});

export const getMoviesSuccess = ({ results, total_results: totalResults }) => ({
  type: SUCCESS_ACTION,
  payload: {
    dataById: arrDataToObj(results),
    data: results,
    totalResults
  }
});

export const getDetailsSuccess = response => ({
  type: SUCCESS_ACTION,
  payload: {
    dataById: {
      [response.id]: response
    }
  }
});

export const rejectAction = error => ({
  type: SET_ERROR,
  payload: {
    error 
  }
});

const arrDataToObj = results => {
  return results.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});
};