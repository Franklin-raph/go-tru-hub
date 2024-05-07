import React from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import { useNavigate } from 'react-router-dom'

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
            </div>
        </div>
    </div>
  )
}

export default SubSummary