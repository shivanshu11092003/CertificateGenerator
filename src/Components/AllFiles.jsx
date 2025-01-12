import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { HiMiniStar } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Axios from '../Axios/Axios';
import { copyIdReducer } from '../Redux/Slice';
import { Constant } from "../Utlis/Constants";
import Loader from './Loader';






const AllFiles = () => {

    const [file, setFile] = useState([]);
    const [fileName, setFileName] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()


    const navigate = useNavigate();
    const copyId = useSelector(state => state.form.copyId);

    const pasteFolder = (id) => {
        console.log(copyId)
        Axios({
            apiName: "move_folder/",
            method: "PUT",
            dataObject: {
                from: copyId,
                to: id
            }
        }).then((res) => {
            if (res.status == 200) {
                getData();
                setIsLoading(false)


            }
        })


    }

    const getData = () => {
        setIsLoading(true)

        Axios({
            apiName: "list_folders/",
            method: "GET"
        }).then((res) => {
            setFile(s => s = res.data.data)
            setIsLoading(false)

        })
    }




    const addFolder = () => {
        Axios({
            apiName: "create_folder/",
            method: "POST"
        }).then((res) => {
            if (res.status == 200) {
                getData();
                toast.success('Here is your toast.');

            }
        })

    }
    const deleteFolder = (id) => {
        Axios({
            apiName: "delete_folder/",
            method: "PUT",
            dataObject: { id: id }
        }).then((res) => {
            if (res.status == 200) {
                getData();
                setIsLoading(true)
            }
        })

    }
    const renameFolder = (id) => {
        setIsLoading(true)

        Axios({
            apiName: "rename_folder/",
            method: "PUT",
            dataObject: { id: id, name: fileName }
        }).then((res) => {
            if (res.status == 200) {
                setIsLoading(false)
                getData();

            }
        })

    }

    const openFolder = (id) => {
        navigate("/downloads/folder/" + `${id}`)
    }

    const copyFolder = (id) => {
        console.log(id)
        dispatch(copyIdReducer(id))


    }

    const openZIP = (name) => {

        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = `https://${Constant.IP}/certificate/media/` + name;
        a.download = 'new';
        a.click();
        document.body.removeChild(a);

    }
    const starredFolder = (id) => {
        setIsLoading(true)


        Axios({
            apiName: "star/",
            method: "PUT",
            dataObject: { id: id }
        }).then((res) => {
            if (res.status == 200) {
                getData();
                setIsLoading(false)




            }
        })
    }



    useEffect(() => {
        getData();


    }, [])


    return (
        isLoading ? <Loader /> : <div className='w-full  h-full border-x-2 '>
            <div className='flex justify-between py-3 px-6  mt-3'>
                <div className='flex  font-bold text-xl ' >All Files</div>
                <button className='px-4 py-1 rounded-md  flex justify-between items-center   border'
                    onClick={addFolder} >
                    <FcFolder />&nbsp;Add

                </button>
                <Toaster />



            </div>
            <div className='flex mt-3 flex-wrap w-full px-6 '>

                {
                    file.map((item, index) =>

                        <div key={index} className='flex group   p-1 m-1 flex-col justify-between 
                            rounded-lg  items-center w-40 min-h-32'>


                            <div className='flex justify-center items-center' >
                                {
                                    item.type == 'zip' ? <div className='flex justify-center  w-40 h-52 ' onClick={() => openZIP(item.url)}  >
                                        <img src="/src/assets/zip.png" className='self-baseline mt-12 h-[7rem] w-[7rem] ' alt="" />

                                    </div> : item.is_starred ? <div className='relative' onClick={() => openFolder(item.id)}>
                                        <div className='mt-7  flex text-yellow-500 self-start absolute'><HiMiniStar /></div>
                                        <FcFolder className='w-40  group-hover:hidden h-52 transition transform
                                                                       hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' />

                                        <FcOpenedFolder className='w-40 hidden group-hover:flex h-52 transition transform
                                                                       hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' />
                                    </div> : <div onClick={() => openFolder(item.id)}>
                                        <FcFolder className='w-40  group-hover:hidden h-52 transition transform
                                   hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' />

                                        <FcOpenedFolder className='w-40 hidden group-hover:flex h-52 transition transform
                                   hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' />
                                    </div>
                                }

                            </div>
                            <div className='flex w-full justify-between items-center ps-2 px-2'  >

                                <div className='truncate'>  <div className='text-sm font-medium  ' contentEditable='true'
                                    suppressContentEditableWarning={true}
                                    onInput={e => setFileName(s => s = e.target.textContent)} > {item.name}
                                </div>
                                </div>

                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md   py-2 text-sm font-semibold text-gray-900    hover:bg-gray-50">
                                            <HiOutlineDotsVertical />
                                        </MenuButton>
                                    </div>

                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-50 origin-top-right rounded-md bg-white shadow-lg ring-1
                                         ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 
                                         data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <div className="py-1">
                                            <MenuItem>
                                                <a
                                                    onClick={() => deleteFolder(item.id)}
                                                    className="block px-4 py-2 text-sm text-gray-700
                                                     data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    Delete
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    onClick={() => renameFolder(item.id)}
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100
                                                     data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    Rename
                                                </a>
                                            </MenuItem>

                                            <MenuItem>
                                                <a
                                                    onClick={() => starredFolder(item.id)}
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100
                                                                                                        data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    Star
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    onClick={() => copyFolder(item.id)}
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100
                                                                                                        data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    Cut
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    onClick={() => pasteFolder(item.id)}
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100
                                                                                                        data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    Paste
                                                </a>
                                            </MenuItem>

                                        </div>
                                    </MenuItems>
                                </Menu>

                            </div>


                        </div>
                    )
                }


            </div>


        </div>
    )
}

export default AllFiles