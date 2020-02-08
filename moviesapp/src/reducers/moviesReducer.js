import {
  START_FETCHING,
  SUCCESS_ACTION,
  SET_ERROR
} from '../constants';

const initialState = {
  isFetching: false,
  isFetched: false,
  error: null,
  data: [],
  totalResults: 0,
  dataById: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case SUCCESS_ACTION:
      return {
        ...state,
        ...payload,
        dataById: {
          ...state.dataById,
          ...payload.dataById
        },
        isFetching: false,
        isFetched: true
      };
    case SET_ERROR: 
      return {
        ...state,
        ...payload,
        isFetching: false,
        isFetched: false
      };
    default: 
      return state;
  }
};
