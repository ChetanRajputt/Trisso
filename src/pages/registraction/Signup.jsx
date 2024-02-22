import React, { useState } from 'react'
import signup from "/src/assets/registraction/signup.avif"
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function signUp() {
        if (email === "" || password === "") {
            return alert('Please fill all field!');
        }

        try {
            const user = createUserWithEmailAndPassword(auth, email, password);
            alert("Signup Successfully so you can login...");
            setEmail("");
            setPassword("");

        } catch (error) {
            alert('Something went wrong!!!');
        }
    }

    return (
        <div className='w-full h-screen flex md:py-6 flex-wrap flex-col md:flex-row items-center justify-center md:justify-start md:items-start'>
            <img src={signup} className='md:ml-12 relative mb-[180px]' />
            <div className='md:shadow-2xl absolute top-5 md:static w-[300px] h-[400px] mt-[100px] py-5 md:border border-indigo-200 rounded-r-3xl rounded-md'>
                <h1 className='text-2xl font-bold text-center text-indigo-600'>Signup</h1>
                <div className='w-[80%] mx-auto my-8'>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} className='w-full p-3 font-semibold border border-indigo-600 text-gray-600 outline-none mt-3 rounded-md shadow' type="text" placeholder='Enter Email here' />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.password)} className='w-full p-3 font-semibold border border-indigo-600 text-gray-600 outline-none mt-3 rounded-md shadow' type="password" placeholder='Enter Password here' />
                    <button onClick={signUp} className='w-full py-3 font-semibold border bg-indigo-600 hover:bg-indigo-500 duration-300 text-white outline-none mt-3 rounded-md shadow'>Signup</button>
                    <p className='md:text-gray-600 text-slate-500 mt-5 text-sm text-center w-full p-3 font-semibold border border-indigo-600  rounded-md shadow'>Allready have an Account ? <Link to={"/login"}
                    ><span className='underline cursor-pointer font-bold'>Login</span></Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Signup
