import React, { useRef, useState } from 'react';
import { MdCancel, MdOutlineUnarchive } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Axios from '../Axios/Axios';
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
        console.log(e.target.id)
        console.log(value)
        const oldArray = [...field]
        const update = oldArray.find(a => a.id == e.target.id)
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
        console.log("required", (e.target.naturalWidth / e.target.width) * e.nativeEvent.offsetX, (e.target.naturalHeight / e.target.height) * e.nativeEvent.offsetY)
        const xCordinate = Math.round((e.target.naturalWidth / e.target.width) * e.nativeEvent.offsetX)
        const ycordinate = Math.round((e.target.naturalHeight / e.target.height) * e.nativeEvent.offsetY)
        const requiredID = new Date().getTime()


        if (!selection) {
            const leftx = e.nativeEvent.offsetX
            const topx = e.nativeEvent.offsetY
            dispatch(addID(requiredID))
            setAreaSelector([...areaSelector, {
                id: requiredID,
                top: topx,
                left: leftx,
                width: 0
            }])
            console.log(areaSelector)
            setField([
                ...field, {
                    id: requiredID,
                    keyName: "",
                    Start: { "x1": xCordinate, "y1": ycordinate },
                    End: { "x2": 0, "y2": 0 },

                }])
            console.log(field)
            setSelection(true)
        } else {
            const newUpdate = areaSelector.map((item) => item.id == form ? { ...item, width: e.nativeEvent.offsetX - item.left } : item)
            setAreaSelector(newUpdate)
            console.log(areaSelector)
            console.log(field)


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
        const ID = e
        setAreaSelector(areaSelector.filter(item => item.id != ID))
        const filteredArray = field.filter(item => item.id != ID)
        setField(filteredArray)
        console.log(ID)
        console.log(field.filter(item => item.id != ID))
        console.log(areaSelector.filter(item => item.id != ID))

    }

    const SubmitForm = (e) => {
        e.preventDefault()
        console.log(e.target)
        const formData = new FormData(e.currentTarget);
        formData.append("location", JSON.stringify(field))



        Axios("test2/", "POST", formData).then((res) => {
            console.log("Call")
        })



    }


    return (
        <div className='flex flex-col h-screen  w-full'>

            <Navbar />


            <form onSubmit={SubmitForm} className='flex lg:flex-col bg-white-50 h-full justify-center items-center w-full' encType="multipart/form-data" >

                <div className='flex flex-col h-full  w-1/4'>



                    <div className='flex w-full h-3/4 flex-col p-2 overflow-y-auto '>

                        {
                            field.map((item) =>
                                <div key={item.id} className='flex mt-3    flex-col border rounded-xl p-2 w-full h-full   ' >

                                    <div className='flex items-center'>
                                        <div className="flex m-1 items-center justify-center w-full  bg-white  rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                                            <p className=" flex text-black self-start p-1 mt-1">Field</p>

                                            <input
                                                id={item.id}
                                                type="text"
                                                placeholder=""
                                                value={item.keyName}
                                                onChange={handleChange}
                                                className="block  grow py-1.5 pl-1 pr-3 text-xl text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"

                                            />

                                        </div>

                                    </div>
                                    <div className='flex mt-3'>
                                        <div className="flex w-1/2  m-1 items-center justify-center  bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                                            <p className="text-black self-start p-1 mt-1">X : {item.Start.x1}</p>


                                        </div>
                                        <div className="flex w-1/2 m-1 items-center justify-center  bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                                            <p className="text-black self-start p-1 mt-1">Y : {item.Start.y1}</p>


                                        </div>
                                    </div>
                                    <div className='flex mt-3'>
                                        <div className="flex w-1/2  m-1 items-center justify-center  bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                                            <p className="text-black self-start p-1 mt-1">X : {item.End.x2}</p>


                                        </div>
                                        <div className="flex w-1/2 m-1 items-center justify-center  bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                                            <p className="text-black self-start p-1 mt-1">Y : {item.End.y2}</p>

                                        </div>
                                    </div>

                                </div>
                            )
                        }

                    </div>

                    <div className='flex flex-col items-center'>
                        <input type="file"
                            name='csvFile'
                            placeholder='choose  .csv'
                            className="flex self-center  mt-3 justify-center rounded-md bg-green-00 px-3 py-1.5 text-sm/6   font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        />
                        <input type='submit'
                            className="flex self-center w-1/4  mt-4 justify-center rounded-md bg-green-00 px-3 py-1.5 text-sm/6 bg-blue-500  font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"

                        />

                    </div>



                </div>

                <div className='flex flex-col  items-center justify-center border h-full w-3/4 text-3xl' onClick={selectImage}>
                    <input name='thumbnail' hidden type="file" ref={input} onChange={handleImageChange} accept="image/png, image/jpg, image/jpeg" />


                    {
                        !pImg ? <div className='flex border p-4 rounded-lg flex-col justify-center items-center '>

                            <div className='p-2'><MdOutlineUnarchive /></div>
                            <div className='text-lg' >Select Thumbnail</div>


                        </div> : <div className="flex relative flex-col h-max w-4/5 z-0 ">
                            <div className='flex self-end z-0' onClick={(e) => setPImg(false)}><MdCancel /></div>

                            <img src={images} alt="" onClick={imgCoordinates} className='cursor-crosshair drop-shadow-md z-0 ' />

                            {
                                areaSelector.length ?
                                    areaSelector.map((item, index) => <div key={index} id={index}
                                        style={{ transform: `translate(${item.left}px, ${item.top}px)`, width: item.width }}
                                        className="flex   justify-between h-12 items-center absolute z-10  border border-blue-600 bg-blue-300 ">

                                        <div className='flex text-base w-full justify-center'>{field[index].keyName}</div>
                                        <div className='flex  w-4 self-start h-max ' onClick={(e) => delAreaSelector(item.id)}><MdCancel /></div>


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