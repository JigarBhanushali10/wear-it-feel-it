import React from 'react'
import wallpaperImage1 from '../assets/images/home1wallpaper1.png'

function Home() {
  
  return (
    <div className='flex-grow-1'>
      <div className=' bg-secondary row'>
        <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center">
          <div>
            <h3 className='text-uppercase'>
              Fifa Sale is on
            </h3>
            <h2>
              Discover Latest Jerseys
            </h2>
            <button className='btn btn-primary rounded-pill '>
              Explore Now
            </button>
          </div>
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center">
          <figure className='m-0'>
            <img src={wallpaperImage1} alt="football jersey" />
          </figure>
        </div>
      </div>
      {/* <div className='amenity'>
        amenity
      </div> */}
    </div>
  )
}

export default Home