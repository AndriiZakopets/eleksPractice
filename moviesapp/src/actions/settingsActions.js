export function setSorting(sorting) {
  return {
    type: 'SET_SORTING',
    sorting
  }
}

export function setSorting(page) {
  return {
    type: 'SET_PAGE',
    page
  }
}

export function setSorting(searchQuery) {
  return {
    type: 'SET_SEARCH_QUERY',
    searchQuery
  }
}