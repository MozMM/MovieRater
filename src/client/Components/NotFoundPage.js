import React from 'react';
import { Link } from 'react-router-dom';
import turtle from '../images/Turtle.jpg';

const NotFoundPage = () => {
  return (
    <div className='notFound-message-container'>
      <img src={turtle} alt=''/>
      <div > 
        <div className='notFound__text'>{'Nothing over here...'}</div> 
        <Link to='/'>
          <button
          className='__button'
          >
          {'Back to Search'}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage;
