import React from 'react';
import { MdAccountCircle, MdLogout } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='flex bg-blue-500 h-max items-center justify-between w-full'>

            <div className='flex w-auto text-xl rounded-md text-center  font-semibold text-white '>
                <img src="/src/assets/new.png" alt="" className=' w-1/3 ' />

            </div>

            <div className='flex items-center text-white p-2 text-lg'>
                <div><MdAccountCircle /></div>
                <div className='font-light p-1 px-2'>Shivanshu Gupta</div>
                <div className='p-1 h-3/4'><MdLogout /></div>
            </div>



        </div>
    )
}

export default Navbar