import React from 'react'

const Footer = () => {
    return (
        <div className="bg-[#008C9A] text-white py-4">
            <div className=' w-[90%] mx-auto flex flex-col md:flex-row gap-4 md:gap-[65px] md:px-10'>
                <div className='w-1/2'>
                    <h1 className='text-4xl md:text-6xl font-bold my-5'>Trisso<span className="text-orange-600">.</span></h1>
                    <p className="text-base md:text-xl text-gray-200 mb-8">Online Shopping Site for Fashion,  Electronics,Home & More  Only on Trisso Shopping Website</p>
                    <p className="hidden md:block text-gray-200 text-xl">Copyright &copy; 2023 Trisso. All rights reserved.</p>
                </div>
                <div className="mt-2 md:mt-9">
                    <h2 className='text-2xl'>Categories</h2>
                    <ul className="text-gray-300 mt-2 md:mt-6">
                        <li className='py-2 text-lg cursor-pointer hover:pl-1 duration-200'>Men</li>
                        <li className='py-2 text-lg cursor-pointer hover:pl-1 duration-200'>Women</li>
                        <li className='py-2 text-lg cursor-pointer hover:pl-1 duration-200'>Dresses</li>
                        <li className='py-2 text-lg cursor-pointer hover:pl-1 duration-200'>Sunglasses</li>
                    </ul>
                </div>
                <div className="mt-2 md:mt-9">
                    <h2 className='text-2xl'>Quick Links</h2>
                    <ul className="text-gray-300 mt-2 md:mt-6">
                        <li className='py-2 text-lg cursor-pointer hover:pl-1 duration-200'>About</li>
                        <li className='py-2 text-lg cursor-pointer hover:pl-1 duration-200'>Offers & Discounts</li>
                        <li className='py-2 text-lg cursor-pointer hover:pl-1 duration-200'>Get Coupon</li>
                        <li className='py-2 text-lg cursor-pointer hover:pl-1 duration-200'>Contact Us</li>
                    </ul>
                </div>
                <div className="mt-2 md:mt-9">
                    <h2 className='text-2xl'>Support</h2>
                    <ul className="text-gray-300 mt-2 md:mt-6">
                        <li className='py-2 text-lg cursor-pointer hover:pl-1 duration-200'>Frequently Asked Questions</li>
                        <li className='py-2 text-lg cursor-pointer hover:pl-1 duration-200'>Terms & Conditions</li>
                        <li className='py-2 text-lg cursor-pointer hover:pl-1 duration-200'>Privacy Policy</li>
                        <li className='py-2 text-lg cursor-pointer hover:pl-1 duration-200'>Report a Payment Issue</li>
                    </ul>
                </div>
                <p className="md:hidden text-gray-100  mb-5">Copyright &copy; 2023 Trisso. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
