import React from 'react'
import { SyncLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className='flex w-full h-full text-blue-700 items-center justify-center'>
            <SyncLoader />
        </div>
    )
}

export default Loader