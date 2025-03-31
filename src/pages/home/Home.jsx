import List from '../../components/list/List'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Featured />
        <List title="Continue to Watch" />
        <List title="New Releases" />
        <List title="Popular on Netflix" />
        <List title="Trending Now" />
        <List title="Top Rated" />
        <List title="Action Movies" />
        <List title="Comedies" />
        <List title="Horror Movies" />
        <List title="Romance Movies" />
        <List title="Documentaries" />
    </div>
  )
}

export default Home