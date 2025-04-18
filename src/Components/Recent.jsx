import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Axios from '../Axios/Axios';



const fileArray = [
    { id: 1, name: "Picture" },
    { id: 2, name: "Music" },
    { id: 3, name: "Documents" },
    { id: 4, name: "Screenshoots" },
    { id: 5, name: "What's App" },
]


const Recent = () => {
    const [showDialog, setShowDialog] = useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    const addFolder = () => {
        Axios({ apiName: "create_folder/", method: "POST" }).then((res) => {
            if (res.status == 201) {


            }
        })

    }
    const deleteFolder = (id) => {
        Axios({
            apiName: "delete_folder/",
            method: "PUT",
            dataObject: { id: id }
        }
        ).then((res) => {
            if (res.status == 200) {


            }
        })

    }
    const renameFolder = (id) => {




    }

    useEffect(() => {
        Axios({ apiName: "list_folders/", method: "GET" }).then((res) => {
            setFile(s => s = res.data.data)
        })

    }, [])
    return (
        <div className='w-5/6 h-full border-x-2 drop-shadow-md rounded-2xl'>
            <div className='flex justify-between py-3 px-6  mt-3'>
                <div className='flex  font-bold text-xl ' >Recent</div>

            </div>
            <div className='flex mt-3 flex-wrap w-full px-4'>
                {
                    fileArray.map((item, index) =>
                        <div key={index} className='flex group   p-1 m-1 flex-col justify-center 
                                                   rounded-lg  items-center w-40 min-h-32'>

                            <div className='flex justify-center items-center'>
                                <FcFolder className='w-40  group-hover:hidden h-52 transition transform
                                                       hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' />

                                <FcOpenedFolder className='w-40 hidden group-hover:flex h-52 transition transform
                                                       hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' />

                            </div>
                            <div className='flex w-full justify-between items-center ps-2 px-2'  >
                                <div>  <div className='text-sm font-medium w-full ' contentEditable='true'
                                    suppressContentEditableWarning={true}
                                    onInput={e => setFileName(s => s = e.target.textContent)} > {item.name}  </div>
                                </div>

                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md   py-2 text-sm font-semibold text-gray-900 
                                           hover:bg-gray-50">
                                            <HiOutlineDotsVertical />
                                        </MenuButton>
                                    </div>

                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-50 origin-top-right rounded-md bg-white
                                         shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 
                                         data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 
                                         data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <div className="py-1">
                                            <MenuItem>
                                                <a
                                                    onClick={deleteFolder(item.id)}
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100
                                                     data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    Delete
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    onClick={renameFolder(item.id)}
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100
                                                     data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    Rename
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







        </div >
    )
}

export default Recent