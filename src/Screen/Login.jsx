import React, { useEffect, useState } from 'react';
import { MdOutlineMail, MdPassword } from "react-icons/md";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';
import Axios from '../Axios/Axios';
import LoginInput from '../Components/LoginInput';
import { Regex } from '../Utlis/Constants';



const Login = () => {
    const naviagte = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    useEffect(() => {
        Axios({
            apiName: "login/",
            method: "GET",
        }).then((res) => {
            naviagte("/" + res.data.route)
        })

    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prvState) => ({ ...prvState, [name]: value }))

    }

    const SignIn = () => {
        console.log(form.email, form.password)
        if (form.email.match(Regex.emailRegex)) {

            if (form.password.match(Regex.passwordRegex)) {

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

                }).catch((res) => {
                    if (res.status == 401) {
                        console.log(res.response.data.error)
                        setError((s) => s = res.response.data.error)

                    }
                })

            } else {
                setPasswordError((s) => s = "must contain 8 character,special character,alphabet and number")
            }
            setEmailError((s) => s = "")

        } else {
            setEmailError((s) => s = "Put email in valid format")
        }


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
                    <div className="text-yellow-200 text-sm text-start w-full px-4">{emailError}</div>


                    <LoginInput key={2} name="password" placeholder="******" value={form.password} handleChange={handleChange} children={<MdPassword />} />
                    <div className="text-yellow-200 text-sm text-start w-full px-4 ">{passwordError}</div>
                    <div className="flex text-yellow-200 self-center text-sm ps-5 text-start w-full px-4 pb-3">{error}</div>


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