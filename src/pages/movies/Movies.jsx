import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import './movies.scss'

const Movies = () => {
  return (
    <div className='movies'>
        <Navbar/>
        <div className="content">
            <h1>Movies</h1>
            <List title="Popular Movies" />
            <List title="Netflix Originals" />
            <List title="Trending Now" />
            <List title="Top Rated" />
            <List title="Action Movies" />
            <List title="Comedies" />
            <List title="Horror Movies" />
            <List title="Romance Movies" />
            <List title="Documentaries" />
            <List title="Sci-Fi Movies" />
            <List title="Thriller Movies" />
        </div>
    </div>
  )
}

export default Movies 