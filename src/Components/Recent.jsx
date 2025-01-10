import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';
import React, { useState } from 'react';
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import { HiOutlineDotsVertical } from "react-icons/hi";

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
    return (
        <div className='w-5/6 h-full border-x-2 drop-shadow-md rounded-2xl'>
            <div className='flex justify-between py-3 px-6  mt-3'>
                <div className='flex  font-bold text-xl ' >Recent</div>

            </div>
            <div className='flex mt-3 flex-wrap w-full px-4'>
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
                            <div className='flex w-full justify-between items-center ps-2 px-2'>
                                <div>  <div className='text-sm font-medium '> {item.name}  </div>
                                </div>

                                <CDropdown>
                                    <CDropdownToggle > <HiOutlineDotsVertical /> </CDropdownToggle>

                                    <CDropdownMenu>
                                        <CDropdownItem href="#">Delete</CDropdownItem>
                                        <CDropdownItem href="#">Rename</CDropdownItem>
                                        <CDropdownItem href="#">Copy </CDropdownItem>
                                        <CDropdownItem href="#">Move </CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>

                            </div>


                        </div>
                    )
                }


            </div>







        </div >
    )
}

export default Recent