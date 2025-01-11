import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import Axios from '../Axios/Axios';
import { Constant } from "../Utlis/Constants";







const AllFiles = () => {

    const [file, setFile] = useState([]);
    const [fileName, setFileName] = useState('');

    const navigate = useNavigate();





    const getData = () => {
        Axios({
            apiName: "list_folders/",
            method: "GET"
        }).then((res) => {
            setFile(s => s = res.data.data)
        })
    }




    const addFolder = () => {

        Axios({
            apiName: "create_folder/",
            method: "POST"
        }).then((res) => {
            if (res.status == 200) {
                getData();


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


            }
        })

    }
    const renameFolder = (id) => {
        Axios({
            apiName: "rename_folder/",
            method: "PUT",
            dataObject: { id: id, name: fileName }
        }).then((res) => {
            if (res.status == 200) {


            }
        })

    }

    const openFolder = (id) => {
        navigate("/downloads/folder/" + `${id}`)
    }

    const moveFolder = () => {

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
        Axios({
            apiName: "star/",
            method: "PUT",
            dataObject: { id: id }
        }).then((res) => {
            if (res.status == 200) {

            }
        })
    }



    useEffect(() => {
        getData();


    }, [])


    return (
        <div className='w-5/6  h-full border-x-2 drop-shadow-md rounded-2xl'>
            <div className='flex justify-between py-3 px-6  mt-3'>
                <div className='flex  font-bold text-xl ' >All Files</div>
                <button className='px-4 py-1 rounded-md  flex justify-between items-center   border'
                    onClick={addFolder} >
                    <FcFolder />&nbsp;Add
                </button>
            </div>
            <div className='flex mt-3 flex-wrap w-full px-6 '>
                {
                    file.map((item, index) =>

                        <div key={index} className='flex group   p-1 m-1 flex-col justify-between 
                            rounded-lg  items-center w-40 min-h-32'>


                            <div className='flex justify-center items-center' >
                                {
                                    item.type == 'zip' ? <div className='flex self-start' onClick={() => openZIP(item.name)}  >
                                        <img src="/src/assets/zip.png" className='self-baseline mt-12 w-[7rem] h-[7rem]' alt="" />

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
                                                    onClick={() => moveFolder(item.id)}
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100
                                                     data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    Move
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