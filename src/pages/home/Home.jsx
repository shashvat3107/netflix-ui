import { useState, useEffect } from 'react';
import List from '../../components/list/List'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import { tmdbService } from '../../services/tmdbService'
import './home.scss'

const Home = () => {
  const [lists, setLists] = useState({
    continue: [],
    newReleases: [],
    popular: [],
    trending: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentary: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          nowPlaying,
          upcoming,
          popular,
          trending,
          topRated,
          action,
          comedy,
          horror,
          romance,
          documentary
        ] = await Promise.all([
          tmdbService.getNowPlayingMovies(1),
          tmdbService.getUpcomingMovies(1),
          tmdbService.getPopularMovies(1),
          tmdbService.discoverMovies({ sort_by: 'popularity.desc', page: 1 }),
          tmdbService.getTopRatedMovies(1),
          tmdbService.discoverMovies({ with_genres: 28, page: 1 }),
          tmdbService.discoverMovies({ with_genres: 35, page: 1 }),
          tmdbService.discoverMovies({ with_genres: 27, page: 1 }),
          tmdbService.discoverMovies({ with_genres: 10749, page: 1 }),
          tmdbService.discoverMovies({ with_genres: 99, page: 1 })
        ]);
        setLists({
          continue: nowPlaying.results.slice(0, 13),
          newReleases: upcoming.results.slice(0, 13),
          popular: popular.results.slice(0, 13),
          trending: trending.results.slice(0, 13),
          topRated: topRated.results.slice(0, 13),
          action: action.results.slice(0, 13),
          comedy: comedy.results.slice(0, 13),
          horror: horror.results.slice(0, 13),
          romance: romance.results.slice(0, 13),
          documentary: documentary.results.slice(0, 13)
        });
      } catch (err) {
        console.error('Error fetching home page data:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='home'>
        <Navbar/>
        <Featured />
        <List title="Continue to Watch" items={lists.continue} />
        <List title="New Releases" items={lists.newReleases} />
        <List title="Popular on Netflix" items={lists.popular} />
        <List title="Trending Now" items={lists.trending} />
        <List title="Top Rated" items={lists.topRated} />
        <List title="Action Movies" items={lists.action} />
        <List title="Comedies" items={lists.comedy} />
        <List title="Horror Movies" items={lists.horror} />
        <List title="Romance Movies" items={lists.romance} />
        <List title="Documentaries" items={lists.documentary} />
    </div>
  )
}

export default Home