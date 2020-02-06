import { createStore, combineReducers, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import appDataReducer from './reducers/appDataReducer';
import settingsReducer from './reducers/settingsReducer';

export default createStore(
    combineReducers({
        settings: settingsReducer,
        appData: appDataReducer
    }), 
    applyMiddleware(ThunkMiddleware)
);

