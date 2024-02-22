import React from 'react'

const TopProCard = ({ productImg, productName }) => {
    return (
        <div className='w-350px] h-350px] flex items-center justify-center relative group'>
            <img className='w-[350px] h-[300px] hover:scale-105 duration-300' src={productImg} />
            <p className='z-40 uppercase absolute bottom-[10%] bg-white text-xl w-[50%] text-center text-gray-700 px-6 py-2 shadow group-hover:text-white duration-300 group-hover:bg-blue-600 cursor-pointer'>{productName}</p>
        </div>
    )
}

export default TopProCard
