import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import { tmdbService } from '../../services/tmdbService'
import './series.scss'

const Series = () => {
  const [tvLists, setTVLists] = useState({
    popular: [],
    topRated: [],
    onTheAir: [],
    drama: [],
    comedy: [],
    scifi: [],
    crime: [],
    reality: []
  });

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const [
          popular,
          topRated,
          onTheAir,
          drama,
          comedy,
          scifi,
          crime,
          reality
        ] = await Promise.all([
          tmdbService.getPopularTV(1),
          tmdbService.getTopRatedTV(1),
          tmdbService.getOnTheAirTV(1),
          tmdbService.discoverTV({ with_genres: 18, page: 1 }), // Drama
          tmdbService.discoverTV({ with_genres: 35, page: 1 }), // Comedy
          tmdbService.discoverTV({ with_genres: 10765, page: 1 }), // Sci-Fi & Fantasy
          tmdbService.discoverTV({ with_genres: 80, page: 1 }), // Crime
          tmdbService.discoverTV({ with_genres: 10764, page: 1 }) // Reality
        ]);

        // Fetch additional pages for each category to ensure at least 13 items
        const [
          popular2,
          topRated2,
          onTheAir2,
          drama2,
          comedy2,
          scifi2,
          crime2,
          reality2
        ] = await Promise.all([
          tmdbService.getPopularTV(2),
          tmdbService.getTopRatedTV(2),
          tmdbService.getOnTheAirTV(2),
          tmdbService.discoverTV({ with_genres: 18, page: 2 }), // Drama
          tmdbService.discoverTV({ with_genres: 35, page: 2 }), // Comedy
          tmdbService.discoverTV({ with_genres: 10765, page: 2 }), // Sci-Fi & Fantasy
          tmdbService.discoverTV({ with_genres: 80, page: 2 }), // Crime
          tmdbService.discoverTV({ with_genres: 10764, page: 2 }) // Reality
        ]);

        setTVLists({
          popular: [...popular.results, ...popular2.results].slice(0, 13),
          topRated: [...topRated.results, ...topRated2.results].slice(0, 13),
          onTheAir: [...onTheAir.results, ...onTheAir2.results].slice(0, 13),
          drama: [...drama.results, ...drama2.results].slice(0, 13),
          comedy: [...comedy.results, ...comedy2.results].slice(0, 13),
          scifi: [...scifi.results, ...scifi2.results].slice(0, 13),
          crime: [...crime.results, ...crime2.results].slice(0, 13),
          reality: [...reality.results, ...reality2.results].slice(0, 13)
        });
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      }
    };

    fetchTVShows();
  }, []);

  return (
    <div className='series'>
        <Navbar/>
        <div className="content">
            <h1>TV Shows</h1>
            <List title="Popular TV Shows" items={tvLists.popular} />
            <List title="Top Rated TV Shows" items={tvLists.topRated} />
            <List title="On The Air" items={tvLists.onTheAir} />
            <List title="Drama Series" items={tvLists.drama} />
            <List title="Comedy Series" items={tvLists.comedy} />
            <List title="Sci-Fi & Fantasy" items={tvLists.scifi} />
            <List title="Crime TV Shows" items={tvLists.crime} />
            <List title="Reality TV" items={tvLists.reality} />
        </div>
    </div>
  )
}

export default Series 