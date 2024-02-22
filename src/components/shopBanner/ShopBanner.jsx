import React from 'react'
import deal from "/src/assets/deal.png"
import sale from "/src/assets/sale.png"

const ShopBanner = () => {
    return (
        <div className='w-full h-[50vh] overflow-hidden'>
            <img className='hidden md:block w-full h-[60vh] overflow-hidden' src={deal} />
            <img className='md:hidden w-full  overflow-hidden' src={sale} />
        </div>
    )
}

export default ShopBanner
