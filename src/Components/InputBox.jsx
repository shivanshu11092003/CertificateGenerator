import React from 'react'

const InputBox = ({ id, keyName, handleChange, alignment }) => {
    return (
        <div key={id} className='flex mt-3    flex-col border rounded-lg p-2 w-auto' >

            <div className='flex flex-col lg:flex-row   items-center'>

                <div className="flex m-1 items-center justify-center w-full rounded-md
                  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline 
                  has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 
                  has-[input:focus-within]:outline-orange-300 sm:text-sm/6">

                    <p className=" flex text-black self-start p-1 mt-1">Field</p>

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
                                        *:italic
                                    '
                    onChange={e => alignment(id, e.target.value)} >
                    <option value="">Alignment</option>
                    <option value="1">Left</option>
                    <option value="2">Center</option>
                    <option value="3">Right</option>

                </select>

            </div>


        </div>
    )

}

export default InputBox