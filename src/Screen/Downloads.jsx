import React, { useState } from 'react';
import { GoClock, GoStar } from "react-icons/go";
import { MdOutlineFolderCopy, MdOutlineFolderDelete } from "react-icons/md";
import Navbar from '../Components/Navbar';

const fileArray = [
    { id: 1, name: "Picture" },
    { id: 2, name: "Music" },
    { id: 3, name: "Documents" },
    { id: 4, name: "Screenshoots" },
    { id: 5, name: "What's App" },]

const Downloads = () => {
    const [file, setFile] = useState(fileArray);

    return (
        <div className='flex flex-col h-screen  w-screen'>
            <Navbar />
            <div className='flex w-full h-full'>
                <div className='w-1/6 border bg-white'>
                    <div className='flex border-b py-3 px-3 font-bold text-sm mt-1 '>My Folder</div>
                    <div>
                        <div className='flex border items-center py-4 px-3  text-lg mt-1 m-1
                         rounded-md hover:bg-blue-400 hover:drop-shadow-lg hover:text-white  transition transform active:bg-blue-500 
                         hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                            <div className='text-gray-500'> <GoClock /> </div>
                            <div className='px-3 hidden md:flex text-sm'>Recent</div>
                        </div>
                        <div className='flex border items-center py-4 px-3  text-lg mt-1 m-1
                         rounded-md hover:bg-blue-400 hover:drop-shadow-lg hover:text-white  transition transform active:bg-blue-500 
                         hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                            <div className='text-blue-500'> <MdOutlineFolderCopy /> </div>
                            <div className='px-3 hidden md:flex text-sm'>All Files</div>
                        </div>
                        <div className='flex border items-center py-4 px-3  text-lg mt-1 m-1
                         rounded-md hover:bg-blue-400 hover:drop-shadow-lg hover:text-white  transition transform active:bg-blue-500 
                         hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                            <div className='text-yellow-400' > <GoStar /> </div>
                            <div className='px-3 hidden md:flex text-sm'>Stared Files</div>
                        </div>

                        <div className='flex border items-center py-4 px-3  text-lg mt-1 m-1 
                        rounded-md hover:bg-blue-400 hover:drop-shadow-lg hover:text-white  transition transform active:bg-blue-500 
                         hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                            <div className='text-red-500'><MdOutlineFolderDelete /></div>
                            <div className='px-3 hidden md:flex text-sm'>Deleted Folder's</div>
                        </div>

                    </div>
                </div>

                <div className='w-5/6 border'>
                    <div className='flex border-b py-3 px-3 font-bold text-sm mt-1 ' >All Files</div>
                    <div className='flex mt-3 flex-wrap w-full'>
                        {fileArray.map((item) =>
                            <div key={item.id} className='flex p-1 m-1 flex-col justify-center items-center w-52'>
                                <div className='flex justify-center items-center'>
                                    <img className='w-1/6' src="/src/assets/folder.png" alt="" />                                </div>
                                <div className='text-sm font-semibold'> {item.name}</div>

                            </div>
                        )}


                    </div>


                </div>

            </div>
        </div>
    )
}

export default Downloads