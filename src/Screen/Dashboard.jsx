import React, { useRef, useState } from 'react';
import { MdCancel, MdOutlineUnarchive } from "react-icons/md";


const Dashboard = () => {
    const input = useRef(null)
    const [field, setField] = useState({

    })

    const [pImg, setPImg] = useState(false);
    const [images, setImages] = useState([]);
    const selectImage = () => {
        input.current.click()


    }

    const handleImageChange = (e) => {
        e.preventDefault();
        console.log("event", e);
        console.log(pImg)
        console.log(e.target.files[0]);
        const ProductImg = [...e.target.files];
        console.log(ProductImg)
        const images = URL.createObjectURL(e.target.files[0]);
        console.log("images", images);
        setImages(images);
        setPImg(true)
        console.log(pImg)

    };

    const imgCoordinates = (e) => {
        console.log(e)
        console.log("natural(w,h)", e.target.naturalWidth, e.target.naturalHeight,)
        console.log("target(w,h)", e.target.width, e.target.height)
        console.log("offsetX(y,x)", e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        console.log("natural", e.nativeEvent.offsetX / e.target.width * e.target.naturalWidth, e.nativeEvent.offsetY / e.target.height * e.target.naturalHeight,)


        // console.log("target(x,y)", e.target.x, e.target.y)
        // console.log("clientX(x,y)", e.clientX, e.clientY)
        // console.log("screenX(x,y)", e.screenX, e.screenY)
        // console.log("pageX(x,y)", e.pageX, e.pageY)
        // console.log("offsetTop,offsetLeft", e.target.offsetTop, e.target.offsetLeft)
    }
    return (
        <div className='flex flex-col h-screen  w-full'>

            <div className='bg-blue-500  w-full'>

                <div className='flex w-max text-xl rounded-md text-center  font-semibold text-white '>
                    <img src="/src/assets/new.png" alt="" className='h-1/5 w-1/3' />

                </div>



            </div>
            <form action="" className='flex bg-white-50 h-full justify-center items-center w-full' >
                <div className='flex w-1/3'></div>

                <div className='flex flex-col  items-center justify-center border h-full w-2/3 text-3xl' onClick={selectImage}>


                    {
                        !pImg ? <div className='flex border p-4 rounded-lg flex-col justify-center items-center '>
                            <div className='p-2'><MdOutlineUnarchive /></div>
                            <div className='text-lg' >Select Thumbnail</div>

                            <input hidden type="file" ref={input} onChange={handleImageChange} accept="image/png, image/jpg, image/jpeg" />

                        </div> : <div className="flex flex-col h-max w-4/5 ">
                            <div className='flex self-end' onClick={(e) => setPImg(false)}><MdCancel /></div>

                            <img src={images} alt="" onClick={imgCoordinates} className=' drop-shadow-md ' />



                        </div>
                    }
                </div>


            </form>






        </div>
    )
}

export default Dashboard