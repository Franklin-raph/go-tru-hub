import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SideNav from '../../components/side-nav/SideNav';
import TopNav from '../../components/top-nav/TopNav';
import ProfileCard from '../../components/profile-card/ProfileCard';

const SingleUser = ({baseUrl}) => {

    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate();
    const { id } = useParams()
    const [currentUser, setCurrentUser] = useState()

    async function getUserInfo(){
        const res = await fetch(`${baseUrl}/users/get-user/${id}`,{
            headers:{
                Authorization:`Bearer ${user.data.access_token}`
            }
        })
        const data = await res.json()
        setCurrentUser(data.data)
        console.log(data.data.user)
    }

    useEffect(() => {
        getUserInfo()
    },[])

  return (
    <div>
        <SideNav />
        <div className="w-[78%] bg-[#F2FCF7] ml-auto">
        <TopNav />
          <div className="px-[30px] py-[1rem]">
            <div className="flex justify-between items-start mb-[3rem] bg-[#F2FCF7] py-[1rem]">
                <div className="flex items-center gap-2">
                    <img src="./images/arrow-left.svg" alt="" onClick={() => navigate('/manage-users')} className='cursor-pointer' />
                    <p className="text-[28px] text-primary-color font-[600]">{currentUser && currentUser.user.fullName}</p>
                </div>
                <button className="bg-[#646464] text-white px-5 py-3 rounded-[8px] text-[14px]" >Send Token</button>
            </div>
            {
                currentUser &&
                <ProfileCard currentUser={currentUser} id={id}/>
            }
            {/* <ProfileCard currentUser={currentUser} id={id}/> */}
          </div>
        </div>
    </div>
  )
}

export default SingleUser