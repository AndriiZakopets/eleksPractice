const initialState = {
  data: [],
  dataById: {},
  totalPages: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA': 
      return {
        ...state,
        data: action.data,
        totalPages: action.totalPages
      };
    case 'SET_DATA_BY_ID': 
      return {
        ...state,
        dataById: action.dataById
      };
    case 'SET_TOTAL_PAGES':
      return {
        ...state,
        totalPages: action.totalPages
      }
    default: 
      return state;
  }
};

export default reducer;