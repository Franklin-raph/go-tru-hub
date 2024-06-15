import React, { useState } from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import { CiFilter } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { SlOptionsVertical } from 'react-icons/sl';

const Pass = () => {

    const navigate = useNavigate()
    const [filterDropDown, setFilterDropdown] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [allTransaction, setAllTransactions] = useState([])
    const [msg, setMsg] = useState('')
    const filterArray = ['All', "Cash sales", "Wallet sales", "Purchases", "Deposits", "Withdrawals"]

  return (
    <div>
        <SideNav />
        <div className="w-[78%] ml-auto pb-5">
            <TopNav />
            <div className="">
                <div className="flex justify-between items-start mb-[1rem] bg-[#F2FCF7] px-[30px] py-[1rem]">
                    <div>
                        <div className="flex items-center gap-2">
                            <img src="./images/arrow-left.svg" alt="" onClick={() => navigate('/')} className='cursor-pointer' />
                            <p className="text-[28px] text-primary-color font-[600]">Pass</p>
                        </div>
                    </div>
                    <div className='relative flex items-center gap-[10px]'>
                        <div className='flex items-center bg-white p-2 rounded-[4px] cursor-pointer' onClick={() => setFilterDropdown(!filterDropDown)}>
                            <CiFilter className='mr-1'/>
                            <p className='px-5 border-l'>Filter</p>
                            <GoChevronDown />
                        </div>
                        <button className='text-white text-[14px] bg-[#2D3934] w-full rounded-[4px] px-[15px] py-[6px] text-center mx-auto' onClick={() => navigate('/location')}>Location</button>
                        <div className='absolute top-[40px] z-10'>
                            {
                                    filterDropDown &&
                                    <div className='border mt-1 rounded-[6px] bg-[#fff] text-[#6F7975]'>
                                    {
                                        filterArray.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <p onClick={() => {
                                                        setFilterDropdown(false)
                                                    }} className='cursor-pointer p-3 hover:bg-gray-200'>{item}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div class="relative overflow-x-auto mx-5 mt-10 p-8">
                    <table class="w-full text-sm text-left rtl:text-left">
                    <thead class="text-[14px] border-b">
                        <tr>
                            <th scope="col" class="py-3 th1 font-[700]">S/N</th>
                            <th scope="col" class="py-3 font-[700]">Member</th>
                            <th scope="col" class="py-3 font-[700]">Authority</th>
                            <th scope="col" class="py-3 font-[700]">Admin</th>
                            <th scope="col" class="py-3 font-[700]">Location</th>
                            <th scope="col" class="py-3 font-[700]">Time</th>
                            <th scope="col" class="py-3 font-[700]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-[#19201D]'>
                            <td className='py-3'>1.</td>
                            <td>Timi Gowon</td>
                            <td>Member</td>
                            <td>Aisha Nwosu</td>
                            <td className='text-[#25751E] underline'>40.7128, -74.0060</td>
                            <td>08:15AM</td>
                            <td>
                                <p className='text-[#418B47] py-1 px-2 rounded-[3px] bg-[#5FB56766] inline'>Sign-in</p>
                            </td>
                        </tr>
                        <tr className='text-[#19201D]'>
                            <td className='py-3'>2.</td>
                            <td>Timi Gowon</td>
                            <td>Member</td>
                            <td>Aisha Nwosu</td>
                            <td className='text-[#9A2525] underline'>40.7128, -74.0060</td>
                            <td>08:15AM</td>
                            <td>
                                <p className='text-[#9A2525] py-1 px-2 rounded-[3px] bg-[#9A252566] inline'>Sign-Out</p>
                            </td>
                        </tr>
                        <tr className='text-[#19201D]'>
                            <td className='py-3'>3.</td>
                            <td>Timi Gowon</td>
                            <td>Member</td>
                            <td>Aisha Nwosu</td>
                            <td className='text-[#25751E] underline'>40.7128, -74.0060</td>
                            <td>08:15AM</td>
                            <td>
                                <p className='text-[#418B47] py-1 px-2 rounded-[3px] bg-[#5FB56766] inline'>Sign-in</p>
                            </td>
                        </tr>
                        <tr className='text-[#19201D]'>
                            <td className='py-3'>4.</td>
                            <td>Timi Gowon</td>
                            <td>Member</td>
                            <td>Aisha Nwosu</td>
                            <td className='text-[#9A2525] underline'>40.7128, -74.0060</td>
                            <td>08:15AM</td>
                            <td>
                                <p className='text-[#9A2525] py-1 px-2 rounded-[3px] bg-[#9A252566] inline'>Sign-Out</p>
                            </td>
                        </tr>
                        <tr className='text-[#19201D]'>
                            <td className='py-3'>5.</td>
                            <td>Timi Gowon</td>
                            <td>Member</td>
                            <td>Aisha Nwosu</td>
                            <td className='text-[#25751E] underline'>40.7128, -74.0060</td>
                            <td>08:15AM</td>
                            <td>
                                <p className='text-[#418B47] py-1 px-2 rounded-[3px] bg-[#5FB56766] inline'>Sign-in</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Pass