import React, { useEffect, useState } from 'react'
import TopNav from '../../components/top-nav/TopNav'
import SideNav from '../../components/side-nav/SideNav'
import { useNavigate } from 'react-router-dom'
import { IoWalletOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";

const UpdateBankAccount = () => {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const [allBanks, setAllBanks] = useState(['Access Bank', 'Uba Bank', 'Zenith Bank', 'First Bank'])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [bankDropDown, setBankDropDown] = useState(false)
    const [selectedBank, setSelectedBank] = useState('Select bank')
    // const allBanks = 

    useEffect(() => {
        getListOfBanks()
    },[])
    async function getListOfBanks() {
        const res = await fetch('https://vapi.verifyme.ng/v1/banks')
        const data = await res.json()
        console.log(data);
    }

  return (
    <div>
        <SideNav />
        <div className="w-[78%] ml-auto pb-5">
            <TopNav />
            <div className="">
                <div className="flex justify-between items-start mb-[3rem] bg-[#F2FCF7] px-[30px] py-[1rem]">
                    <div>
                        <div className="flex items-center gap-2">
                            <img src="./images/arrow-left.svg" alt="" onClick={() => navigate('/bank-account')} className='cursor-pointer' />
                            <p className="text-[28px] text-primary-color font-[600]">Bank Account</p>
                        </div>
                        <p className='text-[#4F4F4F]'>Enter your preferred bank account for wallet deposits</p>
                    </div>
                    {/* <div className='flex items-center gap-5'>
                        <button className="bg-[#2D3934] text-white px-5 py-3 rounded-[8px] text-[14px]" onClick={() => navigate('/update-bank-account')}>Update Account</button>
                    </div> */}
                </div>
                <div className='flex item-center justify-center flex-col w-[40%] mx-auto gap-8'>
                    <div className='relative'>
                        <p>Bank</p>
                        <div className='flex items-center justify-between border border-[#25751E] rounded-[6px] py-3 px-5 bg-[#25751E26]'>
                            <p>{selectedBank}</p>
                            <img src="./images/arrow-down.svg" alt="" className='cursor-pointer' onClick={() => setBankDropDown(!bankDropDown)}/>
                        </div>
                        {
                            bankDropDown &&
                            <div className='absolute top-[80px] border rounded-[5px] bg-white w-full'>
                                {
                                    allBanks.map(bank => {
                                        return (
                                            <p className='cursor-pointer hover:bg-gray-300 p-2' onClick={() => {
                                                setSelectedBank(bank)
                                                setBankDropDown(!bankDropDown)
                                            }}>{bank}</p>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                    <div>
                        <p>Account Number</p>
                        <div className='flex items-center justify-between border border-[#25751E] rounded-[6px] py-3 px-5 bg-[#25751E26]'>
                            <input type="text" placeholder='Enter Account Number' className='bg-transparent' />
                            <p>O</p>
                        </div>
                        <p>Account Name</p>
                    </div>
                    <button className='text-white bg-primary-color w-full rounded-[4px] mt-[.5rem] px-[35px] py-[16px] text-center mx-auto'>Proceed</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateBankAccount