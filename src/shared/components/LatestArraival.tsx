import React from 'react'
import ProductCard from './ProductCard'

function LatestArraival() {
    const jerserysArry = [

        {
            id: 1,
            jersey1: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6d7a57705c594308b12bae88012a8215_9366/Germany_Pre-Match_Jersey_Black_HC1286_25_model.jpg',
            jersey2: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2c7b7cbcdc0f4c42809aae88012a7563_9366/Germany_Pre-Match_Jersey_Black_HC1286_23_hover_model.jpg',
            price:'4999.00',
            productName:'Germany Away 2022/23'

        },
        {
            id: 2,
            jersey1: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8fecaae3166e428b9cf0ae830109e23e_9366/Argentina_22_Home_Jersey_White_HF2158_21_model.jpg',
            jersey2: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c765f60a9317428c80eaae830109f3ab_9366/Argentina_22_Home_Jersey_White_HF2158_23_hover_model.jpg',
            price:'7999.00',
            productName:'Argentina Home 2022/23'

        },
        {
            id: 3,
            jersey1: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/440d42fefb764d8f97f9aed2011e1685_9366/Germany_Tiro_23_Training_Jersey_Red_HF3990_21_model.jpg',
            jersey2: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a8b820e2805e4c00bf41aed2011e1e98_9366/Germany_Tiro_23_Training_Jersey_Red_HF3990_23_hover_model.jpg',
            price:'2799.00',
            productName:'Germany Home 2022/23'

        },
        {
            id: 4,
            jersey1: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9f63b43565544975bb1bae99012ddfdd_9366/Belgium_22_Home_Jersey_Red_HD9412_22_model.jpg',
            jersey2: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eec0db7b8349444f87aeae99012de913_9366/Belgium_22_Home_Jersey_Red_HD9412_23_hover_model.jpg',
            price:'4999.00',
            productName:'Belgium Home 2022/23'
        },

    ]
    return (
        <>
            <h3>Latest Arraivals</h3>
            <span className='text-muted'>Fifa season Latest Jerseys</span>
            <div className='row g-3 my-4'>
                {jerserysArry.map((item:any)=>{
                    return ( <div className=' col-sm-6 col-lg-3 ' key={item.id}>
                    <ProductCard jersey1={item.jersey1} jersey2={item.jersey2} price={item.price} productName={item.productName}  />
                </div> )
                })}
            </div>
        </>
    )
}

export default LatestArraival