export const TMDB_API_KEY = 'c5516f2bc45175e8f05fa0111fec234f'; // Replace with your TMDB API key
export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export const TMDB_ENDPOINTS = {
    // Movies
    POPULAR_MOVIES: '/movie/popular',
    TOP_RATED_MOVIES: '/movie/top_rated',
    NOW_PLAYING_MOVIES: '/movie/now_playing',
    UPCOMING_MOVIES: '/movie/upcoming',
    MOVIE_DETAILS: (id) => `/movie/${id}`,
    MOVIE_CREDITS: (id) => `/movie/${id}/credits`,
    MOVIE_VIDEOS: (id) => `/movie/${id}/videos`,
    
    // TV Shows
    POPULAR_TV: '/tv/popular',
    TOP_RATED_TV: '/tv/top_rated',
    ON_THE_AIR_TV: '/tv/on_the_air',
    TV_DETAILS: (id) => `/tv/${id}`,
    TV_CREDITS: (id) => `/tv/${id}/credits`,
    TV_VIDEOS: (id) => `/tv/${id}/videos`,
    
    // Genres
    MOVIE_GENRES: '/genre/movie/list',
    TV_GENRES: '/genre/tv/list',
    
    // Search
    SEARCH_MULTI: '/search/multi',
    
    // Discover
    DISCOVER_MOVIES: '/discover/movie',
    DISCOVER_TV: '/discover/tv'
}; 