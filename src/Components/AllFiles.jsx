import React, { useState } from 'react';
import { PiFolderPlusFill } from "react-icons/pi";

const fileArray = [
    { id: 1, name: "Picture" },
    { id: 2, name: "Music" },
    { id: 3, name: "Documents" },
    { id: 4, name: "Screenshoots" },
    { id: 5, name: "What's App" },
]


const AllFiles = () => {
    const [file, setFile] = useState(fileArray);

    return (
        <div className='w-5/6 border-x-2 drop-shadow-md rounded-2xl'>
            <div className='flex justify-between py-3 px-6  mt-3'>
                <div className='flex  font-bold text-xl ' >All Files</div>
                <button className='px-6 py-1 rounded-md  flex justify-between items-center text-blue-500  border'>
                    <PiFolderPlusFill />&nbsp;Add
                </button>
            </div>
            <div className='flex mt-3 flex-wrap w-full px-6'>
                {file.map((item) =>
                    <div key={item.id} className='flex group hover:bg-gray-100  p-1 m-1 flex-col justify-center 
                rounded-lg  items-center w-40 min-h-32'>
                        <div className='flex justify-center items-center'>
                            <img className='w-1/2  transition transform
                         hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' src="/src/assets/folder.png" alt="" />                                </div>
                        <div className='text-sm font-medium mt-2'> {item.name}</div>

                    </div>
                )
                }


            </div>


        </div>
    )
}

export default AllFiles