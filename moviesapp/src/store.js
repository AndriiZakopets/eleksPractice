import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import appDataReducer from './reducers/appDataReducer';
import settingsReducer from './reducers/settingsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
    settings: settingsReducer,
    appData: appDataReducer
});

export default createStore(
    reducer, 
    composeEnhancers(
        applyMiddleware(ThunkMiddleware)
    ),
);