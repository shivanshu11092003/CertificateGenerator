import React from 'react';
import { MdOutlineMail, MdPassword } from "react-icons/md";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const Login = () => {

    return (
        <div className='flex  w-full flex-col h-screen bg-gradient-to-r from-black  via-blue-400  to-gray-300  drop-shadow-lg  items-center justify-center'>


            <div className='flex items-center justify-center border w-3/5 h-3/4 rounded-lg bg-white p-3'>

                <div className='flex flex-col w-2/4 p-6 h-full'>
                    <div className='flex w-max text-xl rounded-md text-center self-start'>
                        <img src="/src/assets/logo.png" alt="" className='h-1/3 w-3/4' />

                    </div>

                    <div className='flex p-4 text-4xl font-semibold'>Sign In</div>


                    <div className="flex flex-col items-center justify-center p-4">

                        <div className="flex items-center justify-center  w-full bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                            <p className="text-black self-start p-1 mt-2"><MdOutlineMail /></p>

                            <input
                                id="Email"
                                name="Email"
                                type="email"
                                placeholder="example@mail.com"
                                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"

                            />
                        </div>
                        <div className="text-red-600 text-sm text-start w-full p-1"></div>

                    </div>

                    <div className="flex flex-col items-center justify-center p-4">

                        <div className="flex items-center justify-center  w-full bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                            <p className="text-black self-start p-1 mt-1"><MdPassword /></p>

                            <input
                                id="Email"
                                name="Email"
                                type="email"
                                placeholder="***********"
                                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"

                            />
                        </div>

                        <div className="text-red-600 text-sm text-start w-full p-1"></div>

                    </div>

                    <button
                        type="submit"
                        className="flex self-center w-1/4   justify-center rounded-md bg-green-00 px-3 py-1.5 text-sm/6 bg-blue-500  font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Sign In
                    </button>

                    <div className="flex self-center text-sm p-2 mt-2">Don't have a account? <div className="px-1 hover:text-blue-500 cursor-pointer">Sign Up</div> </div>


                </div>

                <div className='flex p-5 w-3/4 h-2/3'>
                    {/* <img src="/src/assets/signIn.svg" alt="" className='h-full w-full' /> */}
                    <DotLottieReact
                        src="https://lottie.host/b437eaa4-e4b4-48f7-894d-d9fee6e1624f/kRpMo2lFux.lottie"
                        loop
                        autoplay
                    />
                </div>

            </div>


        </div>
    )
}

export default Login