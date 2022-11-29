import React from 'react'

export const scrollsection=((ref:any)=>ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))

function ProductCard(props:any) {
    return (
        <div className='product-card-container' >
            <figure className='product-img-container d-flex  position-relative'>
                <img className='img-fluid' src={props.jersey1} alt="argentina jersey" />
                <img className='img-fluid' src={props.jersey2} alt="argentina jersey" />
                <div className='product-card-controls position-absolute d-flex justify-content-around align-items-center fs-5 w-100 px-5 text-primary'>
                    <span className="icon-cart p-2 p-md-3 ms-4 ms-sm-5 rounded-circle bg-white"></span>
                    <span className="icon-zoom-in p-2 p-md-3 rounded-circle bg-white"></span>
                    <span className="icon-heart p-2 p-md-3 me-4 me-sm-5 rounded-circle bg-white"></span>
                </div>
                <span className='product-card-price text-primary position-absolute ms-1 fw-bold bg-secondary rounded-1 p-1'>
                    ₹{props.price}
                </span>
            </figure>
            <div>
                <h5>
                   {props.productName}
                </h5>
                <span className='text-muted'>
                    Fan version
                </span>

            </div>

        </div>
    )
}

export default ProductCard