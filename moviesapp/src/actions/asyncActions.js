import API from '../API';
import appDataActions from '../actions/appDataActions';

const additionalDataById = results => {
  return results.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});
}

const updateData = async (requestFunc, dispatch) => {
  dispatch(appDataActions.setFetching(true, false));

  try {
    const { results, total_pages } = await requestFunc();
    dispatch(appDataActions.setDataById({
      ...additionalDataById(results)
    }));
    dispatch(appDataActions.setData({ data: results, totalPages: total_pages}));
    dispatch(appDataActions.setFetching(false, true));
  } catch (error) {
    dispatch(appDataActions.setError('error'));
    dispatch(appDataActions.setFetching(false, false));
  }
}

export const getMovieById = id => async dispatch => {
  dispatch(appDataActions.setFetching(true, false));

  try {
    const response = await API.getDetails(id);
    dispatch(appDataActions.setDataById({
      ...additionalDataById(response)
    }));
    dispatch(appDataActions.setFetching(false, true));
  }
  catch (error) {
    dispatch(appDataActions.setError('error'));
    dispatch(appDataActions.setFetching(false, false));
  }
};

export const getMovieByQuery = settings => dispatch => {
  updateData(() => API.getMovieByQuery(settings), dispatch);
};

export const discoverMovies = settings => async dispatch => {
  updateData(() => API.getMovieDiscover(settings), dispatch);
}