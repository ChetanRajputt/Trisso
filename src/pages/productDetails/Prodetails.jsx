import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { MdCurrencyRupee, MdShoppingCart } from "react-icons/md";
import { AiFillStar } from 'react-icons/ai'
import { BiSolidPurchaseTag } from 'react-icons/bi'
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';


const Prodetails = () => {
    const { productId } = useParams();
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState([]);

    const [dataLoad, setDataLoad] = useState(false);

    const getProducts = async () => {
        setLoading(true)
        try {
            const res = await fetch(`https://dummyjson.com/products/${productId}`)
            const data = await res.json();
            // console.log(data);
            setLoading(false)
            setDataLoad(true)
            setData(data)
            setFullImage(data.images[0])
        } catch (error) {
            // alert(error)
            setDataLoad(false)
            // console.log(error);
            setData()
        }
    }

    useEffect(() => {
        getProducts()
    }, [])



    const [fullImage, setFullImage] = useState("");


    return (
        // {{productId} }
        <div className='flex flex-col md:flex-row  items-center w-[90%] mx-auto py-4 my-4'>
            {
                loading ? <div className='flex items-center justify-center w-full h-[70vh]'><BeatLoader size={20} /> </div>
                    :
                    <>
                        <div className='flex flex-col-reverse md:flex-row gap-5 items-center md:w-1/2'>
                            <div className='flex flex-row md:flex-col items-center gap-5 md:gap-2 '>
                                <img onClick={(e) => setFullImage(data.images[0])} className='w-[60px] rounded border-2 border-blue-500' src={dataLoad ? data.images[0] : ""} />
                                <img onClick={(e) => setFullImage(data.images[1])} className='w-[60px]  rounded' src={dataLoad ? data.images[1] : ""} />
                                <img onClick={(e) => setFullImage(data.images[2])} className='w-[60px]  rounded' src={dataLoad ? data.images[2] : ""} />
                                <img onClick={(e) => setFullImage(data.images[3])} className='w-[60px]  rounded' src={dataLoad ? data.images[3] : ""} />
                            </div>
                            <div>
                                <img className='h-[300px] md:h-[450px]  rounded-sm' src={fullImage} />
                            </div>
                        </div>

                        <div className='w-full  flex flex-col gap-2 mt-6 md:mt-0 md:ml-10 '>
                            <h1 className='text-sm md:text-2xl font-bold'>{data.title}</h1>
                            <p className='flex items-center font-bold text-2xl md:text-3xl'><MdCurrencyRupee />{data.price}<strike className="flex items-center ml-2 text-gray-500 text-xl"><MdCurrencyRupee />{data.price * 2}</strike></p>
                            <p className='flex justify-center items-center font-semibold bg-blue-600 rounded-full text-xl  text-white w-[20%] md:w-[12%]'>{data.rating}<AiFillStar className='ml-1' /></p>

                            <div className='flex gap-4 items-center my-3'>
                                <h2 className='text-xl text-gray-600'>Size</h2>
                                <span className='p-3 md:px-4 md:py-2 font-semibold border-2 mr-1 md:mr-2 md:text-xl rounded-full md:rounded-none cursor-pointer'>S</span>
                                <span className='p-3 md:px-4 md:py-2 font-semibold border-2 mr-1 md:mr-2 md:text-xl rounded-full md:rounded-none cursor-pointer'>M</span>
                                <span className='p-3 md:px-4 md:py-2 font-semibold border-2 mr-1 md:mr-2 md:text-xl rounded-full md:rounded-none cursor-pointer'>L</span>
                                <span className='p-3 md:px-4 md:py-2 font-semibold border-2 mr-1 md:mr-2 md:text-xl rounded-full md:rounded-none cursor-pointer'>XL</span>
                                <span className='p-3 md:px-4 md:py-2 font-semibold border-2 mr-1 md:mr-2 md:text-xl rounded-full md:rounded-none cursor-pointer'>XXL</span>
                            </div>

                            <div className='flex flex-col md:flex-row items-center gap-5'>
                                <button className='uppercase bg-orange-500 duration-300 hover:bg-orange-600   w-[80%] md:w-[40%] py-4  text-xl rounded text-white flex items-center justify-center'><MdShoppingCart size={20} className='mr-2' /> Add to cart</button>
                                <button className='uppercase bg-sky-600  duration-300 hover:bg-sky-500   w-[80%] md:w-[40%] py-4  text-xl rounded text-white flex items-center justify-center'><BiSolidPurchaseTag size={20} className=' mt-1 mr-2' /> Buy now</button>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default Prodetails
