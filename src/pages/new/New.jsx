import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import './new.scss'

const New = () => {
  return (
    <div className='new'>
        <Navbar/>
        <div className="content">
            <h1>New & Popular</h1>
            <List title="New Releases" />
            <List title="Coming Soon" />
            <List title="Popular on Netflix" />
            <List title="Trending Now" />
            <List title="Top 10 in Your Country Today" />
            <List title="Netflix Originals" />
            <List title="Recently Added" />
            <List title="Popular in Action" />
            <List title="Popular in Comedy" />
        </div>
    </div>
  )
}

export default New 