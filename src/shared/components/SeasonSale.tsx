import React from 'react'
const saleImage = require('../../assets/images/messi7.png')

const SeasonSale = () => {
    return (
        <div className='row'>
            <div className='col-md-6 d-flex justify-content-center text-center align-items-center'>
                messi
            </div>
            <div className='col-md-6'>
                <figure>
                    <img src={saleImage} alt=""  className='img-fluid'/>
                </figure>
            </div>
        </div>
    )
}

export default SeasonSale