import React, { useState } from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoCloseOutline } from 'react-icons/io5';
import BtnLoader from '../../components/btn-loader/BtnLoader';

const Settings = () => {

    const [editLocationModal, setEditLocationModal] = useState(false)
    const [deleteLocationModal, setDeleteLocationModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [encrypted, setEncrypted] = useState(true);

  return (
    <div>
        <SideNav />
        <div className="w-[78%] ml-auto pb-5">
            <TopNav />
            <div className="">
                <div className="flex justify-between items-start mb-[3rem] bg-[#F2FCF7] px-[30px] py-[1rem]">
                    <div>
                        <div className="flex items-center gap-2">
                            <img src="./images/arrow-left.svg" alt="" onClick={() => navigate('/')} className='cursor-pointer' />
                            <p className="text-[28px] text-primary-color font-[600]">Settings</p>
                        </div>
                        <p className='text-[#4F4F4F]'>Manage your account security, notifications and contact support</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-3 p-8 flex-col'>
                    <div className="bg-[#F7F7F7] px-8 py-6 w-[90%] rounded-[16px]">
                        <div className='mb-6'>
                            <div className='flex items-center gap-3'>
                                <img src="./images/shield.svg" alt="" />
                                <h2 className="text-xl text-[#19201D]">Password management</h2>
                            </div>
                            <p className='text-[#4F4F4F] mt-2'>Reset your password</p>
                        </div>
                        <form>
                            <div className='flex items-center gap-5'>
                                <div className="w-full" style={{marginBottom:"30px"}}>
                                    <p style={{marginBottom:"5px"}}>Current Password</p>
                                    <div className="border w-full rounded-[4px] flex items-center justify-between px-4 py-3">
                                        <input
                                            className='w-full text-[#19201d] outline-none bg-transparent'
                                            type={encrypted ? "password" : "text"}
                                            placeholder="New password"
                                            value={password}
                                            onChange={(e) => {
                                            setPassword(e.target.value);
                                            }}
                                        />
                                        <div>
                                            {!encrypted ? (
                                                <img src="./images/see.svg" onClick={()=> setEncrypted(!encrypted)} className='cursor-pointer' />
                                            ) : (
                                                <img src="./images/encrypt.svg" onClick={()=> setEncrypted(!encrypted)} className='cursor-pointer'  />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full" style={{marginBottom:"30px"}}>
                                    <p style={{marginBottom:"5px"}}>New Password</p>
                                    <div className="border w-full rounded-[4px] flex items-center justify-between px-4 py-3">
                                        <input
                                            className='w-full text-[#19201d] outline-none bg-transparent'
                                            type={encrypted ? "password" : "text"}
                                            placeholder="New password"
                                            value={password}
                                            onChange={(e) => {
                                            setPassword(e.target.value);
                                            }}
                                        />
                                        <div>
                                            {!encrypted ? (
                                                <img src="./images/see.svg" onClick={()=> setEncrypted(!encrypted)} className='cursor-pointer' />
                                            ) : (
                                                <img src="./images/encrypt.svg" onClick={()=> setEncrypted(!encrypted)} className='cursor-pointer'  />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-end gap-5'>
                                <div className="w-full" style={{marginBottom:"30px"}}>
                                    <p style={{marginBottom:"5px"}}>Re-enter Password</p>
                                    <div className="border w-full rounded-[4px] flex items-center justify-between px-4 py-3">
                                        <input
                                            className='w-full text-[#19201d] outline-none bg-transparent'
                                            type={encrypted ? "password" : "text"}
                                            placeholder="New password"
                                            value={password}
                                            onChange={(e) => {
                                            setPassword(e.target.value);
                                            }}
                                        />
                                        <div>
                                            {!encrypted ? (
                                                <img src="./images/see.svg" onClick={()=> setEncrypted(!encrypted)} className='cursor-pointer' />
                                            ) : (
                                                <img src="./images/encrypt.svg" onClick={()=> setEncrypted(!encrypted)} className='cursor-pointer'  />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full" style={{marginBottom:"30px"}}>
                                    <button
                                        type="submit"
                                        className="bg-[#19201D] w-full text-white py-3 px-4 rounded"
                                        >
                                        Update password
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='bg-[#F7F7F7] px-8 py-6 w-[90%] rounded-[16px]'>
                        <div className='flex items-center gap-3'>
                            <img src="./images/user.svg" alt="" className='w-[15px]' />
                            <p className='text-[#19201D]'>My Account</p>
                        </div>
                        <p className='text-[#9A2525] mt-4 cursor-pointer'>Delete my organization</p>
                    </div>
                    <div className='bg-[#F7F7F7] px-8 py-6 w-[90%] rounded-[16px]'>
                        <div className='flex items-center gap-3'>
                            <img src="./images/chat.svg" alt="" className='w-[15px]' />
                            <p className='text-[#19201D]'>Support</p>
                        </div>
                        <p className='text-[#19201D] mt-4 cursor-pointer'>Get in touch</p>
                    </div>
                </div>
            </div>
        </div>

        {
            editLocationModal &&
            <>
                <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setEditLocationModal(false)}></div>
                <div className="bg-white w-[650px] fixed top-[50%] left-[50%] pt-[20px] px-[2rem] z-[100] pb-[20px]" style={{ transform: "translate(-50%, -50%)" }}>
                    <div className="flex items-center justify-between border-b pb-[5px]">
                        <p className="text-[22px]">Edit Location</p>
                        <IoCloseOutline fontSize={"20px"} cursor={"pointer"} onClick={() => setEditLocationModal(false)}/>
                    </div>
                    <div className='flex items-center justify-center flex-col mt-10 w-full'>
                        <div className='mb-5 w-full'>
                            <p className='text-[#19201D]'>Location Name</p>
                            <input type="text" className='border py-3 px-3 rounded mt-1 w-full' placeholder='Primary section' />
                        </div>
                        <div className='mb-5 w-full'>
                            <p className='text-[#19201D]'>Start Coordinates</p>
                            <input type="text" className='border py-3 px-3 rounded mt-1 w-full' placeholder='8.329780 - 3.346063' />
                            <p className='text-[#865C1D] text-[12px]'>We use a range to ensure location accuracy</p>
                        </div>
                        <div className='mb-5 w-full'>
                            <p className='text-[#19201D]'>Stop Coordinates</p>
                            <input type="text" className='border py-3 px-3 rounded mt-1 w-full' placeholder='8.329780 - 3.346063' />
                        </div>
                        <button className='text-white bg-primary-color w-full rounded-[4px] mt-[.5rem] px-[35px] py-[16px] text-center mx-auto'>Update Location</button>
                    </div>
                </div>
            </>
        }

        {   deleteLocationModal &&
            <>
                <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setDeleteLocationModal(false)}></div>
                <div className="flex items-center flex-col text-center justify-center gap-3 bg-white w-[450px] fixed top-[50%] left-[50%] py-[50px] px-[2rem] z-[100]" style={{ transform: "translate(-50%, -50%)" }}>
                    <img src="./images/approval.svg" alt="" />
                    <p className='text-text-color font-[500]'>Confirm</p>
                    <p className='text-[#6F7975] text-[14px]'>Are you sure you want to delete this location? This action cannot be undone.</p>
                    {
                        isLoading ? 
                        <BtnLoader />
                        :
                        <div className='flex items-center gap-5 justify-center mt-9'>
                            <button className='border border-[#19201D] text-[#19201D] px-5 py-3 rounded-[4px] text-[14px] w-[140px] font-[600]' onClick={() => setDeleteLocationModal(false)}>Back</button>
                            <button className="bg-[#9A2525] text-white px-5 py-3 rounded-[4px] text-[14px] w-[140px]" onClick={() => console.log("hello")}>Delete</button>
                        </div>
                    }
                </div>
            </>
        }
    </div>
  )
}

export default Settings