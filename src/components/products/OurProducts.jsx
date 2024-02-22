import React from 'react'
import ProductCard from './productCard'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

const OurProducts = () => {

    const leftScroll = () => {
        document.getElementById("changeScrollSide").scrollLeft -= 310;
    }

    const rightScroll = () => {
        document.getElementById("changeScrollSide").scrollLeft += 310;
    }

    return (
        <div className='w-full relative my-[9%] '>
            <h1 className='text-4xl font-bold text-center my-[4%]'>FEATURED PRODUCTS</h1>
            <div id="changeScrollSide" className='our-products scroll-smooth flex overflow-y-auto justify-start items-center gap-12 w-[88%] mx-auto'>
                <div>
                    <ProductCard
                        productImage={"https://preview.colorlib.com/theme/fashe/images/item-02.jpg"}
                        productName={"Bag "}
                        productPrice={399} />
                </div>
                <div>
                    <ProductCard
                        productImage={"https://preview.colorlib.com/theme/fashe/images/item-03.jpg"}
                        productName={"Jocket"}
                        productPrice={499} />
                </div>
                <div>
                    <ProductCard
                        productImage={"https://preview.colorlib.com/theme/fashe/images/item-05.jpg"}
                        productName={"Watch"}
                        productPrice={299} />
                </div>
                <div>
                    <ProductCard
                        productImage={"https://preview.colorlib.com/theme/fashe/images/item-07.jpg"}
                        productName={"Short"}
                        productPrice={159} />
                </div>
                <div>
                    <ProductCard
                        productImage={"https://preview.colorlib.com/theme/fashe/images/item-01.jpg"}
                        productName={"Bag"}
                        productPrice={1299} />
                </div>
                <div>
                    <ProductCard
                        productImage={"https://preview.colorlib.com/theme/fashe/images/item-14.jpg"}
                        productName={"Shirt"}
                        productPrice={799} />
                </div>
            </div>

            <div>
                <button className='absolute top-[55%] z-20 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full  p-2  text-gray-500 hover:text-gray-900 cursor-pointer'>
                    <HiOutlineChevronLeft size={30} onClick={leftScroll} />
                </button>
                <button className='absolute top-[55%] z-20 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full  p-2  text-gray-500 hover:text-gray-900 cursor-pointer'>
                    <HiOutlineChevronRight size={30} onClick={rightScroll} />
                </button>
            </div>
        </div>
    )
}

export default OurProducts
