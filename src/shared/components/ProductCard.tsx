import React from 'react'

export const scrollsection=((ref:any)=>ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))

function ProductCard() {
    return (
        <div className='product-card-container' >
            <figure className='product-img-container d-flex  position-relative'>
                <img className='img-fluid' src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8fecaae3166e428b9cf0ae830109e23e_9366/Argentina_22_Home_Jersey_White_HF2158_21_model.jpg" alt="argentina jersey" />
                <img className='img-fluid' src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c765f60a9317428c80eaae830109f3ab_9366/Argentina_22_Home_Jersey_White_HF2158_23_hover_model.jpg" alt="argentina jersey" />
                <div className='product-card-controls position-absolute d-flex justify-content-around align-items-center fs-5 w-100 px-5 text-primary'>
                    <span className="icon-cart p-2 p-md-3 ms-4 ms-sm-5 rounded-circle bg-white"></span>
                    <span className="icon-zoom-in p-2 p-md-3 rounded-circle bg-white"></span>
                    <span className="icon-heart p-2 p-md-3 me-4 me-sm-5 rounded-circle bg-white"></span>
                </div>
                <span className='product-card-price text-primary position-absolute ms-1 fw-bold bg-secondary rounded-1 p-1'>
                    ₹4999.00
                </span>
            </figure>
            <div>
                <h5>
                    Argentina Home 2022/23
                </h5>
                <span className='text-muted'>
                    Fan version
                </span>

            </div>

        </div>
    )
}

export default ProductCard