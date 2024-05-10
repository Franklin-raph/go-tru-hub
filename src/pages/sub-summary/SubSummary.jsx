import React from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import { useNavigate } from 'react-router-dom'
import { IoMdStar } from 'react-icons/io'
import { BiSolidTrash } from 'react-icons/bi'

const SubSummary = () => {

    const navigate = useNavigate()

  return (
    <div>
        <SideNav />
        <div className="w-[78%] ml-auto pb-5">
        <TopNav />
            <div className="h-[100vh]">
                <div className="flex justify-between items-start mb-[3rem] bg-[#F2FCF7] px-[30px] py-[1rem]">
                    <div className="flex items-center gap-2">
                        <img src="./images/arrow-left.svg" alt="" onClick={() => navigate('/subscribe')} className='cursor-pointer' />
                        <p className="text-[28px] text-primary-color font-[600]">Subscription Summary</p>
                    </div>
                    <button className="bg-[#646464] text-white px-5 py-3 rounded-[8px] text-[14px]" >Send Token</button>
                </div>
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-left">
                        <thead class="text-[14px] border-b">
                            <tr>
                                <th scope="col" class="px-6 py-3 th1">S/N</th>
                                <th scope="col" class="px-6 py-3">Feaure</th>
                                <th scope="col" class="px-6 py-3">Duration</th>
                                <th scope="col" class="px-6 py-3">Pricing</th>
                                <th scope="col" class="px-6 py-3">Members</th>
                                <th scope="col" class="px-6 py-3">Total</th>
                                <th scope="col" class="px-6 py-3 th2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                                <td class="px-6 py-4">1</td>
                                <td class="px-6 py-4">GotruPas + GotruMonitor</td>
                                <td class="px-6 py-4">Monthly</td>
                                <td class="px-6 py-4">700</td>
                                <td class="px-6 py-4">200</td>
                                <td class="px-6 py-4">#14,000</td>
                                <td class="py-2 text-center text-white my-4">
                                    <button className='bg-[#9A2525] rounded-[8px] px-6 py-3'>Remove</button>
                                </td>
                            </tr>
                            <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                                <td class="px-6 py-4">2</td>
                                <td class="px-6 py-4">GotruPas + GotruMonitor</td>
                                <td class="px-6 py-4">Monthly</td>
                                <td class="px-6 py-4">700</td>
                                <td class="px-6 py-4">200</td>
                                <td class="px-6 py-4">#14,000</td>
                                <td class="py-2 text-center text-white my-4">
                                    <button className='bg-[#9A2525] rounded-[8px] px-6 py-3'>Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex items-center justify-between mt-5'>
                    <p></p>
                    <div className='flex items-center gap-8'>
                        <p className='text-[#1D1D1D] font-[700] text-[18px]'>#28,000</p>
                        <button className='bg-[#19201D] text-white font-[500] rounded-[8px] px-6 py-[9px]'>Pay Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubSummary