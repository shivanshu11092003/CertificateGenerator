import React, { useState } from 'react';
import { MdOutlineMail, MdPassword } from "react-icons/md";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Axios from '../Axios/Axios';



const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prvState) => ({ ...prvState, [name]: value }))

    }

    const SignIn = () => {
        Axios("login/", "POST", form).then((res) => {
            console.log(res)
        })
    }

    return (
        <div className='flex  w-full  h-screen    items-center justify-center'>

            <div className='flex  h-1/2 w-1/2 '>
                <DotLottieReact
                    src="https://lottie.host/b437eaa4-e4b4-48f7-894d-d9fee6e1624f/kRpMo2lFux.lottie"
                    loop
                    autoplay
                />
            </div>

            <div className='flex flex-col items-center justify-center  text-white   bg-blue-600 w-1/2 h-full '>



                <div className='flex flex-col  drop-shadow-lg backdrop-sepia-0 w-1/2 h-2/4 rounded-lg p-3'>

                    <img src="/src/assets/new.png" alt="" className='h-1/2 w-1/2 ' />

                    <div className='flex p-4 text-4xl text-white font-semibold'>Sign In</div>


                    <div className="flex flex-col items-center justify-center p-4">

                        <div className="flex items-center justify-center  w-full bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                            <p className="text-black self-start p-1 mt-2"><MdOutlineMail /></p>

                            <input
                                id="Email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="example@mail.com"
                                className="block  min-w-0 grow py-1.5 pl-1 pr-3 text-lg text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0"

                            />
                        </div>
                        <div className="text-red-600 text-sm text-start w-full p-1"></div>

                    </div>

                    <div className="flex flex-col items-center justify-center p-4">

                        <div className="flex items-center justify-center  w-full bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                            <p className="text-black self-start p-1 mt-1"><MdPassword /></p>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="***********"
                                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-lg text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "

                            />
                        </div>

                        <div className="text-red-600 text-sm text-start w-full p-1"></div>

                    </div>

                    <button
                        onClick={SignIn}
                        type="submit"
                        className="flex self-center w-1/4 justify-center rounded-md bg-green-00 px-3 py-2 text-sm bg-blue-500  font-semibold hover:drop-shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Sign In
                    </button>

                    <div className="flex self-center text-md p-2 mt-2">Don't have a account? <div className="px-1 hover:text-yellow-200 cursor-pointer">Sign Up</div> </div>


                </div>



            </div>




        </div>
    )
}

export default Login