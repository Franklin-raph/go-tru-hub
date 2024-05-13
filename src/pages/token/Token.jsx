import React from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import { useNavigate } from 'react-router-dom'
import { GoChevronRight } from "react-icons/go";


const Token = () => {

    const navigate = useNavigate()

  return (
    <div>
        <SideNav />
        <div className="w-[78%] ml-auto pb-5">
        <TopNav />
            <div>
                <div className="flex justify-between items-start mb-[3rem] bg-[#F2FCF7] px-[30px] py-[1rem]">
                    <div className="flex items-center gap-2">
                        <img src="./images/arrow-left.svg" alt="" onClick={() => navigate('/subscribe')} className='cursor-pointer' />
                        <p className="text-[28px] text-primary-color font-[600]">Token</p>
                    </div>
                    <button className="bg-[#646464] text-white px-5 py-3 rounded-[8px] text-[14px]" >Send Token</button>
                </div>
                <div className='px-[30px] flex items-start gap-[7rem]'>
                    <div className='w-full'>
                        <p className='text-[#19201D] font-[700] text-[24px] mb-10'>Active Subscriptions</p>
                        <div className='shadow-lg px-[20px] py-[16px] rounded-[12px] flex items-center justify-between mb-5'>
                            <div>
                                <p className='text-[#19201D] text-[18px] mb-2 font-[500]'>GotruTrade + GotruMonitor</p>
                                <p className='text-[#828282]'>20/250 Tokens Used</p>
                            </div>
                            <GoChevronRight className='text-[20px] text-[#4F4F4F] cursor-pointer' onClick={() => navigate('/active-subs')}/>
                        </div>
                        <div className='shadow-lg px-[20px] py-[16px] rounded-[12px] flex items-center justify-between mb-5'>
                            <div>
                                <p className='text-[#19201D] text-[18px] mb-2 font-[500]'>GotruPass</p>
                                <p className='text-[#828282]'>5/20 Tokens Used</p>
                            </div>
                            <GoChevronRight className='text-[20px] text-[#4F4F4F] cursor-pointer' onClick={() => navigate('/active-subs')}/>
                        </div>
                        <div className='shadow-lg px-[20px] py-[16px] rounded-[12px] flex items-center justify-between'>
                            <div>
                                <p className='text-[#19201D] text-[18px] mb-2 font-[500]'>GotruTrade + GotruMonitor</p>
                                <p className='text-[#828282]'>20/250 Tokens Used</p>
                            </div>
                            <GoChevronRight className='text-[20px] text-[#4F4F4F] cursor-pointer' onClick={() => navigate('/active-subs')}/>
                        </div>
                    </div>

                    <div className='w-full px-[26px] shadow-lg rounded-[12px] text-[#19201D] '>
                        <p className='font-[700] text-[24px] mb-10'>Subscription history</p>
                        <p className='font-[700]'>Today</p>
                        <div className='border-b border-gray-500 py-2 mb-5'>
                            <p className='font-[500] pb-2'>Sent 5 Tokens of GotruPass Basic plan</p>
                            <p className='text-[14px]'>11:35AM</p>
                        </div>
                        <div className='border-b border-gray-500 py-2 mb-5'>
                            <p className='font-[500] pb-2'>Purchased 300 Tokens of GotruPass Basic</p>
                            <p className='text-[14px]'>11:35AM</p>
                        </div>
                        <div className='border-b border-gray-500 py-2 mb-5'>
                            <p className='font-[500] pb-2'>Sent 15 Tokens of GotruTrade + GotruMonitor Combo plan</p>
                            <p className='text-[14px]'>11:35AM</p>
                        </div>
                        <div className='border-b border-gray-500 py-2 mb-5'>
                            <p className='font-[500] pb-2'>Sent 5 Tokens of GotruTrade + GotruMonitor Combo plan</p>
                            <p className='text-[14px]'>11:35AM</p>
                        </div>
                        <div className='border-b border-gray-500 py-2 mb-5'>
                            <p className='font-[500] pb-2'>Purchased 250 Tokens of GotruTrade + GotruMonitor Combo plan</p>
                            <p className='text-[14px]'>11:35AM</p>
                        </div>
                        <p className='font-[700] mb-3 mt-12'>April 24, 2024</p>
                        <div className='border-b border-gray-500 py-2 mb-5'>
                            <p className='font-[500] pb-2'>Purchased 300 Tokens of GotruPass Basic</p>
                            <p className='text-[14px]'>11:35AM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Token