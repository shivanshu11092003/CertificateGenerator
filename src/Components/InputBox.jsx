import React, { useState } from 'react'

const InputBox = ({ id, keyName, handleChange, alignment, alignArray, type }) => {
    const fieldType = ["String", "Image"]

    const [imageAdder, setImageAdder] = useState([])

    const onDropdownSelected = (e) => {
        alignment(id, e.target.value, "fieldType")

    }
    return (
        <div key={id} className='flex items-center  justify-center  flex-col  rounded-lg m-1 px-1 ' >

            <div className='flex flex-col lg:flex-row w-full  items-center'>

                <div className="flex m-1 items-center justify-center  rounded-md p-2
                   outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline 
                  has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 
                  has-[input:focus-within]:outline-orange-300 sm:text-sm/6">

                    Field:

                    <input
                        id={id}
                        type="text"
                        placeholder="Enter key name"
                        value={keyName}
                        onChange={handleChange}
                        className="block  w-full py-1 pl-1 pr-3  text-gray-900
                         placeholder:text-gray-400 focus:outline focus:outline-0 "

                    />


                </div>

                <select id="font" className='flex self-center mt-3 justify-center rounded-md m-2  px-1 py-3 text-sm/6
                                        font-semibold text-black focus-visible:outline focus-visible:outline-2
                                        focus-visible:outline-offset-2 focus-visible:outline-white
                                        bg-white border hover:file:bg-violet-100  
                                        *:italic'
                    onChange={e => alignment(id, e.target.value, "alignment")} >
                    <option value="">Alignment</option>
                    {
                        alignArray.length ?
                            alignArray.map((item, index) =>
                                <option key={index} value={item.id}>{item.value}</option>
                            ) : <option value="">Please wait</option>

                    }


                </select>
                <select id="font" className='flex self-center mt-3 justify-center rounded-md m-2  px-1 py-3 text-sm/6
                                        font-semibold text-black focus-visible:outline focus-visible:outline-2
                                        focus-visible:outline-offset-2 focus-visible:outline-white
                                        bg-white border hover:file:bg-violet-100  
                                        *:italic'
                    onChange={e => onDropdownSelected(e)} >
                    <option value="">Field Type</option>
                    {
                        fieldType.length ?
                            fieldType.map((item, index) =>
                                <option key={index} value={item}>{item}</option>
                            ) : <option value="">Please wait</option>

                    }




                </select>


            </div>

            <div>
                {
                    type == "Image" ? <input
                        name={keyName}
                        type="file"
                        placeholder="Enter key name"
                        className="flex self-center  justify-center rounded-md  px-1 py-1.5 text-sm/6  font-semibold text-black focus-visible:outline
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 file:mr-4 file:py-2 
                        file:px-4 file:rounded-full file:border-0 file:text-sm 
                        file:font-semibold file:bg-blue-50 file:text-violet-500
                        hover:file:bg-violet-100"
                        accept="image/png, image/jpg, image/jpeg"


                    /> : <></>
                }
            </div>


        </div>
    )

}

export default InputBox