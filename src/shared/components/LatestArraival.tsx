import React from 'react'
import ProductCard from './ProductCard'

function LatestArraival() {
    return (
        <>
            <h3>Latest Arraivals</h3>
            <span className='text-muted'>Fifa season Latest Jerseys</span>
            <div className='row g-3 my-4'>

                <div className=' col-sm-6 col-xl-3 '>
                    <ProductCard />
                </div>
                <div className=' col-sm-6 col-xl-3 '>
                    <ProductCard />
                </div>
                <div className=' col-sm-6 col-xl-3 '>
                    <ProductCard />
                </div>
                <div className=' col-sm-6 col-xl-3 '>
                    <ProductCard />
                </div>
            </div>
        </>
    )
}

export default LatestArraival