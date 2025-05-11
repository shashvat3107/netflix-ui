import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import './new.scss'
import { useEffect, useState } from 'react'
import { tmdbService } from '../../services/tmdbService'

const New = () => {
  const [lists, setLists] = useState({
    newReleases: [],
    comingSoon: [],
    popular: [],
    trending: [],
    top10: [],
    originals: [],
    recentlyAdded: [],
    action: [],
    comedy: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          newReleases,
          comingSoon,
          popular,
          trending,
          top10,
          originals,
          recentlyAdded,
          action,
          comedy
        ] = await Promise.all([
          tmdbService.getNowPlayingMovies(1), // New Releases
          tmdbService.getUpcomingMovies(1),   // Coming Soon
          tmdbService.getPopularMovies(1),    // Popular on Netflix
          tmdbService.discoverMovies({ sort_by: 'popularity.desc', page: 1 }), // Trending Now
          tmdbService.getTopRatedMovies(1),   // Top 10 in Your Country Today
          tmdbService.getPopularTV(1),        // Netflix Originals (using popular TV as a proxy)
          tmdbService.getNowPlayingMovies(1), // Recently Added (using now playing)
          tmdbService.discoverMovies({ with_genres: 28, page: 1 }), // Popular in Action
          tmdbService.discoverMovies({ with_genres: 35, page: 1 })  // Popular in Comedy
        ]);
        setLists({
          newReleases: newReleases.results.slice(0, 13),
          comingSoon: comingSoon.results.slice(0, 13),
          popular: popular.results.slice(0, 13),
          trending: trending.results.slice(0, 13),
          top10: top10.results.slice(0, 13),
          originals: originals.results.slice(0, 13),
          recentlyAdded: recentlyAdded.results.slice(0, 13),
          action: action.results.slice(0, 13),
          comedy: comedy.results.slice(0, 13)
        });
      } catch (err) {
        console.error('Error fetching new & popular page data:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='new'>
        <Navbar/>
        <div className="content">
            <h1>New & Popular</h1>
            <List title="New Releases" items={lists.newReleases} />
            <List title="Coming Soon" items={lists.comingSoon} />
            <List title="Popular on Netflix" items={lists.popular} />
            <List title="Trending Now" items={lists.trending} />
            <List title="Top 10 in Your Country Today" items={lists.top10} />
            <List title="Netflix Originals" items={lists.originals} />
            <List title="Recently Added" items={lists.recentlyAdded} />
            <List title="Popular in Action" items={lists.action} />
            <List title="Popular in Comedy" items={lists.comedy} />
        </div>
    </div>
  )
}

export default New 