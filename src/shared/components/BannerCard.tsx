import React from 'react'

const BannerCard = (props:any) => {
  return (
    <div className={`${props.bannerClass} d-flex shine rounded-3`}>
          <div className='card-details d-flex align-items-center justify-content-center  text-center flex-column px-md-5'>
            <span className='text-primary fw-bold'>Get {props.discount}% Off</span>
            <h2>{props.bannerTitle}</h2>
            <a href="#" rel="nofollow" className='text-decoration-none'> &gt;Shop Now</a>
          </div>
          <figure className='banner-image-container m-0 '>
            <img className='img-fluid' src={props.bannerPhoto}  alt="Fifa tshirt" />
          </figure>
        </div>
  )
}

export default BannerCard