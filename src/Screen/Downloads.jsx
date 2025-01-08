import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import SideBar from '../Components/SideBar';


const Downloads = () => {


    return (
        <div className='flex flex-col h-screen  w-screen'>
            <Navbar />
            <div className='flex w-full h-full'>

                <SideBar />

                <Outlet />






            </div>
        </div>
    )
}

export default Downloads