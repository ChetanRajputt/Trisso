import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

const ProductCard = ({ productImage, productName, productPrice }) => {
    return (
        <div className='h-[430px] w-[330px] md:h-[415px] md:w-[260px] overflow-hidden relative group hover:opacity-95 '>
            <div className='overflow-hidden'>
                <img className='h-[410px] w-[330px] md:h-[350px] md:w-[260px]' src={productImage} />
            </div>

            <div className=' pt-3'>
                <h2 className='font-bold text-[18px] text-gray-500'>{productName}</h2>
                <p className='font-bold text-[16px] text-gray-500'>₹ {productPrice}</p>
            </div>

            <div className='absolute group-hover:bottom-12 bottom-[-100%] duration-500  h-[350px] w-[330px] md:w-[260px] flex flex-col items-center '>
                <div className='flex justify-end items-center w-[220px]'>
                    <AiFillHeart size={30} className='text-slate-800 hover:text-orange-500 duration-400' />
                </div>
                <div className='mt-[80%] md:mt-[95%]  group-hover:bottom-2: w-[60%] text-center uppercase font-bold rounded-3xl text-white px-6 py-3 md:py-2 bg-slate-900 cursor-pointer hover:bg-sky-500 duration-300'>
                    Add to Cart
                </div>
            </div>

        </div>
    )
}

export default ProductCard
