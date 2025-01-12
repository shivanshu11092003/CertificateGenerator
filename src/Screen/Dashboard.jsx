import React, { useEffect, useRef, useState } from 'react';
import { MdCancel, MdOutlineUnarchive } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Rnd } from 'react-rnd';
import { useNavigate } from 'react-router-dom';
import Axios from '../Axios/Axios';
import InputBox from '../Components/InputBox';
import Loader from '../Components/Loader';
import Navbar from '../Components/Navbar';
import { addID } from '../Redux/Slice';
import { Constant } from "../Utlis/Constants";


const Dashboard = () => {
    const input = useRef(null)
    const [pImg, setPImg] = useState(false);
    const [images, setImages] = useState([]);
    const [selection, setSelection] = useState(false)
    const [areaSelector, setAreaSelector] = useState([])
    const [field, setField] = useState([])
    const [json, setJson] = useState('')
    const [font, setFont] = useState([])
    const [align, setAlign] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const form = useSelector(state => state.form.Form)

    useEffect(() => {
        Axios({ apiName: "list/", method: "GET" }).then((res) => {
            if (res.status == 200) {
                setAlign(s => s = res.data.details[0].Alignment)
                setFont(s => s = res.data.details[1].Fonts)
            }

        })
    }, [])


    const selectImage = () => {
        if (!pImg) {
            input.current.click()

        }
    }

    const handleChange = (e) => {
        const { value } = e.target;
        const oldArray = [...field]
        const update = oldArray.find(a => a.id == e.target.id)
        update.keyName = value
        setField(oldArray)
    }

    const alignment = (id, value) => {
        console.log(id, value)
        setField(field.map((item) => {
            if (item.id == id) {
                const update = {
                    ...item,
                    alignment: value,
                }

                return update;

            } else {
                return item;
            }
        }))

    }

    const handleJsonData = (e) => setJson(data => data = e.target.value)



    const handleImageChange = (e) => {
        e.preventDefault();
        const images = URL.createObjectURL(e.target.files[0]);
        setImages(images);
        setPImg(true);
    };

    const imgCoordinates = (e) => {
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
                width: 0,
                height: 0
            }])
            setField([
                ...field, {
                    id: requiredID,
                    keyName: "",
                    Start: { "x1": xCordinate, "y1": ycordinate },
                    End: { "x2": 0, "y2": 0 },

                }])
            setSelection(true)
        } else {

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
            field.map(Item => {
                if (Item.id == form) {

                    const newUpdate = areaSelector.map((item) => item.id == form ? { ...item, height: Math.abs(Item.End.y2 - Item.Start.y1), width: Math.abs(e.nativeEvent.offsetX - item.left) } : item)
                    setAreaSelector(newUpdate)

                }
            })
            setSelection(false)

        }

    }
    const delAreaSelector = (e) => {
        const ID = e
        setAreaSelector(areaSelector.filter(item => item.id != ID))
        const filteredArray = field.filter(item => item.id != ID)
        setField(filteredArray)

    }



    const SubmitForm = (e) => {
        e.preventDefault()

        const data = [
            { name: "Shivanshu" },
            { name: "Nandini" },
            { name: "Prince" },
            { name: "Suhani" }
        ]
        const formData = new FormData(e.currentTarget);
        formData.append("location", JSON.stringify(field))
        console.log(json)
        formData.append("data", json)
        setIsLoading(s => s = true)

        Axios({
            apiName: "create/",
            method: "POST",
            contentType: 'multipart/form-data',
            dataObject: formData
        }).then((res) => {
            setIsLoading(s => s = false)
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = `https://${Constant.IP}/certificate` + res.data.zip_url + "/";
            a.download = 'new';
            a.click();
            document.body.removeChild(a);
            e.reset()



        }).catch((res) => {
            setIsLoading(s => s = false)


        })



    }


    return (
        <div className='flex flex-col h-[100vh]  w-[100vw]'>

            <Navbar />
            {
                isLoading ? <Loader /> : <form onSubmit={SubmitForm} className='flex flex-col md:flex-row bg-white-50 h-full  w-full' encType="multipart/form-data" >

                    <div className='flex flex-col bg-gray-50 items-center justify-center border h-full w-full md:w-3/4 text-3xl' onClick={selectImage}>

                        <input name='image' hidden type="file" ref={input} onChange={handleImageChange} accept="image/png, image/jpg, image/jpeg" />


                        {
                            !pImg ? <div className='flex p-4  h-full
                             rounded-lg justify-center items-center text-gray-400 '>

                                <div className='p-2'><MdOutlineUnarchive /></div>
                                <div className='text-2xl' >Select Template</div>


                            </div> : <div className="flex relative flex-col h-max w-4/5 z-0 ">
                                <div className='flex self-end z-0 hover:text-red-600 ' onClick={(e) => setPImg(false)}><MdCancel /></div>

                                <div className='w-2/3 h-full'>
                                    <img src={images} alt="" onMouseDown={imgCoordinates} className='cursor-crosshair drop-shadow-md z-0  ' />


                                </div>


                                {
                                    areaSelector.length ?
                                        areaSelector.map((item, index) => <Rnd
                                            className='flex   justify-between  items-center h-10  z-10  border border-blue-600 absolute bg-red-400'
                                            key={index}
                                            position={{ x: item.left + 10, y: item.top + 10 }}

                                            size={{ width: item.width, height: item.height }}
                                        >

                                            <div className='flex text-base w-full justify-center'>{field[index].keyName}</div>

                                            <div className='flex  w-4 self-start' onClick={(e) => delAreaSelector(item.id)}><MdCancel /></div>


                                        </Rnd>
                                        )
                                        : <></>
                                }

                            </div>
                        }
                    </div>

                    <div className='flex flex-col h-full justify-between    w-full md:w-[40rem]'>
                        <div>
                            <div className='flex flex-row items-center justify-between mt-3 border px-2 py-1 m-1 rounded-lg text-sm md:text-md font-bold'>
                                <div className='ps-1'>                            Field's                            </div>
                                <div className='flex  items-center justify-between  rounded-md px-1'>
                                    <div className='flex items-center ' >
                                        <select name="font" id="font" className='flex self-center mt-2 justify-center rounded-md m-2  px-2  py-2 text-sm/6
                                        font-semibold text-black focus-visible:outline focus-visible:outline-2
                                        focus-visible:outline-offset-2 focus-visible:outline-white
                                        bg-white border hover:file:bg-violet-100 *:italic' >
                                            <option value="">Select Font</option>
                                            {
                                                font.length ?
                                                    font.map((item, index) =>
                                                        <option key={index} value={item.id}>{item.value}</option>
                                                    )
                                                    : <option value="">Please wait</option>

                                            }

                                        </select>
                                    </div>

                                    <div className='flex rounded-md p-1 items-center   border '>
                                        <div className='text-sm font-semibold px-2'>Choose Color:</div>
                                        <div><input className='mt-1' name='color' type="color" /></div>
                                    </div>

                                </div>


                            </div>
                            <div className='flex flex-col w-full overflow-y-auto border items-center '>


                                {
                                    field.map((item, index) =>

                                        <InputBox key={index} id={item.id} keyName={item.keyName} handleChange={handleChange}
                                            alignment={alignment} alignArray={align}
                                        />

                                    )
                                }

                            </div>




                            <div className='flex  flex-row border-y rounded-lg p-1'>

                                <div className='flex items-center justify-between' >
                                    <input type="file"
                                        name='csvData'
                                        placeholder='choose  .csv'
                                        className="flex self-center mt-1 justify-center rounded-md  px-1 py-1.5 text-sm/6  font-semibold text-black focus-visible:outline
                                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 file:mr-4 file:py-2 
                                            file:px-4 file:rounded-full file:border-0 file:text-sm 
                                            file:font-semibold file:bg-blue-50 file:text-violet-500
                                            hover:file:bg-violet-100"

                                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                    />


                                </div>

                                <div className='flex items-center justify-center pe-5' >
                                    <div className='font-semibold' >or</div>

                                </div>

                                <div className='flex items-center ' >
                                    <div>
                                        <textarea type="text"
                                            value={json}
                                            onChange={handleJsonData}
                                            placeholder='paste json'
                                            className="flex self-center m-2 border  justify-center rounded-md px-3 py-1.5 text-sm/6 text-black focus-visible:outline focus-visible:outline-2
                                                focus-visible:outline-offset-2 focus-visible:outline-blue-600
                                                hover:file:bg-violet-100"

                                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                        />
                                    </div>


                                </div>

                            </div>
                        </div>

                        <div className='flex items-center mt-4 self-center'>


                            <input type='submit'
                                className="flex self-center  justify-center 
                                            rounded-md bg-green-00 px-3 py-1.5 text-sm/6 bg-blue-500  font-semibold text-white
                                            shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 
                                            focus-visible:outline-offset-2 focus-visible:outline-blue-600"

                            />


                        </div>




                    </div>



                </form>
            }




        </div>
    )
}

export default Dashboard;