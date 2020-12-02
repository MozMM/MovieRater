import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <div>{'Nothing over here...'}</div> 
      <Link to='/'>
        <div>{'Return to Search'}</div>
      </Link>
    </div>
  )
}

export default NotFoundPage;