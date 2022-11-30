import { useRef } from 'react';
import wallpaperImage1 from '../assets/images/home1wallpaper1.png';
import Amenities from '../shared/components/Amenities';
import Banners from '../shared/components/Banners';
import LatestArraival from '../shared/components/LatestArraival';
import { LoginVideo } from '../shared/components/LoginVideo';
import { scrollsection } from '../shared/components/ProductCard';
import SeasonSale from '../shared/components/SeasonSale';

const Home = () => {
  const myRef = useRef<HTMLDivElement>(null);

  return (
    <div className='flex-grow-1'>
      {/* hero section */}
      <section className=' py-5 bg-secondary '>
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
              <button className='btn btn-outline-primary px-lg-5 py-lg-3 mt-4 fs-lg-4 rounded-pill ' onClick={() => scrollsection(myRef)}>
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
      <section className='py-5 amenities '>
        <div className='container'>
          <Amenities />
        </div>
      </section>
      <section className='py-5 last-arraivals '>
        <div className='container' ref={myRef}>
          <LatestArraival />
        </div>
      </section>
      <section className='py-5 banners-section'>
        <Banners />
      </section>
      <section className='my-5 bg-info my-4'>
        <div className='container'>
        <SeasonSale/>
        </div>
      </section>
    </div>
  )
}

export default Home