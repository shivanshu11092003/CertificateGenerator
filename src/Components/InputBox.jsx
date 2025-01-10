import React from 'react'

const InputBox = ({ id, keyName, handleChange, alignment, alignArray }) => {
    return (
        <div key={id} className='flex mt-3  justify-center  flex-col border rounded-lg m-1 px-1 w-auto' >

            <div className='flex flex-col lg:flex-row   items-center'>

                <div className="flex m-1 items-center justify-center w-full rounded-md
                   outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline 
                  has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 
                  has-[input:focus-within]:outline-orange-300 sm:text-sm/6">

                    <p className=" flex text-black self-start px-2 mt-3 ">Field</p>

                    <input
                        id={id}
                        type="text"
                        placeholder="Enter key name"
                        value={keyName}
                        onChange={handleChange}
                        className="block grow py-1.5 pl-1 pr-3  text-gray-900
                         placeholder:text-gray-400 focus:outline focus:outline-0 "

                    />


                </div>

                <select id="font" className='flex self-center mt-3 justify-center rounded-md m-2  px-1 py-3 text-sm/6
                                        font-semibold text-black focus-visible:outline focus-visible:outline-2
                                        focus-visible:outline-offset-2 focus-visible:outline-white
                                        bg-white border hover:file:bg-violet-100  
                                        *:italic'
                    onChange={e => alignment(id, e.target.value)} >
                    <option value="">Alignment</option>
                    {
                        alignArray.length ?
                            alignArray.map((item, index) =>
                                <option key={index} value={item.id}>{item.value}</option>
                            ) : <option value="">Please wait</option>

                    }


                </select>

            </div>


        </div>
    )

}

export default InputBox