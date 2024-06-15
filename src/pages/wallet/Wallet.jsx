import React, { useEffect, useState } from 'react'
import TopNav from '../../components/top-nav/TopNav'
import SideNav from '../../components/side-nav/SideNav'
import { useNavigate } from 'react-router-dom'
import { IoWalletOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";


const Wallet = ({baseUrl}) => {

  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  const [allWithdrawals, setAllWithdrawals] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    getAllWithdrawals()
  },[])

  async function getAllWithdrawals(){
    setIsLoading(true)
    const res = await fetch(`${baseUrl}/trade/withdrawals`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const data = await res.json()
    if(res) setIsLoading(false)
    if(res.ok){
      setAllWithdrawals(data.data)
      console.log(data.data);
    }
    if(res.status === 401){
      setError(data.message)
    }
    console.log(data);
  }
  
  console.log(allWithdrawals);

  return (
    <div>
      <SideNav />
      <div className="w-[78%] ml-auto pb-5">
        <TopNav />
        <div className="">
          <div className="flex justify-between items-start mb-[3rem] bg-[#F2FCF7] px-[30px] py-[1rem]">
              <div className="flex items-center gap-2">
                  <img src="./images/arrow-left.svg" alt="" onClick={() => navigate('/')} className='cursor-pointer' />
                  <p className="text-[28px] text-primary-color font-[600]">Wallet</p>
              </div>
              <div className='flex items-center gap-5'>
                <button className="border border-[#1D1D1D] px-5 py-3 rounded-[8px] text-[14px]" onClick={() => navigate('/bank-account')}>Bank Account</button>
                <button className="bg-[#2D3934] text-white px-5 py-3 rounded-[8px] text-[14px]" onClick={() => navigate('/wallet-restriction')}>Wallet Restriction</button>
                <button className="bg-[#2D3934] text-white px-5 py-3 rounded-[8px] text-[14px]" onClick={() => navigate('/request-withdrawal')}>Request Withdrawal</button>
              </div>
          </div>
          <div className="flex items-center gap-5 px-5">
            <div className="cursor-pointer gradient-bg p-4 rounded-lg shadow-lg text-white w-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <h3 className="text-sm font-medium">Total Sales</h3>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-lg font-bold">₦100000</p>
              </div>
            </div>
            <div className="cursor-pointer gradient-bg p-4 rounded-lg shadow-lg text-white w-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <IoWalletOutline />
                  <h3 className="text-sm font-medium">Wallet Balance</h3>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-lg font-bold">₦100000</p>
              </div>
            </div>
            <div className="cursor-pointer gradient-bg p-4 rounded-lg shadow-lg text-white w-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <IoWalletOutline />
                  <h3 className="text-sm font-medium">Total Sales</h3>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-lg font-bold">₦100000</p>
              </div>
            </div>
          </div>
          <div class="relative overflow-x-auto mx-5 mt-10 shadow-lg border p-8 rounded-[10px]">
            <div className='mb-4'>
              <p className='tect-[#19201D]'>Withdrawal requests</p>
            </div>
            {
              isLoading &&
              <p>Loading...</p>
            }
            {
              error && <p className='text-center my-10 text-[20px]' >{error}</p>
            }
            {
              allWithdrawals.length > 1 &&
              <table class="w-full text-sm text-left rtl:text-left">
                  <thead class="text-[14px] border-b">
                      <tr>
                          <th scope="col" class="py-3 th1 font-[700]">S/N</th>
                          <th scope="col" class="py-3 font-[700]">Member</th>
                          <th scope="col" class="py-3 font-[700]">Date and Time</th>
                          <th scope="col" class="py-3 font-[700]">Wallet Bal.</th>
                          <th scope="col" class="py-3 font-[700]">Request Amt.</th>
                          <th scope="col" class="py-3 font-[700]">Status</th>
                          <th scope="col" class="py-3 font-[700]"></th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr className='text-[#19201D]'>
                      <td className='py-3'>1.</td>
                      <td>Timi Gowon</td>
                      <td>24 October 2024, 10:00AM</td>
                      <td className='text-[#25751E]'>#300,000</td>
                      <td>#30,000</td>
                      <td className='pr-5'>
                        <div className='text-[#D8A04C] bg-[#D8A04C1A] py-1 rounded text-center'>Pending</div>
                      </td>
                      <td>
                        <SlOptionsVertical />
                      </td>
                    </tr>
                    <tr className='text-[#19201D]'>
                      <td className='py-3'>1.</td>
                      <td>Timi Gowon</td>
                      <td>24 October 2024, 10:00AM</td>
                      <td className='text-[#25751E]'>#300,000</td>
                      <td>#30,000</td>
                      <td className='pr-5'>
                        <div className='text-[#9A2525] bg-[#9A25251A] py-1 rounded text-center'>Declined</div>
                      </td>
                      <td>
                        <SlOptionsVertical />
                      </td>
                    </tr>
                    <tr className='text-[#19201D]'>
                      <td className='py-3'>1.</td>
                      <td>Timi Gowon</td>
                      <td>24 October 2024, 10:00AM</td>
                      <td className='text-[#25751E]'>#300,000</td>
                      <td>#30,000</td>
                      <td className='pr-5'>
                        <div className='text-[#25751E] bg-[#25751E1A] py-1 rounded text-center'>Paid</div>
                      </td>
                      <td>
                        <SlOptionsVertical />
                      </td>
                    </tr>
                    <tr className='text-[#19201D]'>
                      <td className='py-3'>1.</td>
                      <td>Timi Gowon</td>
                      <td>24 October 2024, 10:00AM</td>
                      <td className='text-[#25751E]'>#300,000</td>
                      <td>#30,000</td>
                      <td className='pr-5'>
                        <div className='text-[#016FF1] bg-[#016FF11A] py-1 rounded text-center'>Approved</div>
                      </td>
                      <td>
                        <SlOptionsVertical />
                      </td>
                    </tr>
                  </tbody>
              </table>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet