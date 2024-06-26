import React, { useEffect, useState } from 'react'
import TopNav from '../../components/top-nav/TopNav'
import SideNav from '../../components/side-nav/SideNav'
import { useNavigate } from 'react-router-dom'
import { IoWalletOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";

const BankAccount = ({baseUrl}) => {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))

    async function getBankAccountDetails(){
        const res = await fetch(`${baseUrl}/bank`,{
            headers:{
                'Authorization': `Bearer ${user.data.access_token}`
            }
        })
        const data = await res.json()
        console.log(data)
    }

    useEffect(() => {
        getBankAccountDetails()
    },[])


  return (
    <div>
        <SideNav />
        <div className="w-[78%] ml-auto pb-5">
            <TopNav />
            <div className="">
                <div className="flex justify-between items-start mb-[3rem] bg-[#F2FCF7] px-[30px] py-[1rem]">
                    <div className="flex items-center gap-2">
                        <img src="./images/arrow-left.svg" alt="" onClick={() => navigate('/wallet')} className='cursor-pointer' />
                        <p className="text-[28px] text-primary-color font-[600]">Bank Account</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <button className="bg-[#2D3934] text-white px-5 py-3 rounded-[8px] text-[14px]" onClick={() => navigate('/update-bank-account')}>Update Account</button>
                    </div>
                </div>
                <div className='flex item-center justify-center flex-col w-[40%] mx-auto gap-8'>
                    <div>
                        <p>Bank</p>
                        <p className='border border-[#25751E] rounded-[6px] py-3 px-5 bg-[#25751E26]'>United Bank for Africa</p>
                    </div>
                    <div>
                        <p>Account Number</p>
                        <p className='border border-[#25751E] rounded-[6px] py-3 px-5 bg-[#25751E26]'>2078657890</p>
                        <p>Anagolum Beluchukwu C.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BankAccount