import React from 'react'
const saleImage = require('../../assets/images/8.jpg')



const SeasonSale = () => {
    return (
        <div className='row'>
            <div className='col-md-6 d-flex flex-column justify-content-center '>
                <div className='my-4'>

                    <div className="text-primary fw-bold py-3">
                        Featured Product
                    </div>
                    <h2>
                        MESSI ARGENTINA AWAY AUTHENTICATED JERSEY
                    </h2>
                    <span className='text-muted'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus autem obcaecati, dolorum ratione ullam voluptatibus illum eligendi assumenda libero.
                    </span>
                </div>
                <div className='my-4'>

                    <div className='d-flex align-items-center'>
                        <span className='mx-3 text-primary fw-bolder fs-1'>
                            ₹4999
                        </span>
                        <span className='mx-3 fs-4'> <s>₹5999</s></span>
                        <button className='mx-3 btn btn-primary rounded-pill px-4 py-2 fs-5'>Buy Now</button>
                    </div>
                </div>
                <div className='my-4'>
                    <div className='fw-bold'>Ends in</div>
                    <div className='d-flex align-items-baseline'>
                        <div className='mx-3 d-flex flex-column align-items-center'>
                            <div className='timer d-flex justify-content-center align-items-center rounded-circle bg-white fs-2'>
                                <span>
                                    11
                                </span>
                            </div>
                            <div>
                                DAYS
                            </div>

                        </div>
                        <div>
                            :
                        </div>
                        <div className='mx-3 d-flex flex-column align-items-center'>
                            <div className='timer d-flex justify-content-center align-items-center rounded-circle bg-white fs-2'>
                                <span>
                                    23
                                </span>
                            </div>
                            <div>
                                HRS
                            </div>

                        </div>
                        <div>
                            :
                        </div>
                        <div className='mx-3 d-flex flex-column align-items-center'>
                            <div className='timer d-flex justify-content-center align-items-center rounded-circle bg-white fs-2'>
                                <span>
                                    58
                                </span>
                            </div>
                            <div>
                                MINS
                            </div>

                        </div>
                        <div>
                            :
                        </div>
                        <div className='mx-3 d-flex flex-column align-items-center'>
                            <div className='timer d-flex justify-content-center align-items-center rounded-circle bg-white fs-2'>
                                <span>
                                    21
                                </span>
                            </div>
                            <div>
                                SECS
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6'>
                <figure className='seasonSaleProductImageCntainer px-5'>
                    <img src={saleImage} alt="" className='img-fluid px-5' />
                </figure>
            </div>
        </div>
    )
}

export default SeasonSale