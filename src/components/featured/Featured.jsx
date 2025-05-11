import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'
import { useEffect, useState } from 'react'
import { tmdbService, getImageUrl } from '../../services/tmdbService'

export default function Featured({type}) {
  const [movies, setMovies] = useState([])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    // Fetch popular movies (or you can use another category)
    const fetchMovies = async () => {
      try {
        const res = await tmdbService.getPopularMovies(1)
        setMovies(res.results.slice(0, 10)) // Use first 10 movies
      } catch (err) {
        console.error('Error fetching featured movies:', err)
      }
    }
    fetchMovies()
  }, [])

  useEffect(() => {
    if (movies.length === 0) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [movies])

  const movie = movies[current]

  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>
                    {type === 'movie' ? 'Movies' : 'Series'} 
                </span>
                <select name='genre' id='genre'>
                    <option value='adventure'>Adventure</option>
                    <option value='animation'>Animation</option>
                    <option value='comedy'>Comedy</option>
                    <option value='crime'>Crime</option>
                    <option value='documentary'>Documentary</option>
                    <option value='drama'>Drama</option>
                    <option value='fantasy'>Fantasy</option>
                    <option value='historical'>Historical</option>
                    <option value='horror'>Horror</option>
                    <option value='romance'>Romance</option>
                    <option value='sci-fi'>Sci-fi</option>
                    <option value='thriller'>Thriller</option>
                    <option value='western'>Western</option>
                </select>
            </div>
        )}
      {movie ? (
        <>
          <img src={getImageUrl(movie.backdrop_path || movie.poster_path, 'w1280')} alt={movie.title || movie.name} />
          <div className="info">
            <img src={getImageUrl(movie.poster_path, 'w300')} alt={movie.title || movie.name} />
            <span className="desc">{movie.overview}</span>
            <div className="buttons">
                <button className='play'>
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className='more'>
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
          </div>
        </>
      ) : (
        <img src='https://images4.alphacoders.com/118/thumb-1920-1185748.jpg' 
        alt='' 
        />
      )}
    </div>
  )
}
