import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import moviesReducer from './reducers/moviesReducer';
import settingsReducer from './reducers/settingsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
    settings: settingsReducer,
    movies: moviesReducer
});

export default createStore(
    reducer, 
    composeEnhancers(
        applyMiddleware(ThunkMiddleware)
    ),
);