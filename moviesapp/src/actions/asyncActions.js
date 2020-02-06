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
    const { results, total_results } = await requestFunc();
    dispatch(appDataActions.setDataById({
      ...additionalDataById(results)
    }));
    dispatch(appDataActions.setData({ data: results, totalResults: total_results }));
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
      ...additionalDataById([response])
    }));
    dispatch(appDataActions.setFetching(false, true));
  }
  catch (error) {
    dispatch(appDataActions.setError('error'));
    dispatch(appDataActions.setFetching(false, false));
  }
};

export const getMovieByQuery = (...args) => dispatch => {
  updateData(() => API.getMovieByQuery(...args), dispatch);
};

export const discoverMovies = settings => async dispatch => {
  updateData(() => API.getMovieDiscover(settings), dispatch);
}


export const asyncActionFactory = (apiFunc, fetchingAction, fulfillledAction, rejectedAction, section) =>
  (...args) => async dispatch => {
    dispatch(fetchingAction(section, ...args));

    try {
      const response = await apiFunc();

      dispatch(fulfillledAction(response, section, ...args));
    } catch (error) {
      dispatch(rejectedAction(error, section, ...args));
    }
  }

// const state = {
//   movies: {
//     items: [],
//     itemsById: {},
//     isFetching: false,
//     isFetched: false
//   },
//   ratings: {
//     items: [],
//     itemsById: {},
//     isFetching: false,
//     isFetched: false
//   },
//   users: {
//     items: [],
//     itemsById: {},
//     isFetching: false,
//     isFetched: false
//   }
// }

// const startFetching = (section, query, age) => {
//   return {
//     type: 'SET_FETCHING',
//     payload: {
//       section,
//       query,
//       age
//     }
//   };
// };

// const getMovies = asyncActionFactory(API.getMovieById, startFetching, successAction, rejectAction, 'movies')
// const getRating = asyncActionFactory(API.getRatings, startFetching, successAction, rejectAction, 'ratings')

// getMovies('1917', 123)

// startFetching('movies', '1917', 123)


// const reducer = (state = initialState, action = {}) => {
//   const { type, payload } = action;

//   switch (action.type) {
//     case 'SET_FETCHING':
//       return {
//         ...state,
//         [payload.section]: {
//           ...state[payload.section],
//           isFetching: true
//         }
//       };
//     }
// }