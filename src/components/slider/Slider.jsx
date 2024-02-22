import React from 'react'
import bigbanner from "/src/assets/bigBanner.png"
import smallbanner from "/src/assets/smallBanner.png"


const Slider = () => {
    return (
        <div id='slider'>
            <div>
                {/* <img className='hidden md:block  w-full' src="src\assets\bigBannerD.png" /> */}
                <img className='hidden md:block  w-full' src={bigbanner} />
                <img className='md:hidden h-[60vh] w-full' src={smallbanner} />
            </div>
        </div>
    )
}

export default Slider
