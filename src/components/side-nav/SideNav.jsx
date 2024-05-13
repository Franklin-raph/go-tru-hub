import React, { useState } from 'react'
import { IoChevronDownOutline } from 'react-icons/io5'
import { LuScanLine } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom'
import { PiFileArrowUpThin } from "react-icons/pi";
import { GoClock } from "react-icons/go";
import { CiShop } from "react-icons/ci";
import { BiTargetLock } from "react-icons/bi";



const SideNav = () => {

  const [tradeDropDown, setTradeDropDown] = useState(false)
  const user = JSON.parse(localStorage.getItem('user'))
  const location = useLocation()

  console.log(user);

    setInterval(() => {
    fetch('https://api-gotruhub.onrender.com/')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}, 180000); // 180000 milliseconds = 3 minutes


  return (
    <div className='bg-[#19201D] scrollbar w-[22%] h-[100vh] top-0 fixed overflow-y-auto py-5 overflow-x-hidden'>
        <div className='pl-5 pb-5'>
            <img src="./images/logo-white.svg" alt="" />
        </div>
        <div className="px-[32px] my-10 text-white">
          <p className="text-[12px] text-[#6F7975] mb-2">MAIN MENU</p>
          <Link to='/dashboard' className={ location.pathname === '/dashboard' ? `flex items-center justify-between py-[10px] text-[#25751E]` :`flex items-center justify-between py-[10px]`}>
            <div className="flex items-center">
              <img src="./images/dashboard-active.svg" className="mr-[15.67px]"/>
              <p className="">Dashboard</p>
            </div>
          </Link>
          <Link to='/manage-users' className={ location.pathname === '/manage-users' || location.pathname === '/create-user' ? `flex items-center justify-between py-[10px] text-[#25751E]` :`flex items-center justify-between py-[10px]`}>
            <div className="flex items-center">
                <img src="./images/manage-users-active.svg" className="mr-[15.67px]" alt="" />
                <p className="">Manage users</p>
            </div>
          </Link>
        </div>
        <div className="px-[32px] my-10 text-white">
          <p className="text-[12px] text-[#6F7975] mb-2">FEATURES</p>
          <Link to='/monitor' className="flex items-center justify-between py-[10px]">
            <div className="flex items-center">
              <img src="./images/scan-white.svg" className="mr-[15.67px]"/>
              <p className="">Pass</p>
            </div>
          </Link>

          <div className="flex flex-col justify-between py-[10px]">
            <div className="flex items-center justify-between w-full cursor-pointer" onClick={() => setTradeDropDown(!tradeDropDown)}>
              <div className="flex items-center">
                  <img src="./images/wallet-active.svg" className="mr-[15.67px]" alt="" />
                  <p className="">Trade</p>
              </div>
              <IoChevronDownOutline color="d7d7d7"/>
            </div>
            {tradeDropDown &&
              <div className='mt-3 ml-4'>
                <div className='flex items-center gap-2 mb-4'>
                  <CiShop />
                  <p className="">Shop</p>
                </div>
                <div className='flex items-center gap-2 my-4'>
                  <img src="./images/wallet-active.svg"/>
                  <p className="">Wallet</p>
                </div>
                <div className='flex items-center gap-2 my-4'>
                  <img src="./images/orders.svg"/>
                  <p className="">Orders</p>
                </div>
                <div className='flex items-center gap-2 my-4'>
                  <img src="./images/inventory.svg"/>
                  <p className="">Inventory</p>
                </div>
                <div className='flex items-center gap-2 my-4'>
                  <img src="./images/clock-1.svg"/>
                  <p className="">Transaction History</p>
                </div>
              </div>
            }
          </div>

          <Link to='/monitor' className="flex items-center justify-between py-[10px]">
            <div className="flex items-center">
              <LuScanLine color="d7d7d7" className="mr-[15.67px]"/>
              <p className="">Monitor</p>
            </div>
            <IoChevronDownOutline color="d7d7d7"/>
          </Link>
          <Link to='/monitor' className="flex items-center justify-between py-[10px]">
            <div className="flex items-center">
              <PiFileArrowUpThin color="d7d7d7" className="mr-[15.67px]"/>
              <p className="">Result</p>
            </div>
          </Link>
        </div>
        <div className="px-[32px] my-10 text-white">
          <p className="text-[12px] text-[#6F7975] mb-2">OTHERS</p>
          <Link to='/subscribe' className={ location.pathname === '/subscribe' || location.pathname === '/token' || location.pathname === '/sub-summary' || location.pathname === '/active-subs' ? `flex items-center justify-between py-[10px] text-[#25751E]` :`flex items-center justify-between py-[10px]`}>
            <div className="flex items-center">
              <img src="./images/wallet-active.svg" className="mr-[15.67px]"/>
              <p className="">Subscription</p>
            </div>
          </Link>
          <Link to='/monitor' className="flex items-center justify-between py-[10px]">
            <div className="flex items-center">
                <img src="./images/notification.svg" className="mr-[15.67px]" alt="" />
                <p className="">Notification</p>
            </div>
          </Link>
          <Link to='/monitor' className="flex items-center justify-between py-[10px]">
            <div className="flex items-center">
              <img src="./images/setting.svg" className='mr-[15.67px]' alt="" />
              <p className="">Account</p>
            </div>
          </Link>
        </div>
        <div className="mx-[32px] mt-10">
          <Link
              to="/settings"
              style={{
                borderTop:'1px solid #444A47',
                borderBottom:'1px solid #444A47',
                padding: "0.8rem 0",
                marginBottom: 4,
                marginLeft: "0px",

              }}
              className="flex align-center hover"
            >
              <img src="/images/avatar.svg"className="w-[50px]" style={{ marginRight: 12, }} />
              <div>
                <p className="text-[12px] font-[600] text-white" style={{ whiteSpace: "nowrap" }}>
                  {user && user.data.details.email}
                </p>
                <p className="text-[#6F7975]">Admin</p>
              </div>
            </Link>
        </div>
    </div>
  )
}

export default SideNav