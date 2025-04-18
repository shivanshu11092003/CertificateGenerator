import React from 'react';
import { BsDownload } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import Axios from '../Axios/Axios';

const Navbar = () => {

    const navigate = useNavigate();

    const logout = () => {
        Axios({
            apiName: "logout/",
            method: "GET"
        }).then((res) => {
            if (res.status == 200) {
                navigate("/" + res.data.route);
            }
        })

    }




    return (
        <div className='flex bg-blue-600 h-max items-center justify-between w-full text-white '>

            <div className='flex w-auto text-xl rounded-md text-center  font-semibold '>
                <img src="/src/assets/new.png" alt="" className='w-40 ' />

            </div>

            <div className='flex items-center md:font-semibold text-xs md:text-lg/3'>
                <div className='flex px-2'>
                    <div className='p-2 cursor-pointer hidden md:flex hover:drop-shadow-lg' onClick={(e) => navigate("/dashboard")}>Home</div>
                    <div className='p-2  md:hidden flex' onClick={(e) => navigate("/dashboard")}> <RiDashboardHorizontalLine /> </div>
                    <div className='p-2 cursor-pointer hidden md:flex' onClick={(e) => navigate("/downloads/allfiles")}>Downloads</div>
                    <div className='p-2  md:hidden flex' onClick={(e) => navigate("/downloads/allfiles")}><BsDownload /></div>

                </div>
                <div className='flex items-center  p-2 text-sm md:text-lg'>
                    <div className='px-2 flex items-center text-base p-1 ' onClick={logout}>LogOut &nbsp;<MdLogout /></div>
                </div>
            </div>



        </div>
    )
}

export default Navbar