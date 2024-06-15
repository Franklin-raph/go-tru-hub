import React, { useState } from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import { GoChevronDown } from "react-icons/go";
import { IoWalletOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';


const WithdrawalRequest = () => {

    const status = ["Pending", "Paid", "Approved", "Declined"]
    const [selectedStatus, setSelectedStatus] = useState(status[0])
    const [statusDropDown, setStatusDropDown] = useState(false)
    const navigate = useNavigate()

  return (
    <div>
        <SideNav />
        <div className="w-[78%] ml-auto pb-5">
            <TopNav />
            <div className="">
                <div className="flex justify-between items-start mb-[3rem] bg-[#F2FCF7] px-[30px] py-[1rem]">
                    <div>
                        <div className="flex items-center gap-2">
                            <img src="./images/arrow-left.svg" alt="" onClick={() => navigate('/wallet')} className='cursor-pointer' />
                            <p className="text-[28px] text-primary-color font-[600]">Withdrawal request</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 justify-center items-start w-[70%] mx-auto'>
                    <div className='w-full'>
                        <div className="cursor-pointer gradient-bg p-4 rounded-[16px] shadow-lg text-white w-full">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <IoWalletOutline />
                                    <h3 className="text-sm font-medium">Wallet Balance</h3>
                                </div>
                                <p className='text-[12px]'>Secure Wallet</p>
                            </div>
                            <p className='text-[12px] mt-1'>Bal.</p>
                            <div className="mt-4 mb-[50px]">
                                <p className="text-lg font-bold">₦100000</p>
                            </div>
                            <p className='text-[12px]'>Members Full Nmae</p>
                        </div>
                        <p className='text-[14px] my-5'>User Account</p>
                        <p className='my-3'>Anagolum Beluchukwu Calistus</p>
                        <p>United Bank for Africa (4567923458)</p>
                    </div>
                    <div className='flex item-center justify-center flex-col mx-auto gap-8 w-full'>
                        <div className='w-full'>
                            <p>Current maximum balance</p>
                            <p className='border border-[#25751E] rounded-[6px] py-3 px-5 bg-[#25751E26] text-[#6F7975]'>NGN 2,000,000,000</p>
                        </div>
                        <div>
                            <p>Amount in excess of maximum balance</p>
                            <input type="text" placeholder='NGN 2,000' className='border border-[#25751E] rounded-[6px] outline-none py-3 px-5 bg-[#25751E26] w-full'/>
                        </div>
                        <div>
                            <p>Amount requested by user</p>
                            <input type="text" placeholder='NGN 2,000' className='border border-[#25751E] rounded-[6px] outline-none py-3 px-5 bg-[#25751E26] w-full'/>
                        </div>
                        <div className='relative'>
                            <p>Update Status</p>
                            <div className='border border-[#25751E] rounded-[6px] py-3 px-5 bg-[#25751E26] text-[#6F7975] flex items-center justify-between'>
                                <p>{selectedStatus}</p>
                                <GoChevronDown className='cursor-pointer' onClick={() => setStatusDropDown(!statusDropDown)} />
                            </div>
                            {
                                statusDropDown &&
                                <div className='border mt-1 rounded-[6px] bg-[#fff] text-[#6F7975]'>
                                {
                                    status.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <p onClick={() => {
                                                    setSelectedStatus(item)
                                                    setStatusDropDown(false)
                                                }} className='cursor-pointer p-3 hover:bg-gray-200'>{item}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            }
                        </div>
                        <button className='text-white bg-primary-color w-full rounded-[4px] mt-[.5rem] px-[35px] py-[16px] text-center mx-auto'>Update status</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WithdrawalRequest