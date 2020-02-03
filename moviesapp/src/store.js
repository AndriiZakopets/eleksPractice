import { createStore, combineReducers } from 'redux';
import reducer from './reducers/reducer';

export default createStore(reducer);