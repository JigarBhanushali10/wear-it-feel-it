import React from 'react';
import svg from '../../assets/images/WIFI.svg'

function Header() {
  return (
    <div className='d-flex justify-content-between align-items-center mt-3 px-5 mx-5 '>
      <div className=''>
        <h2 className='text-uppercase'>
         wear it feel it  
        </h2>
      </div>
      <div className='d-flex fs-5 '>
        <span className='border border-dark border-end-0  d-flex justify-content-center align-items-center'>
          <span className=" mx-3 icon-search fs-4 text-secondary"></span>
        </span>
        <input type="text" name="globalSearch" id="globalSearch" className='me-2 border-dark border-start-0  text-secondary' placeholder='search for club or national jersey' style={{ width: '400px' }} />
        <span className='mx-2 d-flex justify-content-center align-items-center'>
          <span>Wishlist</span>
        </span>
        <span className='mx-2 d-flex justify-content-center align-items-center'>
          <span>Cart</span>
        </span>
        <button className='btn btn-dark rounded-0 mx-2 px-5 py-3'>LOGIN</button>
      </div>
    </div>
  )
}

export default Header