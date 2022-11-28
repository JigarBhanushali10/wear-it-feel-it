import React from 'react'
import wallpaperImage1 from '../../assets/images/home1wallpaper1.png'


function Banners() {
  return (
    <div className=' container row pt-4 mx-auto'>
    <div className="col-12 col-sm-6 col-lg-4 ">
      <div className='d-flex bg-secondary my-3'>
        <div className='ps-2 pt-2 ps-lg-5 pt-lg-5'>
          <span className='text-primary'>Get 40% Off</span>
          <h4>Man's Latest Collection</h4>
          <a href="#" rel="nofollow" className='text-decoration-none'> &gt;Shop Now</a>
        </div>
        <figure className='banner-image-container m-0 '>
          <img className='img-fluid' src={wallpaperImage1} alt="" />
        </figure>
      </div>
      <div className='bg-secondary my-3'>

        <figure className='banner-image-container m-0'>
          <img className='img-fluid' src={wallpaperImage1} alt="" />
        </figure>
        <div className='text-center pt-2 pt-lg-5'>
          <span className='text-primary'>Get 40% Off</span>
          <h3>Man's Latest Collection</h3>
          <a href="#" rel="nofollow" className='text-decoration-none'> &gt;Shop Now</a>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-6 col-lg-4">
      <div className='bg-secondary my-3'>
        <div className='text-center pt-2 pt-lg-5'>
          <span className='text-primary'>Get 40% Off</span>
          <h3>Man's Latest Collection</h3>
          <a href="#" rel="nofollow" className='text-decoration-none'> &gt;Shop Now</a>
        </div>
        <figure className='banner-image-container m-0'>
          <img className='img-fluid' src={wallpaperImage1} alt="" />
        </figure>

      </div>

      <div className='d-flex bg-secondary my-3'>
        <div className='ps-2 pt-2 ps-lg-5 pt-lg-5'>
          <span className='text-primary'>Get 40% Off</span>
          <h4>Man's Latest Collection</h4>
          <a href="#" rel="nofollow" className='text-decoration-none'> &gt;Shop Now</a>
        </div>
        <figure className='banner-image-container m-0 '>
          <img className='img-fluid' src={wallpaperImage1} alt="" />
        </figure>
      </div>

    </div>
    <div className="col d-flex  flex-column flex-sm-row flex-lg-column">
      <div className='d-flex bg-secondary my-3'>
        <div className='ps-2 pt-2 ps-lg-5 pt-lg-5'>
          <span className='text-primary'>Get 40% Off</span>
          <h4>Man's Latest Collection</h4>
          <a href="#" rel="nofollow" className='text-decoration-none'> &gt;Shop Now</a>
        </div>
        <figure className='banner-image-container m-0 '>
          <img className='img-fluid' src={wallpaperImage1} alt="" />
        </figure>
      </div>

      <div className='bg-secondary my-3'>
        <div className='text-center pt-2 pt-lg-5'>
          <span className='text-primary'>Get 40% Off</span>
          <h3>Man's Latest Collection</h3>
          <a href="#" rel="nofollow" className='text-decoration-none'> &gt;Shop Now</a>
        </div>
        <figure className='banner-image-container m-0'>
          <img className='img-fluid' src={wallpaperImage1} alt="" />
        </figure>

      </div>

    </div>

  </div>
  )
}

export default Banners