import React from 'react'
import TopProCard from './TopProCard'

const TopProduct = () => {
    return (
        <div className='flex flex-wrap items-center gap-10 justify-center mt-[50px]'>
            <TopProCard productImg="https://preview.colorlib.com/theme/fashe/images/banner-05.jpg" productName="sunglasses" />
            <TopProCard productImg="https://preview.colorlib.com/theme/fashe/images/banner-03.jpg" productName="watches" />
            <TopProCard productImg="https://preview.colorlib.com/theme/fashe/images/banner-04.jpg" productName="bags" />
        </div>
    )
}

export default TopProduct
