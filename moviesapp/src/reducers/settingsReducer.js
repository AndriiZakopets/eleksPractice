const initialState = {
  sorting: localStorage.getItem('sorting') || 'trending',
  page: localStorage.getItem('page') || 1,
  searchQuery: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SETTINGS': 
      return {
        ...state,
        sorting: action.settings.sorting,
        page: action.settings.page,
        searchQuery: action.settings.searchQuery
      };
    default: 
      return state;
  }
};

export default reducer;