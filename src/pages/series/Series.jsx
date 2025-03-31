import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import './series.scss'

const Series = () => {
  return (
    <div className='series'>
        <Navbar/>
        <div className="content">
            <h1>TV Shows</h1>
            <List title="Popular TV Shows" />
            <List title="Netflix Originals" />
            <List title="Trending TV Shows" />
            <List title="Top Rated TV Shows" />
            <List title="Drama Series" />
            <List title="Comedy Series" />
            <List title="Sci-Fi & Fantasy" />
            <List title="Crime TV Shows" />
            <List title="Reality TV" />
        </div>
    </div>
  )
}

export default Series 