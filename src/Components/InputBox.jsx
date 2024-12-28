import React from 'react'

const InputBox = ({ id, keyName, handleChange, Startx1, Starty1, Endx2, Endy2 }) => {
    return (
        <div key={id} className='flex mt-3    flex-col border rounded-xl p-2 w-full    ' >

            <div className='flex items-center'>
                <div className="flex m-1 items-center justify-center w-full  bg-white  rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                    <p className=" flex text-black self-start p-1 mt-1">Field</p>

                    <input
                        id={id}
                        type="text"
                        placeholder="enter key name"
                        value={keyName}
                        onChange={handleChange}
                        className="block  grow py-1.5 pl-1 pr-3 text-xl text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"

                    />

                </div>

            </div>
            <div className='flex mt-3'>
                <div className="flex w-1/2  m-1 items-center justify-center  bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                    <p className="text-black self-start p-1 mt-1">X : {Startx1}</p>


                </div>
                <div className="flex w-1/2 m-1 items-center justify-center  bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                    <p className="text-black self-start p-1 mt-1">Y : {Starty1}</p>


                </div>
            </div>
            <div className='flex mt-3'>
                <div className="flex w-1/2  m-1 items-center justify-center  bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                    <p className="text-black self-start p-1 mt-1">X : {Endx2}</p>


                </div>
                <div className="flex w-1/2 m-1 items-center justify-center  bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                    <p className="text-black self-start p-1 mt-1">Y : {Endy2}</p>

                </div>
            </div>

        </div>
    )

}

export default InputBox