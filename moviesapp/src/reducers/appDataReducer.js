const initialState = {
  isFetching: true,
  isFetched: false,
  error: null,
  data: [],
  dataById: {},
  totalResults: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FETCHING':
      return {
        ...state,
        ...action.payload
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };
    case 'SET_DATA': 
      return {
        ...state,
        data: action.payload.data,
        totalResults: action.payload.totalResults
      };
    case 'SET_DATA_BY_ID': 
      return {
        ...state,
        dataById: {
          ...state.dataById, 
          ...action.payload
        }
      };
    default: 
      return state;
  }
};

export default reducer;