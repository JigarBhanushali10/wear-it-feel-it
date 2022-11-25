import React from 'react'
/**
 * @name Footer
 * @returns FooterJSX
 */
function Footer() {
  return (
    <div className='py-5 container '>
      <div className='row'>
        <div className='col-12 col-lg-4'>
          {/* brand name/logo */}
          <h4 className='text-uppercase text-white mb-3'>
            wear it feel it
          </h4>
          {/* brand description */}
          <p className='text-muted'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident distinctio doloremque quia, minima expedita mollitia nam non optio saepe culpa eos vitae voluptatum aspernatur quas repellendus dicta iure ab. Vitae?
          </p>
        </div>
        <div className='col-12 col-lg-4'>

          {/* nav links*/}
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
          {/* social media links*/}
          <h4 className='text-uppercase text-white mb-3'>
            Social media
          </h4>
          <nav className='text-light d-flex w-75 '>
            <a  href='/#' className="icon-instagram rounded-circle border border-2  border-secondary p-2 me-3 text-decoration-none link-light"></a>
            <a  href='/#' className="icon-linkedin rounded-circle border border-2  border-secondary p-2 me-3 text-decoration-none link-light"></a>
            <a  href='/#' className="icon-facebook rounded-circle border border-2  border-secondary p-2 me-3 text-decoration-none link-light"></a>
            <a  href='/#' className="icon-twitter rounded-circle border border-2  border-secondary p-2 me-3 text-decoration-none link-light"></a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer