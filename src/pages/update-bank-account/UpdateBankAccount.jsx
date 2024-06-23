import React, { useEffect, useState } from 'react'
import TopNav from '../../components/top-nav/TopNav'
import SideNav from '../../components/side-nav/SideNav'
import { useNavigate } from 'react-router-dom'
import { IoChevronDownOutline } from "react-icons/io5";
import { FiLoader } from "react-icons/fi";
import Alert from '../../components/alert/Alert';


const UpdateBankAccount = () => {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const [allBanks, setAllBanks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [bankDropDown, setBankDropDown] = useState(false)
    const [selectedBank, setSelectedBank] = useState('Select bank')
    const [accNum, setAccNum] = useState('')
    const [bankCode, setBankCode] = useState('')
    const [accInfoLoading, setAccInfoLoading] = useState(false)
    const [accountName, setAccountName] = useState('')

    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState()
    // const allBanks = 

    useEffect(() => {
        getListOfBanks()
    },[])

    useEffect(() => {
        if (accNum.length === 10) {
            getAccountName()
        }
    }, [accNum])

    async function getListOfBanks() {
        const res = await fetch('https://api.paystack.co/bank')
        const data = await res.json()
        setAllBanks(data.data)
        console.log(data.data);
    }

    async function getAccountName(){
        if(selectedBank === 'Select bank' || selectedBank === ''){
            setAlertType('error')
            setMsg('Please select a bank')
            return
        }else{
            setAccInfoLoading(true)
            console.log(bankCode);
            const res = await fetch(`https://api.paystack.co/bank/resolve?account_number=${accNum}&bank_code=${bankCode}`,{
                headers : {
                    'Authorization': `Bearer sk_test_9a412d97576fd7676fb5d561e06b96546f9303de`
                }
            })
            const data = await res.json()
            if(res) setAccInfoLoading(false)
            setAccountName(data.data.account_name)
        if(!res.ok){
            setAlertType('error')
            setMsg(data.message)
            return
        }
            console.log(data);
        }
    }

  return (
    <div>
        <SideNav />
        <div className="w-[78%] ml-auto pb-5 h-[100dvh]">
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
                <div className='flex item-center justify-center flex-col w-[90%] mx-auto'>





                <div className='flex flex-col sm:flex-row items-center gap-5 w-full'>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Business Name</label>
                        <input type="text" onChange={e => setNameOfEstablishment(e.target.value)} className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Primary Contact Email</label>
                        <input type="text" onChange={e => setBizType(e.target.value)} className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row items-center gap-5 w-full my-[3rem]'>
                    <div className='w-full relative'>
                        <label className='block text-left mb-2'>Settlement Bank</label>
                        <div className='flex items-center justify-between border rounded-[6px] py-3 px-5 w-full'>
                            <input type="text" value={selectedBank} onChange={e => setEmail(e.target.value)} className='outline-none w-full rounded-[4px]'/>
                            <IoChevronDownOutline className='cursor-pointer' onClick={() => setBankDropDown(!bankDropDown)} />
                        </div>
                        <p className='mt-1 opacity-0'>Account Name: {accountName} </p>
                        {
                            bankDropDown &&
                            <div className='absolute z-10 top-[80px] border rounded-[5px] bg-white w-full h-[350px] overflow-y-scroll'>
                                {
                                    allBanks.map(bank => {
                                        return (
                                            <p className='cursor-pointer hover:bg-gray-300 p-2' onClick={() => {
                                                setSelectedBank(bank.name)
                                                setBankDropDown(!bankDropDown)
                                                setBankCode(bank.code)
                                            }}>{bank.name}</p>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Account Number</label>
                        <div className='flex items-center justify-between border rounded-[6px] py-3 px-5'>
                            <input type="number" onChange={(e) => setAccNum(e.target.value)} placeholder='Enter Account Number' className='bg-transparent outline-none' />
                            {
                                accInfoLoading && <FiLoader className='text-gray-500 animate-spin' />
                            }
                        </div>
                        <p className='mt-1'>Account Name: {accountName} </p>
                        {/* <input type="text" onChange={e => setPhone(e.target.value)} className='px-4 py-3 outline-none border w-full rounded-[4px]'/> */}
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row items-center gap-5 w-full'>
                    <div className='w-full'>
                        <div className="flex items-center justify-between">
                            <label className='block text-left mb-2'>Primary Contact Name</label>
                        </div>
                        <input type="text" onChange={e => setReferalCode(e.target.value)} className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Primary Contact Phone</label>
                        <input type="text" onChange={e => setBusinessAddress(e.target.value)} className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row items-center gap-5 w-full my-[3rem]'>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Description</label>
                        <input type="text" onChange={e => setYearOfEstablishment(e.target.value)} className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                </div>

                

                    {/* <div className='relative'>
                        <p>Bank</p>
                        <div className='flex items-center justify-between border border-[#25751E] rounded-[6px] py-3 px-5 bg-[#25751E26]'>
                            <p>{selectedBank}</p>
                            <IoChevronDownOutline className='cursor-pointer' onClick={() => setBankDropDown(!bankDropDown)} />
                        </div>
                        {
                            bankDropDown &&
                            <div className='absolute top-[80px] border rounded-[5px] bg-white w-full h-[300px] overflow-y-scroll'>
                                {
                                    allBanks.map(bank => {
                                        return (
                                            <p className='cursor-pointer hover:bg-gray-300 p-2' onClick={() => {
                                                setSelectedBank(bank.name)
                                                setBankDropDown(!bankDropDown)
                                                setBankCode(bank.code)
                                            }}>{bank.name}</p>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div> */}
                    {/* <div>
                        <p>Account Number</p>
                        <div className='flex items-center justify-between border border-[#25751E] rounded-[6px] py-3 px-5 bg-[#25751E26]'>
                            <input type="number" onChange={(e) => setAccNum(e.target.value)} placeholder='Enter Account Number' className='bg-transparent outline-none' />
                            {
                                accInfoLoading && <FiLoader className='text-gray-500 animate-spin' />
                            }
                        </div>
                        <p className='mt-1'>Account Name: {accountName} </p>
                    </div> */}
                    <button className='text-white bg-primary-color w-full rounded-[4px] mt-[.5rem] px-[35px] py-[16px] text-center mx-auto'>Proceed</button>
                </div>
            </div>
        </div>
        {
          msg && <Alert msg={msg} setMsg={setMsg} alertType={alertType}/>
        }
    </div>
  )
}

export default UpdateBankAccount