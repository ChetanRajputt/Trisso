import React, { useEffect, useState } from 'react'
import { BiRupee, BiLogoFacebook, BiLogoInstagram, BiLogoYoutube, BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi'
import { MdLightMode, MdDarkMode } from "react-icons/md";

const TopBanner = () => {
    const [theme, setTheme] = useState("lightMode");

    const changeMode = () => {
        if (theme === "lightMode") {
            setTheme("darkMode");
        }
        else {
            setTheme("lightMode");
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])


    return (
        < div className='hidden md:flex items-center justify-between px-7 py-3 bg-sky-200' >
            <div>
                <ul className='flex items-center'>
                    <li className='text-xl px-1 text-sky-700 cursor-pointer hover:text-slate-900 duration-300'><BiLogoFacebook /></li>
                    <li className='text-xl px-1 text-sky-700 cursor-pointer hover:text-slate-900 duration-300'><BiLogoInstagram /></li>
                    <li className='text-xl px-1 text-sky-700 cursor-pointer hover:text-slate-900 duration-300 '><BiLogoGmail /></li>
                    <li className='text-xl px-1 text-sky-700 cursor-pointer hover:text-slate-900 duration-300'><BiLogoYoutube /></li>
                </ul>
            </div>
            <div>
                <p className='text-sky-700 flex items-center'>Free shipping for standard order over&nbsp;<BiRupee />300</p>
            </div>
            <div className=' cursor-pointer text-2xl duration-300 text-sky-700 hover:text-slate-900'>
                {theme === "lightMode"
                    ?
                    <MdDarkMode onClick={changeMode} />
                    :
                    <MdLightMode onClick={changeMode} />
                }
            </div>
        </div >
    )
}

export default TopBanner
