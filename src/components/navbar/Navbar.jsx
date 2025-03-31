import { Link } from "react-router-dom";
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import './navbar.scss'
import { useState } from 'react'

const Navbar = () => {
    const [ isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null );
    };

    console.log(isScrolled);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <Link to="/">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png' alt='' />
                </Link>
                <Link to="/" className="link">Homepage</Link>
                <Link to="/series" className="link">Series</Link>
                <Link to="/movies" className="link">Movies</Link>
                <Link to="/new" className="link">New and Popular</Link>
                <Link to="/mylist" className="link">My List</Link>
            </div>
            <div className="right">
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
                <div className='profile'>
                    <ArrowDropDown className='icon'/>
                    <div className='options'>
                        <span><Link to="/settings">Settings</Link></span>
                        <span><Link to="/Login">Logout</Link></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar