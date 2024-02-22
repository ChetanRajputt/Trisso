import React from 'react'
import Slider from '../../components/slider/Slider'
import TopProduct from '../../components/topProduct/TopProduct'
import { BsChevronDoubleUp } from 'react-icons/bs'
import OurProducts from '../../components/products/OurProducts'

const Home = () => {
    return (
        <div>
            <Slider />
            <TopProduct />
            <OurProducts />
        </div>
    )
}

export default Home
