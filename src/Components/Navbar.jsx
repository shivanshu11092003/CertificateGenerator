import React from 'react';
import { MdAccountCircle, MdLogout } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='flex bg-blue-500 h-max items-center justify-between w-full text-white '>

            <div className='flex w-auto text-xl rounded-md text-center  font-semibold '>
                <img src="/src/assets/new.png" alt="" className=' w-1/3 ' />

            </div>

            <div className='flex items-center '>
                <div className='flex'>
                    <div className='p-2'>Home</div>
                    <div className='p-2'>Downloads</div>

                </div>
                <div className='flex items-center  p-2 text-lg'>
                    <div><MdAccountCircle /></div>
                    <div className='font-light p-1 px-2'>Shivanshu Gupta</div>
                    <div className='p-1 h-3/4'><MdLogout /></div>
                </div>
            </div>



        </div>
    )
}

export default Navbar