import { useRef } from 'react';
import wallpaperImage1 from '../assets/images/home1wallpaper1.png';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import Amenities from '../shared/components/Amenities';
import Banners from '../shared/components/Banners';
import LatestArraival from '../shared/components/LatestArraival';
import { scrollsection } from '../shared/components/ProductCard';
import SeasonSale from '../shared/components/SeasonSale';

const Home = () => {
  const myRef = useRef<HTMLDivElement>(null);

  return (
    <div className='flex-grow-1'>
      {/* hero section */}
      <section className='mpy-5 bg-secondary '>
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
      <section className='my-5 amenities '>
        <div className='container'>
          <Amenities />
        </div>
      </section>
      <section className='my-5 last-arraivals '>
        <div className='container ' ref={myRef}>
          <LatestArraival />
        </div>
      </section>
      <section className='my-5 banners-section'>
        <Banners />
      </section>
      <section className='my-5 bg-info my-4'>
        <div className='container'>
          <SeasonSale />
        </div>
      </section>
      <section className='my-5 last-arraivals '>
        <div className='container ' ref={myRef}>
          <LatestArraival />
        </div>
      </section>
      <section className='slider'>
        <div className='container'>
          <div className='product-card-container' >
            <figure className='product-img-container d-flex  position-relative'>
              <img className='img-fluid' src={img1} alt="argentina jersey" />
              <img className='img-fluid' src={img2} alt="argentina jersey" />
              <img className='img-fluid' src={img3} alt="argentina jersey" />
            </figure>

          </div>
          {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item d-block">
                <img className="d-block w-100" src={img1} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={img2} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={img3} alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default Home