import React from 'react';
import { Link } from 'react-router-dom'
import rightPointer from '../images/RightPointing.png'

// break points and media queries. 
const Header = () => {
  return (
    <div className='header'> 
        <div className='header-stuff__container'>
          <Link to='/'>
            <img className='pointer-image' src={rightPointer} alt=''/>
            <div id='header__text'>{'Movie Rate-I-fier'}</div> 
          </Link>
        </div>
    </div>
  )
}

export default Header;
