import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import SideNav from '../../components/side-nav/SideNav';
import TopNav from '../../components/top-nav/TopNav';

const ManageUsers = () => {

  const user = localStorage.getItem('user')
  const navigate = useNavigate();


  return (
    <div>
      <SideNav />
      <div className="w-[78%] bg-[#F2FCF7] ml-auto h-[100dvh]">
        <TopNav />
          <div className="px-[30px] py-[1rem]">
            <div className="flex items-center justify-between mb-[3rem]">
              <p className="text-[28px] text-primary-color font-[600]">Manage Users</p>
              <div className="flex items-center gap-3">
                <button className="bg-[#2D3934] text-white px-4 py-3 rounded-[8px] text-[14px]" onClick={() => navigate('/create-user')} >Create User</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ManageUsers