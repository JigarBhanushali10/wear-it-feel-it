import React from 'react'

function Footer() {
  return (
    <div className='py-5 w-75 mx-auto container '>
      <div className='row'>
        <div className='col-12 col-lg-4'>

          <h4 className='text-uppercase text-white mb-3'>
            wear it feel it
          </h4>
          <p className='text-muted'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident distinctio doloremque quia, minima expedita mollitia nam non optio saepe culpa eos vitae voluptatum aspernatur quas repellendus dicta iure ab. Vitae?
          </p>
        </div>
        <div className='col-12 col-lg-4'>

          <h4 className='text-uppercase text-white mb-3'>
            Links
          </h4>
          <nav className='row flex-wrap text-muted g-4 text-nowrap'>
            
          <span className='col-12 col-sm-4'>
            National Jerseys
          </span>
          <span className='col-12 col-sm-4'>
            T&C
          </span>
          <span className='col-12 col-sm-4'>
            FAQ
          </span>
          <span className='col-12 col-sm-4'>
          Club Jerseys

          </span>
          <span className='col-12 col-sm-4'>
            Contact Us
          </span>
          <span className='col-12 col-sm-4'>
            About Us
          </span>
          </nav>
        </div>
        <div className='col-12 col-lg-4'>

          <h4 className='text-uppercase text-white mb-3'>
            Social media
          </h4>
          <nav className='text-light d-flex justify-content-between fs-4'>
            <span className="icon-instagram rounded-circle border border-2  border-secondary p-3"></span>
            <span className="icon-linkedin rounded-circle border border-2  border-secondary p-3"></span>
            <span className="icon-facebook rounded-circle border border-2  border-secondary p-3"></span>
            <span className="icon-twitter rounded-circle border border-2  border-secondary p-3"></span>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer