import React from 'react'
import { IoChevronDownOutline } from 'react-icons/io5'
import { LuScanLine } from "react-icons/lu";
import { Link } from 'react-router-dom'
import { PiFileArrowUpThin } from "react-icons/pi";


const SideNav = () => {
  return (
    <div className='bg-[#19201D] w-[18%] h-[100vh] fixed overflow-y-auto py-5 overflow-x-hidden'>
        <div className='pl-5'>
            <img src="./images/logo-white.svg" alt="" />
        </div>
        <div className="px-[32px] my-10">
          <p className="f12 fg-grey5 mb-2">FEATURES</p>
          <Link to='/monitor' className="flex items-center justify-between py-[10px]">
            <div className="flex items-center">
              <img src="./images/manage-users-active.svg" className="mr-[15.67px]"/>
              <p className="fg-dark7">Pass</p>
            </div>
          </Link>
          <Link to='/monitor' className="flex items-center justify-between py-[10px]">
            <div className="flex items-center">
                <img src="./images/wallet-active.svg" className="mr-[15.67px]" alt="" />
                <p className="fg-dark7">Trade</p>
            </div>
            <IoChevronDownOutline color="d7d7d7"/>
          </Link>
          <Link to='/monitor' className="flex items-center justify-between py-[10px]">
            <div className="flex items-center">
              <LuScanLine color="d7d7d7" className="mr-[15.67px]"/>
              <p className="fg-dark7">Monitor</p>
            </div>
            <IoChevronDownOutline color="d7d7d7"/>
          </Link>
          <Link to='/monitor' className="flex items-center justify-between py-[10px]">
            <div className="flex items-center">
              <PiFileArrowUpThin color="d7d7d7" className="mr-[15.67px]"/>
              <p className="fg-dark7">Result</p>
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
                <p className="fg-dark7 font-std font-[600] text-white" style={{ whiteSpace: "nowrap" }}>
                  Frank Agent
                </p>
                <p className="text-[#6F7975]">Admin</p>
              </div>
            </Link>
        </div>
    </div>
  )
}

export default SideNav