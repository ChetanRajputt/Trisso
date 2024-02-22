import React, { useEffect, useState } from 'react'
import { LuUserCircle } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiRupee, BiLogoFacebook, BiLogoInstagram, BiLogoYoutube, BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi'
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { AiOutlineClose } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {

    const [toggle, setToggle] = useState(false);

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

    const navLinkStyles = ({ isActive }) => {
        return {
            textDecoration: isActive ? "underline" : "none",
            color: !isActive ? "white" : "black"
        };
    };

    return (
        <nav className='py-4 shadow-lg sticky top-0 left-0 z-50 bg-[#006C9A] text-white'>
            <div className="flex items-center justify-between px-3 md:px-9  ">
                <div>
                    <Link to={"/"}><h1 className='font-bold text-4xl cursor-pointer'>Trisso<span className='font-bold  text-sky-600'>.</span></h1></Link>
                </div>
                <ul className=" hidden md:flex items-center">
                    <NavLink style={navLinkStyles} to="/"> <li className='px-4 hover:underline duration-300 cursor-pointer'>Home</li></NavLink>
                    <NavLink style={navLinkStyles} to="/shop"><li className='px-4 hover:underline duration-300 cursor-pointer'>Shop</li></NavLink>
                    <li className='px-4 hover:underline duration-300 cursor-pointer'>Sale</li>
                    <li className='px-4 hover:underline duration-300 cursor-pointer'>Features</li>
                    <li className='px-4 hover:underline duration-300 cursor-pointer'>About</li>
                    <li className='px-4 hover:underline duration-300 cursor-pointer'>Contact</li>
                </ul>
                <div className='flex items-center'>
                    <LuUserCircle className='text-2xl md:text-3xl cursor-pointer ' />
                    <FiShoppingBag className='text-2xl md:text-3xl cursor-pointer  mx-4 ' />
                    {toggle ?
                        <AiOutlineClose onClick={(e) => setToggle(!toggle)} className='cursor-pointer md:hidden text-3xl' />
                        :
                        <GiHamburgerMenu onClick={(e) => setToggle(!toggle)} className='cursor-pointer md:hidden text-3xl' />
                    }
                </div>

            </div>
            {
                toggle ?
                    <div className='md:hidden'>
                        <div className='py-2'>
                            <hr />
                            <p className='md:hidden py-3 text-sm  flex items-center px-2'>Free shipping for standard order over&nbsp;<BiRupee />300</p>
                            <hr />
                        </div>
                        <div className='flex items-center justify-between px-2 '>
                            <ul className='flex items-center'>
                                <li className='text-xl px-1'><BiLogoFacebook /></li>
                                <li className='text-xl px-1'><BiLogoInstagram /></li>
                                <li className='text-xl px-1 '><BiLogoGmail /></li>
                                <li className='text-xl px-1'><BiLogoYoutube /></li>
                            </ul>
                            <div className='text-xl px-1  cursor-pointer duration-300'>
                                {theme === "lightMode"
                                    ?
                                    <MdDarkMode onClick={changeMode} />
                                    :
                                    <MdLightMode onClick={changeMode} />
                                }
                            </div>
                        </div>
                        <ul className=" flex flex-col  mt-3 py-3">
                            <NavLink style={navLinkStyles} to="/">  <li onClick={(e) => setToggle(!toggle)} className='pl-5 py-2 hover:underline text-xl  duration-300 cursor-pointer'>Home</li></NavLink>
                            <NavLink style={navLinkStyles} to={"/shop"}> <li onClick={(e) => setToggle(!toggle)} className='pl-5 py-2 hover:underline text-xl  duration-300 cursor-pointer'>Shop</li></NavLink>
                            <li onClick={(e) => setToggle(!toggle)} className='pl-5 py-2 hover:underline text-xl  duration-300 cursor-pointer'>Sale</li>
                            <li onClick={(e) => setToggle(!toggle)} className='pl-5 py-2 hover:underline text-xl  duration-300 cursor-pointer'>Features</li>
                            <li onClick={(e) => setToggle(!toggle)} className='pl-5 py-2 hover:underline text-xl  duration-300 cursor-pointer'>About</li>
                            <li onClick={(e) => setToggle(!toggle)} className='pl-5 pt-2 hover:underline text-xl  duration-300 cursor-pointer'>Contact</li>
                        </ul>

                    </div>
                    :
                    ""
            }

        </nav>
    )
}

export default Navbar
