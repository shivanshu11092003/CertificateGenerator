import React from 'react';
import { CiStar } from "react-icons/ci";
import { FaFolder } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { MdFolderDelete, MdOutlineFolderDelete } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';






const SideBar = () => {

    const navigate = useNavigate();

    const Navigate = (route) => navigate(route)

    return (
        <div className='md:w-[17rem] w-1/3 '>

            <div className='md:flex border-2 mt-2  drop-shadow-lg py-3 px-3 rounded-md  m-2 font-bold  hidden'>My Folder</div>

            <div className='mt-5'>

                <div className='flex group items-center justify-center md:justify-start  py-4 px-3  text-lg mt-1 m-2
             rounded-md hover:text-blue-400 hover:drop-shadow-lg   transition transform active:bg-blue-300 
             hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer'
                    onClick={(e) => Navigate("allfiles")}

                >
                    <div className='text-blue-500 hidden group-hover:flex'> <FaFolderOpen /> </div>
                    <div className='text-slate-800 flex group-hover:hidden'> <FaFolder /> </div>
                    <div className='px-4 text-gray-700 group-hover:text-blue-500 hidden md:flex text-base font-semibold '>All Files</div>
                </div>

                <div className='flex group items-center justify-center md:justify-start  py-4 px-3  text-lg mt-1 m-2
             rounded-md hover:text-blue-400 hover:drop-shadow-lg   transition transform active:bg-blue-300 
             hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer'
                    onClick={(e) => Navigate("starred")}

                >
                    <div className='text-blue-500 hidden group-hover:flex'> <TiStarFullOutline /> </div>
                    <div className='text-yellow-500 flex group-hover:hidden'> <CiStar /> </div>
                    <div className='px-4 text-gray-700  group-hover:text-blue-500 hidden md:flex text-base font-semibold'>Starred </div>
                </div>

                <div className='flex group  items-center justify-center md:justify-start  py-4 px-3  text-lg mt-1 m-2
            rounded-md hover:text-blue-400 hover:drop-shadow-lg   transition transform active:bg-blue-300 
             hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer'
                    onClick={(e) => Navigate("deleted")}

                >
                    <div className='text-blue-500 hidden group-hover:flex'> <MdFolderDelete /> </div>
                    <div className='text-red-500 flex group-hover:hidden'> <MdOutlineFolderDelete /> </div>
                    <div className='px-4 text-gray-700 group-hover:text-blue-500  hidden md:flex text-base font-semibold'>Trash</div>
                </div>

            </div>
        </div>

    )
}

export default SideBar