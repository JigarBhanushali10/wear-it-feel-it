import React from 'react'
import wallpaperImage1 from '../assets/images/home1wallpaper1.png'
import Amenities from '../shared/components/Amenities'
import LatestArraival from '../shared/components/LatestArraival'

function Home() {

  return (
    <div className='flex-grow-1'>
      {/* hero section */}
      <section className=' bg-secondary '>
        <div className=' container row pt-4 mx-auto'>
          <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-xxl-end align-items-center">
            {/* slider headings and button */}
            <div className='text-center text-md-start '>
              <h3 className='slider-heading-1 text-uppercase text-primary' >
                Fifa Sale is on
              </h3>
              <h2 className='slider-heading-2'>
                Discover Latest Club & Country Jerseys
              </h2>
              <button className='btn btn-outline-primary px-lg-5 py-lg-3 mt-4 fs-lg-4 rounded-pill '>
                Explore Now
              </button>
            </div>
          </div>
          {/* slider image*/}
          <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-xxl-start align-items-center">
            <figure className='wallpaper-img-container m-0 overflow-hidden d-flex justify-content-center'>
              <img src={wallpaperImage1} alt="football jersey" className='wallpaper-img-1' />
            </figure>
          </div>
        </div>
      </section>
      <section className='amenities '>
        <div className='container'>
          <Amenities />
        </div>
      </section>
      <section className='last-arraivals '>
        <div className='container'>
          <LatestArraival />
        </div>
      </section>

    </div>
  )
}

export default Home