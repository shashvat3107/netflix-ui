import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import './list.scss'
import Listitem from '../listitem/Listitem'
import { useRef, useState } from 'react'

export default function List({ title }) {
    //for sliding the list (abhi list index 0 ke piche jaa rhi thi and last movie ke aage bhi slide ho rha tha to we have to change that)
    const[slideNumber , setSlideNumber] = useState(0);

    //for the slider button to disappear
    const[isMoved , setisMoved] = useState(false);

    //using React Hook to create Slider
    const listRef = useRef()
    
    const handleClick = (direction) => {
        setisMoved(true);
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
                <Listitem index={0}/>
                <Listitem index={1}/>
                <Listitem index={2}/>
                <Listitem index={3}/>
                <Listitem index={4}/>
                <Listitem index={5}/>
                <Listitem index={6}/>
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={ () => handleClick( 'right' )} />
        </div>
        </div>
  )
}
