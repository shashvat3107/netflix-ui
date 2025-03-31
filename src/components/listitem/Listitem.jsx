import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import './listitem.scss' 
import { useState } from 'react'

export default function Listitem({index}) {
  const [isHovered , setIsHovered] = useState(false);
  const trailer = 'https://www.youtube.com/watch?v=8FkLRUJj-o0&ab_channel=T-Series';
  return (
    <div className='listItem' 
      style={{left: isHovered && index * 225 - 50 + index * 2.5}}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}>
        <img src="https://stat4.bollywoodhungama.in/wp-content/uploads/2023/12/Animal-1.jpg" 
        alt="" 
        />
        {isHovered && (
          <>
          <video src ={trailer} autoPlay={true} loop />
            <div className="itemInfo">
            <div className="icons">
              <PlayArrow className='icon'/>
              <Add className='icon'/>
              <ThumbUpAltOutlined className='icon'/>
              <ThumbDownAltOutlined className='icon'/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 min</span>
              <span className='limit'>+18</span>
              <span>2023</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing e
              lit. Consequuntur, magnam officiis repellendus tenetur 
              magni saepe consectetur provident ipsa a?
            </div>
            <div className="genre">Action</div>
          </div>
          </>
        )}
        
      
    </div>
  )
}
