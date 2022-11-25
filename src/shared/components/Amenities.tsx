import React from 'react'

function Amenities() {
    return (
        <div className=' row mx-auto my-5'>
            <div className="d-flex  col-md-6 col-lg-3 ">
                
                <span className="amenities-icon text-primary icon-truck"></span>
                <div className='ms-3'>
                    <h4 >Free Shipping</h4>
                    <p className='mt-1 text-muted'>Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
            </div>
            <div className="d-flex  col-md-6 col-lg-3">
                
                <span className="amenities-icon text-primary icon-credit-card"></span>
                <div className='ms-3'>
                    <h4 >Secure Payment</h4>
                    <p className='mt-1 text-muted'>Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
            </div>
            <div className="d-flex  col-md-6 col-lg-3">
                
                <span className="amenities-icon text-primary icon-package"></span>
                <div className='ms-3'>
                    <h4 >Easy Return</h4>
                    <p className='mt-1 text-muted'>Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
            </div>
            <div className="d-flex  col-md-6 col-lg-3">
                
                <span className="amenities-icon text-primary icon-clock"></span>
                <div className='ms-3'>
                    <h4 >27/7 Support</h4>
                    <p className='mt-1 text-muted'>Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
            </div>

        </div>
    )
}

export default Amenities