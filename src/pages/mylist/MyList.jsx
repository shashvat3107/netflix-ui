import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import './mylist.scss'

const MyList = () => {
  return (
    <div className='mylist'>
        <Navbar/>
        <div className="content">
            <h1>My List</h1>
            <List title="Continue Watching" />
            <List title="Watch Again" />
            <List title="My Downloads" />
            <List title="My Favorites" />
            <List title="Recently Added" />
            <List title="Watch Later" />
        </div>
    </div>
  )
}

export default MyList 