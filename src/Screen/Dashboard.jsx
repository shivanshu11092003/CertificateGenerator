import React, { useRef, useState } from 'react';
import { MdCancel, MdOutlineUnarchive } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../Components/Navbar';
import { addID } from '../Redux/Slice';

const Dashboard = () => {
    const input = useRef(null)
    const [pImg, setPImg] = useState(false);
    const [images, setImages] = useState([]);
    const [selection, setSelection] = useState(false)
    const [areaSelector, setAreaSelector] = useState([])
    const [field, setField] = useState([])

    const dispatch = useDispatch()
    const form = useSelector(state => state.form.Form)


    const selectImage = () => {
        if (!pImg) {
            input.current.click()

        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value, e.target.id)
        const oldArray = [...field]
        const update = oldArray[e.target.id]
        update.keyName = value
        setField(oldArray)
        console.log(field)

    }

    const handleImageChange = (e) => {
        e.preventDefault();
        const images = URL.createObjectURL(e.target.files[0]);
        setImages(images);
        setPImg(true)

    };

    const imgCoordinates = (e) => {
        console.log(e)
        console.log("required", (e.target.naturalWidth / e.target.width) * e.nativeEvent.offsetX, (e.target.naturalHeight / e.target.height) * e.nativeEvent.offsetY)
        const xCordinate = Math.round((e.target.naturalWidth / e.target.width) * e.nativeEvent.offsetX)
        const ycordinate = Math.round((e.target.naturalHeight / e.target.height) * e.nativeEvent.offsetY)
        const requiredID = new Date().getTime()


        if (!selection) {
            const leftx = e.nativeEvent.offsetX
            const topx = e.nativeEvent.offsetY
            dispatch(addID(requiredID))
            const newArea = [...areaSelector, {
                id: requiredID,
                top: topx,
                left: leftx,
                width: 0
            }]
            setAreaSelector(newArea)
            console.log(areaSelector)
            const newObj = [
                ...field, {
                    id: requiredID,
                    keyName: "",
                    Start: { "x1": xCordinate, "y1": ycordinate },
                    End: { "x2": 0, "y2": 0 },

                }]

            setField((state) => state = newObj)
            setSelection(true)
        } else {
            console.log(form)
            const newUpdate = areaSelector.map((item) => item.id == form ? { ...item, width: e.nativeEvent.offsetX - item.left } : item)
            setAreaSelector(newUpdate)
            console.log(areaSelector)

            setField(field.map(item => {
                if (item.id == form) {
                    const newItem = { ...item }
                    newItem.End.x2 = xCordinate
                    newItem.End.y2 = ycordinate
                    return newItem
                } else {
                    return item
                }
            }))
            setSelection(false)

        }




    }
    const delAreaSelector = (e) => {
        const ID = e.target.id
        setAreaSelector(areaSelector.filter(item => item.id != ID))
        const filteredArray = field.filter(item => item.id != ID)
        setField(filteredArray)
        console.log(ID)
        console.log(field.filter(item => item.id != ID))
        console.log(areaSelector.filter(item => item.id != ID))

    }









    return (
        <div className='flex flex-col h-screen  w-full'>

            <Navbar />


            <form action="" className='flex bg-white-50 h-full justify-center items-center w-full' encType="multipart/form-data" >
                <div className='flex flex-col h-full  w-1/3'>





                    <div className='flex w-full flex-col p-2 overflow-y-auto overscroll-x-none '>

                        {
                            field.map((item, index) =>
                                <div key={index} className='flex mt-3    flex-col border rounded-xl p-2 w-full h-full   ' >



                                    <div className='flex items-center'>
                                        <div className="flex m-1 items-center justify-center  w-full bg-white  rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                                            <p className="text-black self-start p-1 mt-1">Field</p>

                                            <input
                                                id={index}
                                                name="keyName"
                                                type="text"
                                                placeholder=""
                                                value={field.keyName}
                                                onChange={handleChange}
                                                className="block  grow py-1.5 pl-1 pr-3 text-xl text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"

                                            />

                                        </div>
                                        {/* <button onClick={(e) => Delete(e, item.id)} className='flex m-1 border self-end items-center w-15 h-11 text-sm  p-2 justify-center rounded-lg text-blue-800'>
                                            <MdDeleteForever />

                                        </button> */}
                                    </div>
                                    <div className='flex mt-3'>
                                        <div className="flex w-1/2  m-1 items-center justify-center  bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                                            <p className="text-black self-start p-1 mt-1">X</p>

                                            <input
                                                id="startCordinates"
                                                name="startCordinates"
                                                type="number"
                                                placeholder=""
                                                value={item.Start.x1}
                                                onChange={handleChange}
                                                className=" min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"

                                            />
                                        </div>
                                        <div className="flex w-1/2 m-1 items-center justify-center  bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                                            <p className="text-black self-start p-1 mt-1">Y</p>

                                            <input
                                                id="endCordinates"
                                                name="endCordinates"
                                                type="number"
                                                placeholder=""
                                                value={item.Start.y1}
                                                onChange={handleChange}

                                                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"

                                            />
                                        </div>
                                    </div>
                                    <div className='flex mt-3'>
                                        <div className="flex w-1/2  m-1 items-center justify-center  bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                                            <p className="text-black self-start p-1 mt-1">X</p>

                                            <input
                                                id="startCordinates"
                                                name="startCordinates"
                                                type="number"
                                                placeholder=""
                                                value={item.End.x2}
                                                onChange={handleChange}
                                                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"

                                            />
                                        </div>
                                        <div className="flex w-1/2 m-1 items-center justify-center  bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                                            <p className="text-black self-start p-1 mt-1">Y</p>

                                            <input
                                                id="endCordinates"
                                                name="endCordinates"
                                                type="number"
                                                placeholder=""
                                                value={item.End.y2}
                                                onChange={handleChange}

                                                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"

                                            />
                                        </div>
                                    </div>

                                </div>
                            )
                        }




                    </div>



                </div>

                <div className='flex flex-col  items-center justify-center border h-full w-2/3 text-3xl' onClick={selectImage}>


                    {
                        !pImg ? <div className='flex border p-4 rounded-lg flex-col justify-center items-center '>
                            <div className='p-2'><MdOutlineUnarchive /></div>
                            <div className='text-lg' >Select Thumbnail</div>

                            <input hidden type="file" ref={input} onChange={handleImageChange} accept="image/png, image/jpg, image/jpeg" />

                        </div> : <div className="flex relative flex-col h-max w-4/5 z-0 ">
                            <div className='flex self-end z-0' onClick={(e) => setPImg(false)}><MdCancel /></div>

                            <img src={images} alt="" onClick={imgCoordinates} className='cursor-crosshair drop-shadow-md z-0 ' />

                            {
                                areaSelector.length ?
                                    areaSelector.map((item, index) => <div key={index} id={index}
                                        style={{ transform: `translate(${item.left}px, ${item.top}px)`, width: item.width }}
                                        className="flex   justify-between h-12 items-center absolute z-10  border border-blue-600 bg-blue-300 ">

                                        <div className='flex text-base w-full justify-center'>{field[index].keyName}</div>
                                        <div className='flex  w-4 self-start mb-3 h-min ' onClick={delAreaSelector}><MdCancel id={item.id} /></div>


                                    </div>
                                    )
                                    : <></>
                            }

                        </div>
                    }
                </div>


            </form>






        </div>
    )
}

export default Dashboard;