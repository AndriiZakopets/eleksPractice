import { SORTINGS } from '../constants';

const storageSorting = localStorage.getItem('sorting');
const storagePage = localStorage.getItem('page')

const initialState = {
  sorting: storageSorting ? JSON.parse(storageSorting).data : SORTINGS[0][0],
  page: storagePage ? JSON.parse(storagePage).data : 1,
  searchQuery: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SETTINGS': 
      return {
        ...state,
        page: 1,
        ...action.payload
      };
    default: 
      return state;
  }
};

export default reducer;

// react-beautiful-dnd