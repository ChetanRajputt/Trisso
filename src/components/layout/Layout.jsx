import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import TopBanner from '../topBanner/TopBanner'

const Layout = () => {
    return (
        <div>
            <TopBanner />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
