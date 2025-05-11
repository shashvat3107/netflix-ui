import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import './mylist.scss'
import { useAuth } from '../../context/AuthContext'

const MyList = () => {
  const { user } = useAuth();
  const myList = user?.myList || [];

  return (
    <div className='mylist'>
        <Navbar/>
        <div className="content">
            <h1>My List</h1>
            {user ? (
              <List title="My Saved Movies & Shows" items={myList} />
            ) : (
              <div style={{ color: 'white', marginTop: '20px' }}>Please log in to view your list.</div>
            )}
        </div>
    </div>
  )
}

export default MyList 