import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

export default function Featured({type}) {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>
                    {type === 'movie' ? 'Movies' : 'Series'} 
                </span>
                <select name='genre' id='genre'>
                    <option value='adventure'>Adventure</option>
                    <option value='animation'>Animation</option>
                    <option value='comedy'>Comedy</option>
                    <option value='crime'>Crime</option>
                    <option value='documentart'>Documentary</option>
                    <option value='drama'>Drama</option>
                    <option value='fantasy'>Fantasy</option>
                    <option value='historical'>Historical</option>
                    <option value='horror'>Horror</option>
                    <option value='romance'>Romance</option>
                    <option value='sci-fi'>Sci-fi</option>
                    <option value='thriller'>Thriller</option>
                    <option value='western'>Western</option>
                </select>
            </div>
        )}
      <img src='https://images4.alphacoders.com/118/thumb-1920-1185748.jpg' 
      alt='' 
      />
      <div className="info">
        <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" 
        alt="" 
        />
        <span className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, iusto numquam expedita dolorum distinctio dolor 
            pariatur? Asperiores aspernatur, 
            id eum commodi ipsam dignissimos praesentium. Tempore cupiditate enim a nam repellat.
        </span>
        <div className="buttons">
            <button className='play'>
                <PlayArrow />
                <span>Play</span>
            </button>
            <button className='more'>
                <InfoOutlined />
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  )
}
