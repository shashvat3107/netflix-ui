import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import './list.scss'
import { useRef, useState } from 'react'
import { getImageUrl } from '../../services/tmdbService'
import { useAuth } from '../../context/AuthContext'

function isInMyList(id) {
    const myList = JSON.parse(localStorage.getItem('myList') || '[]');
    return myList.some(item => item.id === id);
}

function toggleMyList(movie) {
    let myList = JSON.parse(localStorage.getItem('myList') || '[]');
    if (myList.some(item => item.id === movie.id)) {
        myList = myList.filter(item => item.id !== movie.id);
    } else {
        myList.push(movie);
    }
    localStorage.setItem('myList', JSON.stringify(myList));
}

export default function List({ title, items = [] }) {
    const { user, updateMyList } = useAuth();
    //for sliding the list (abhi list index 0 ke piche jaa rhi thi and last movie ke aage bhi slide ho rha tha to we have to change that)
    const[slideNumber , setSlideNumber] = useState(0);

    //for the slider button to disappear
    const[isMoved , setIsMoved] = useState(false);

    //using React Hook to create Slider
    const listRef = useRef()
    
    const myListIds = user?.myList?.map(item => item.id) || [];

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === 'left' && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(direction === 'right' && slideNumber < 5){
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${ -230 + distance}px)`
        }
    }

    const handleMyList = (movie) => {
        if (!user) return;
        let newList;
        if (myListIds.includes(movie.id)) {
            newList = user.myList.filter(item => item.id !== movie.id);
        } else {
            newList = [...(user.myList || []), movie];
        }
        updateMyList(newList);
    };

    if (!items || items.length === 0) {
        return (
            <div className='list'>
                <span className='listTitle'>{title}</span>
                <div className='wrapper'>
                    <div className="container" style={{ marginLeft: '50px', color: 'white' }}>
                        Loading...
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='list'>
        <span className='listTitle'>{title}</span>

        <div className='wrapper'>
            <ArrowBackIosOutlined 
                className='sliderArrow left' 
                onClick={ () => handleClick( 'left' )} 
                style={{ display: !isMoved && 'none'}}
            />
            <div className="container" ref={listRef}>
                {items.map((item, index) => (
                    <div key={item.id} className="listItem">
                        <img 
                            src={getImageUrl(item.poster_path)} 
                            alt={item.title || item.name}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
                            }}
                        />
                        <div className="itemInfo">
                            <h3>{item.title || item.name}</h3>
                            <div className="itemInfoTop">
                                <span className="rating">{item.vote_average?.toFixed(1)}</span>
                                <span className="year">
                                    {item.release_date?.split('-')[0] || item.first_air_date?.split('-')[0]}
                                </span>
                            </div>
                            <div className="desc">{item.overview?.substring(0, 150)}...</div>
                            <button
                                className={myListIds.includes(item.id) ? 'mylist-btn added' : 'mylist-btn'}
                                onClick={() => handleMyList(item)}
                            >
                                {myListIds.includes(item.id) ? 'Remove from My List' : 'Add to My List'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={ () => handleClick( 'right' )} />
        </div>
        </div>
  )
}
