import React, { useState } from 'react'
import login from "/src/assets/registraction/login.avif"
import { Link } from 'react-router-dom'

function Login() {
    // const [email,setEmail] = useState
    return (
        <div className='w-full h-screen flex md:py-12 flex-wrap flex-col md:flex-row items-center justify-center md:justify-start md:items-start'>
            <img src={login} className='md:ml-12 relative' />
            <div className='md:shadow-2xl absolute top-5 md:static w-[300px] h-[400px] mt-[80px] py-5 md:border border-indigo-200 rounded-r-3xl rounded-md'>
                <h1 className='text-2xl font-bold text-center text-indigo-600'>Login</h1>
                <div className='w-[80%] mx-auto my-8'>
                    <input className='w-full p-3 font-semibold border border-indigo-600 text-gray-600 outline-none mt-3 rounded-md shadow' type="text" placeholder='Enter Email here' />
                    <input className='w-full p-3 font-semibold border border-indigo-600 text-gray-600 outline-none mt-3 rounded-md shadow' type="password" placeholder='Enter Password here' />
                    <button className='w-full py-3 font-semibold border bg-indigo-600 hover:bg-indigo-500 duration-300 text-white outline-none mt-3 rounded-md shadow'>Login</button>
                    <p className='md:text-gray-600 text-slate-500 mt-5 text-center w-full p-3 font-semibold border border-indigo-600 bg-white  rounded-md shadow'>New here ? &nbsp;
                        <Link to={"/signup"}><span className='underline cursor-pointer font-bold'> Sign Up</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login
