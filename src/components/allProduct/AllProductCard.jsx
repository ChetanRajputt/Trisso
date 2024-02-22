import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const AllProductCard = ({ productId, productName, productPrice, currentPrice, productImg }) => {
    return (
        <Link to={`/productdetails/${productId}`} ><div className='w-[250px] h-[400px] bg-white  rounded shadow group duration-500 relative overflow-hidden'>
            <img className='w-full h-[300px] blur-img' src={productImg} />
            <div className='px-4 py-2 text-gray-800'>
                <h2 className='text-xl'>{productName.substring(0, 18)}...</h2>
                <p className='font-bold  flex items-center'><MdCurrencyRupee size={20} /><span className='text-xl'>{currentPrice}</span> <strike className='ml-4 font-bold flex items-center text-gray-500' ><MdCurrencyRupee size={20} /><span className='text-xl'>{productPrice * 2}</span></strike></p>
                <p>Size S, M, L, XL, XXL</p>
            </div>
            <div className='absolute top-7 duration-500 flex justify-end pr-4 w-full'>
                <AiFillHeart className='text-3xl text-gray-500 hover:text-red-600 duration-300 hover:animate-pulse' />
            </div>

            <div className='absolute group-hover:bottom-16 -bottom-20 duration-500 flex justify-center w-full'>
                <button className='bg-red-600 hover:bg-emerald-500 duration-300 shadow px-10 w-full py-2 mb-8 font-bold text-white rounded-full'>Add to Cart</button>
            </div>
        </div>
        </Link>
    )
}

export default AllProductCard
