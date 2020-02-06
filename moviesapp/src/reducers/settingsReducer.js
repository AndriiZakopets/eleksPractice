import { SORTINGS } from '../constants';

const initialState = {
  sorting: localStorage.getItem('sorting') || SORTINGS[0],
  page: localStorage.getItem('page') || 1,
  searchQuery: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SETTINGS': 
      return {
        ...state,
        sorting: action.payload.sorting,
        page: action.payload.page,
        searchQuery: action.payload.searchQuery
      };
    default: 
      return state;
  }
};

export default reducer;