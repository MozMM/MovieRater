import React from 'react';
import { Link } from 'react-router-dom';
import turtle from '../images/Turtle.jpg';

const NotFoundPage = () => {
  return (
    <div className='animal-message-container'>
      <img src={turtle} alt=''/>
      <div className='animal__text'> 
        <div>{'Nothing over here...'}</div> 
        <Link to='/'>
          <div>{'Return to Search'}</div>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage;
