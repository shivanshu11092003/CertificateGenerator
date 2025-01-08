import React, { useState } from 'react';

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
            <div className='flex  py-3 px-4 font-bold text-lg mt-1 ' >All Files</div>
            <div className='flex mt-3 flex-wrap w-full justify-center'>
                {file.map((item) =>
                    <div key={item.id} className='flex group hover:bg-gray-100  p-1 m-1 flex-col justify-center 
                rounded-lg  items-center w-56 min-h-32'>
                        <div className='flex justify-center items-center'>
                            <img className='w-1/4  transition transform
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