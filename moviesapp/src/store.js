import { createStore, combineReducers } from 'redux';
import appDataReducer from './reducers/appDataReducer';
import settingsReducer from './reducers/settingsReducer';

export default createStore(combineReducers({
    settings: settingsReducer,
    appData: appDataReducer
}));

// dispatch(getFilm(id));

// export const getFilm = (id) =>
//     dispatch => {
//         dispatch(setFetching({ isFetching: true }));

//         return api.getFilm(id)
//             .then(response => {
//                 dispatch(setData(response))
//                 dispatch(setFetching({ isFetching: false }));
//                 dispatch(setFetched({ isFetched: true }));
//             })
//             .catch(error => {
//                 dispatch(setError(error));
//                 dispatch(setFetching({ isFetching: false }));
//                 dispatch(setFetched({ isFetched: false }));
//             })
//     }

