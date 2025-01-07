import React, { useState } from 'react';

import AllFiles from '../Components/AllFiles';
import Navbar from '../Components/Navbar';
import SideBar from '../Components/SideBar';

const fileArray = [
    { id: 1, name: "Picture" },
    { id: 2, name: "Music" },
    { id: 3, name: "Documents" },
    { id: 4, name: "Screenshoots" },
    { id: 5, name: "What's App" },
]

const Downloads = () => {

    const [file, setFile] = useState(fileArray);

    return (
        <div className='flex flex-col h-screen  w-screen'>
            <Navbar />
            <div className='flex w-full h-full'>

                <SideBar />

                <AllFiles array={file} />






            </div>
        </div>
    )
}

export default Downloads