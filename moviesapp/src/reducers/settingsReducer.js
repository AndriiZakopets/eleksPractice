const initialState = {
  sorting: localStorage.getItem('sorting') || 'trending',
  page: localStorage.getItem('page') || 1,
  searchQuery: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORTING': 
      return {
        ...state,
        sorting: action.sorting
      };
    case 'SET_PAGE': 
      return {
        ...state,
        page: action.page
      };
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.searchQuery
      }
    default: 
      return state;
  }
};

export default reducer;