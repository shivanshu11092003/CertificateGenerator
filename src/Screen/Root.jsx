import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loader from '../Components/Loader'

const Root = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Outlet />


            </Suspense>
        </>
    )
}

export default Root