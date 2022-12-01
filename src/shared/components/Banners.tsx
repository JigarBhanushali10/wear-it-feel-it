import React from 'react'
import img1 from '../../assets/images/9.png'
import img2 from '../../assets/images/11.png'
import img3 from '../../assets/images/messi4.png'
import img4 from '../../assets/images/12.png'
import img5 from '../../assets/images/1.png'
import img6 from '../../assets/images/7.png'
import BannerCard from './BannerCard'

const bannerCard = [

  {
    id: 1,
    image: img1,
    discount: '30',
    productName: 'Germany Away 2022/23',
    bannerClass: 'card1'


  },
  {
    id: 2,
    image: img2,
    discount: '40',
    productName: 'Portugal Home 2022/23',
    bannerClass: 'card2'

  },
  {
    id: 3,
    image: img3,
    discount: '30',
    productName: 'Argentina Home 2022/23',
    bannerClass: 'card3'

  },
  {
    id: 4,
    image: img4,
    discount: '50',
    productName: 'Brazil Home 2022/23',
    bannerClass: 'card4'
  },
  {
    id: 5,
    image: img5,
    discount: '50',
    productName: 'Korea Home 2022/23',
    bannerClass: 'card5'
  },
  {
    id: 6,
    image: img6,
    discount: '50',
    productName: 'Belgium Home 2022/23',
    bannerClass: 'card6'
  },

]


function Banners() {
  return (
    <div className='banner-container container row py-5 mx-auto'>
      <div className="grid-container">
        {bannerCard.map((item: any) => {
          return (
            <BannerCard key={item.id} bannerClass={item.bannerClass} bannerPhoto={item.image} discount={item.discount} bannerTitle={item.productName} />
          )
        })}

      </div>

    </div>
  )
}

export default Banners