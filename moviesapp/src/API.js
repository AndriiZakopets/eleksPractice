import axios from 'axios';

const api_key = '4f7b4e11c29b41270f152fa71698f126';

async function callApi(url, settings) {
  const response = await axios.get(url, { params: { api_key, ...settings } });
  return response.data;
}

export default {
  getDetails: id => callApi(`https://api.themoviedb.org/3/movie/${id}`),
  // getPopular: ({ page }) => callApi(`https://api.themoviedb.org/3/movie/popular`, page),
  // getTopRated: ({ page }) => callApi(`https://api.themoviedb.org/3/movie/top_rated`, page),
  // getTrending: ({ page }) => callApi(`https://api.themoviedb.org/3/trending/movie/week`, page),
  getMovieByQuery: ({ page, searchQuery: query }) => callApi(`https://api.themoviedb.org/3/search/movie`, { page, query }),
  getMovieDiscover: ({ page, sorting: sort_by }) => callApi(`https://api.themoviedb.org/3/discover/movie`, { page, sort_by })
}