import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
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
const AllFiles = () => {
    const [file, setFile] = useState([]);

    useEffect(() => {
        Axios("list_folders/", "GET").then((res) => {
            setFile(s => s = res.data.data)
        })

    }, [])


    const addFolder = () => {
        Axios("create_folder/", "POST").then((res) => {
            if (res.status == 201) {


            }
        })

    }
    const deleteFolder = (id) => {
        Axios("delete_folder/", "PUT", { id: id }).then((res) => {
            if (res.status == 200) {


            }
        })

    }
    const renameFolder = () => {

    }


    return (
        <div className='w-5/6 border-x-2 drop-shadow-md rounded-2xl'>
            <div className='flex justify-between py-3 px-6  mt-3'>
                <div className='flex  font-bold text-xl ' >All Files</div>
                <button className='px-4 py-1 rounded-md  flex justify-between items-center   border'
                    onClick={addFolder} >
                    <FcFolder />&nbsp;Add
                </button>
            </div>
            <div className='flex mt-3 flex-wrap w-full px-6'>
                {
                    fileArray.map((item) =>
                        <div key={item.id} className='flex group   p-1 m-1 flex-col justify-center 
                            rounded-lg  items-center w-40 min-h-32'>

                            <div className='flex justify-center items-center'>
                                <FcFolder className='w-40  group-hover:hidden h-52 transition transform
                                hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' />

                                <FcOpenedFolder className='w-40 hidden group-hover:flex h-52 transition transform
                                hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' />

                            </div>
                            <div className='flex w-full justify-between items-center ps-2 px-2'  >
                                <div>  <div className='text-sm font-medium w-full ' contentEditable > {item.name}  </div>
                                </div>

                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                            <HiOutlineDotsVertical />
                                            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                                        </MenuButton>
                                    </div>

                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <div className="py-1">
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    Account settings
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    Support
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    License
                                                </a>
                                            </MenuItem>
                                            <form action="#" method="POST">
                                                <MenuItem>
                                                    <button
                                                        type="submit"
                                                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                    >
                                                        Sign out
                                                    </button>
                                                </MenuItem>
                                            </form>
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