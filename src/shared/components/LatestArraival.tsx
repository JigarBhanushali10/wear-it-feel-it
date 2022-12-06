import ProductCard from './ProductCard'
import { CartContext } from '../contexts/CartContext'
import { useContext } from 'react'

function LatestArraival() {

const {products} = useContext(CartContext)
    return (
        <div className='py-5'>
            <h3>Latest Arraivals</h3>
            <span className='text-muted'>Fifa season Latest Jerseys</span>
            <div className='row g-3 my-4 justify-content-center'>
                {products.map((item:any)=>{
                    return ( <div className=' col-sm-6 col-lg-3 ' key={item.id}>
                    <ProductCard id={item.id} jersey1={item.jersey1} jersey2={item.jersey2} price={item.price} productName={item.productName} quantity={item.quantity} />
                </div> )
                })}
            </div>
        </div>
    )
}

export default LatestArraival