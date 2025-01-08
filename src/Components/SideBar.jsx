import React from 'react';
import { GoClock, GoStar } from "react-icons/go";
import { MdOutlineFolderCopy, MdOutlineFolderDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {

    const navigate = useNavigate();

    const Navigate = (route) => navigate(route)

    return (
        <div className='w-1/6 bg-gray-100'>

            <div className='md:flex border-e border-b drop-shadow-lg py-3 px-3  m-2 font-bold text-sm mt-1 hidden'>My Folder</div>

            <div className='mt-5'>

                <div className='flex  items-center justify-center md:justify-start py-4 px-3  text-lg  m-2
             rounded-md hover:bg-blue-400 hover:drop-shadow-lg hover:text-white  transition transform active:bg-blue-500 
             hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'
                    onClick={(e) => Navigate("recent")}
                >
                    <div className='text-gray-500'> <GoClock /> </div>
                    <div className='px-3 hidden md:flex text-sm font-medium'>Recent</div>
                </div>

                <div className='flex group items-center justify-center md:justify-start  py-4 px-3  text-lg mt-1 m-2
             rounded-md hover:bg-blue-400 hover:drop-shadow-lg hover:text-white  transition transform active:bg-blue-500 
             hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'
                    onClick={(e) => Navigate("allfiles")}

                >
                    <div className='text-blue-500 group-hover:text-white'> <MdOutlineFolderCopy /> </div>
                    <div className='px-3 hidden md:flex text-sm font-medium'>All Files</div>
                </div>

                <div className='flex  items-center justify-center md:justify-start  py-4 px-3  text-lg mt-1 m-2
             rounded-md hover:bg-blue-400 hover:drop-shadow-lg hover:text-white  transition transform active:bg-blue-500 
             hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'
                    onClick={(e) => Navigate("starred")}

                >
                    <div className='text-yellow-400' > <GoStar /> </div>
                    <div className='px-3 hidden md:flex text-sm font-medium'>Starred Files</div>
                </div>

                <div className='flex  items-center justify-center md:justify-start  py-4 px-3  text-lg mt-1 m-2
            rounded-md hover:bg-blue-400 hover:drop-shadow-lg hover:text-white  transition transform active:bg-blue-500 
             hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'
                    onClick={(e) => Navigate("deleted")}

                >
                    <div className='text-red-500'><MdOutlineFolderDelete /></div>
                    <div className='px-3 hidden md:flex text-sm font-medium'>Deleted Folder's</div>
                </div>

            </div>
        </div>

    )
}

export default SideBar