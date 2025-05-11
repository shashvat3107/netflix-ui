import { TMDB_API_KEY, TMDB_BASE_URL, TMDB_IMAGE_BASE_URL, TMDB_ENDPOINTS } from '../config/tmdb';

const fetchTMDB = async (endpoint, params = {}) => {
    const queryParams = new URLSearchParams({
        api_key: TMDB_API_KEY,
        language: 'en-US',
        ...params
    });

    const response = await fetch(`${TMDB_BASE_URL}${endpoint}?${queryParams}`);
    if (!response.ok) {
        throw new Error('TMDB API request failed');
    }
    return response.json();
};

export const getImageUrl = (path, size = 'w500') => {
    if (!path) return null;
    return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
};

export const tmdbService = {
    // Movies
    getPopularMovies: (page = 1) => 
        fetchTMDB(TMDB_ENDPOINTS.POPULAR_MOVIES, { page }),
    
    getTopRatedMovies: (page = 1) => 
        fetchTMDB(TMDB_ENDPOINTS.TOP_RATED_MOVIES, { page }),
    
    getNowPlayingMovies: (page = 1) => 
        fetchTMDB(TMDB_ENDPOINTS.NOW_PLAYING_MOVIES, { page }),
    
    getUpcomingMovies: (page = 1) => 
        fetchTMDB(TMDB_ENDPOINTS.UPCOMING_MOVIES, { page }),
    
    getMovieDetails: (id) => 
        fetchTMDB(TMDB_ENDPOINTS.MOVIE_DETAILS(id)),
    
    // TV Shows
    getPopularTV: (page = 1) => 
        fetchTMDB(TMDB_ENDPOINTS.POPULAR_TV, { page }),
    
    getTopRatedTV: (page = 1) => 
        fetchTMDB(TMDB_ENDPOINTS.TOP_RATED_TV, { page }),
    
    getOnTheAirTV: (page = 1) => 
        fetchTMDB(TMDB_ENDPOINTS.ON_THE_AIR_TV, { page }),
    
    getTVDetails: (id) => 
        fetchTMDB(TMDB_ENDPOINTS.TV_DETAILS(id)),
    
    // Genres
    getMovieGenres: () => 
        fetchTMDB(TMDB_ENDPOINTS.MOVIE_GENRES),
    
    getTVGenres: () => 
        fetchTMDB(TMDB_ENDPOINTS.TV_GENRES),
    
    // Discover
    discoverMovies: (params) => 
        fetchTMDB(TMDB_ENDPOINTS.DISCOVER_MOVIES, params),
    
    discoverTV: (params) => 
        fetchTMDB(TMDB_ENDPOINTS.DISCOVER_TV, params),
    
    // Search
    searchMulti: (query, page = 1) => 
        fetchTMDB(TMDB_ENDPOINTS.SEARCH_MULTI, { query, page })
}; 