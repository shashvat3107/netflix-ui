import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import { tmdbService } from '../../services/tmdbService'
import './movies.scss'

const Movies = () => {
  const [movieLists, setMovieLists] = useState({
    popular: [],
    topRated: [],
    nowPlaying: [],
    upcoming: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentary: [],
    scifi: [],
    thriller: []
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [
          popular,
          topRated,
          nowPlaying,
          upcoming,
          action,
          comedy,
          horror,
          romance,
          documentary,
          scifi,
          thriller
        ] = await Promise.all([
          tmdbService.getPopularMovies(1),
          tmdbService.getTopRatedMovies(1),
          tmdbService.getNowPlayingMovies(1),
          tmdbService.getUpcomingMovies(1),
          tmdbService.discoverMovies({ with_genres: 28, page: 1 }), // Action
          tmdbService.discoverMovies({ with_genres: 35, page: 1 }), // Comedy
          tmdbService.discoverMovies({ with_genres: 27, page: 1 }), // Horror
          tmdbService.discoverMovies({ with_genres: 10749, page: 1 }), // Romance
          tmdbService.discoverMovies({ with_genres: 99, page: 1 }), // Documentary
          tmdbService.discoverMovies({ with_genres: 878, page: 1 }), // Sci-Fi
          tmdbService.discoverMovies({ with_genres: 53, page: 1 }) // Thriller
        ]);

        // Fetch additional pages for each category to ensure at least 13 items
        const [
          popular2,
          topRated2,
          nowPlaying2,
          upcoming2,
          action2,
          comedy2,
          horror2,
          romance2,
          documentary2,
          scifi2,
          thriller2
        ] = await Promise.all([
          tmdbService.getPopularMovies(2),
          tmdbService.getTopRatedMovies(2),
          tmdbService.getNowPlayingMovies(2),
          tmdbService.getUpcomingMovies(2),
          tmdbService.discoverMovies({ with_genres: 28, page: 2 }), // Action
          tmdbService.discoverMovies({ with_genres: 35, page: 2 }), // Comedy
          tmdbService.discoverMovies({ with_genres: 27, page: 2 }), // Horror
          tmdbService.discoverMovies({ with_genres: 10749, page: 2 }), // Romance
          tmdbService.discoverMovies({ with_genres: 99, page: 2 }), // Documentary
          tmdbService.discoverMovies({ with_genres: 878, page: 2 }), // Sci-Fi
          tmdbService.discoverMovies({ with_genres: 53, page: 2 }) // Thriller
        ]);

        setMovieLists({
          popular: [...popular.results, ...popular2.results].slice(0, 13),
          topRated: [...topRated.results, ...topRated2.results].slice(0, 13),
          nowPlaying: [...nowPlaying.results, ...nowPlaying2.results].slice(0, 13),
          upcoming: [...upcoming.results, ...upcoming2.results].slice(0, 13),
          action: [...action.results, ...action2.results].slice(0, 13),
          comedy: [...comedy.results, ...comedy2.results].slice(0, 13),
          horror: [...horror.results, ...horror2.results].slice(0, 13),
          romance: [...romance.results, ...romance2.results].slice(0, 13),
          documentary: [...documentary.results, ...documentary2.results].slice(0, 13),
          scifi: [...scifi.results, ...scifi2.results].slice(0, 13),
          thriller: [...thriller.results, ...thriller2.results].slice(0, 13)
        });
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className='movies'>
        <Navbar/>
        <div className="content">
            <h1>Movies</h1>
            <List title="Popular Movies" items={movieLists.popular} />
            <List title="Now Playing" items={movieLists.nowPlaying} />
            <List title="Top Rated" items={movieLists.topRated} />
            <List title="Upcoming" items={movieLists.upcoming} />
            <List title="Action Movies" items={movieLists.action} />
            <List title="Comedies" items={movieLists.comedy} />
            <List title="Horror Movies" items={movieLists.horror} />
            <List title="Romance Movies" items={movieLists.romance} />
            <List title="Documentaries" items={movieLists.documentary} />
            <List title="Sci-Fi Movies" items={movieLists.scifi} />
            <List title="Thriller Movies" items={movieLists.thriller} />
        </div>
    </div>
  )
}

export default Movies 