import React, { useEffect, useState } from 'react';
import { MdOutlineMail, MdPassword } from "react-icons/md";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';
import Axios from '../Axios/Axios';
import LoginInput from '../Components/LoginInput';



const Login = () => {
    const naviagte = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        Axios({
            apiName: "login/",
            method: "GET",
        }).then((res) => {
            naviagte(res.data.route)
        })

    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prvState) => ({ ...prvState, [name]: value }))

    }

    const SignIn = () => {

        Axios({
            apiName: "login/",
            method: "POST",
            dataObject: form,
            contentType: 'multipart/form-data'
        }).then((res) => {
            console.log(res)
            if (res.status == 200) {
                naviagte("/" + res.data.route)
            }
        })
    }

    return (
        <div className='flex  w-full  h-screen    items-center justify-center'>

            <div className=' md:flex hidden h-1/2 w-1/2 '>
                <DotLottieReact
                    src="https://lottie.host/b437eaa4-e4b4-48f7-894d-d9fee6e1624f/kRpMo2lFux.lottie"
                    loop
                    autoplay
                />
            </div>

            <div className='flex flex-col items-center justify-center  text-white   bg-blue-600 w-full md:w-1/2 h-full '>



                <div className='flex flex-col  drop-shadow-lg backdrop-sepia-0 w-full md:w-1/2 h-2/4 rounded-lg p-3'>

                    <img src="/src/assets/new.png" alt="" className='h-1/2 w-1/2 ' />

                    <div className='flex p-4 text-4xl text-white font-semibold'>Sign In</div>

                    <LoginInput key={1} name="email" placeholder="example@mail.com" value={form.email} handleChange={handleChange} children={<MdOutlineMail />} />

                    <LoginInput key={2} name="password" placeholder="******" value={form.password} handleChange={handleChange} children={<MdPassword />} />

                    <button
                        onClick={SignIn}
                        type="submit"
                        className="flex self-center w-1/4 justify-center rounded-md bg-green-00 px-3 py-2 text-sm bg-blue-500  font-semibold hover:drop-shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Sign In
                    </button>

                    <div className="flex self-center text-sm md:text-md p-2 mt-2">Don't have a account?
                        <div className="px-1 hover:text-yellow-200 cursor-pointer">Sign Up</div>
                    </div>


                </div>



            </div>




        </div>
    )
}

export default Login