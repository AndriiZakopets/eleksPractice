import axios from 'axios';

const api_key = '4f7b4e11c29b41270f152fa71698f126';

async function callApi(url, page, query) {
  const response = await axios.get(url, { params: { api_key, page, query } });
  return response.data;
}

export default {
  getDetails: async id => callApi(`https://api.themoviedb.org/3/movie/${id}`),
  getPopular: async ({ page }) => callApi(`https://api.themoviedb.org/3/movie/popular`, page),
  getTopRated: async ({ page }) => callApi(`https://api.themoviedb.org/3/movie/top_rated`, page),
  getTrending: async ({ page }) => callApi(`https://api.themoviedb.org/3/trending/movie/week`, page),
  getMovieByQuery: async ({ page, searchQuery: query }) => callApi(`https://api.themoviedb.org/3/search/movie`, page, query)
}