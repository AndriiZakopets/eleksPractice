const initialState = {
  data: [],
  dataById: {},
  totalPages: 0,
  settings: {
    sorting: localStorage.getItem('sorting') || 'trending',
    page: localStorage.getItem('page') || 1,
    searchQuery: ''
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA': 
      return {
        ...state,
        data: action.data
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
    case 'SET_SETTINGS': 
      return {
        ...state,
        settings: action.settings
      };
    default: 
      return state;
  }
};

export default reducer;