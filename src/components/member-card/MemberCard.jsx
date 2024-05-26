import React from 'react'
import { useNavigate } from 'react-router-dom'

const MemberCard = () => {

    const navigate = useNavigate()

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl mb-10">
      <div className="p-8">
        {/* <div className="flex items-center justify-center">
          <img className="h-[120] w-[120px] rounded-full object-cover" src="./images/member.svg" alt="Profile" />
        </div> */}
        <div className="text-center">
          <div className="flex justify-between">
            <div className="text-lg font-semibold flex items-center gap-3">
                <img src="./images/frame-user.svg" alt="" />
                <p>Profile data</p>
            </div>
            <img src="./images/edit.svg" alt="" className='cursor-pointer' onClick={() => navigate(`/profile-edit/${id}`)} />
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Full name</span>
              <span className="font-medium">Bridget Okoronta Yakubu</span>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="text-gray-600">Unit/Sub-unit</span>
              <span className="font-medium">JSS 1 / A</span>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="text-gray-600">Date of Birth</span>
              <span className="font-medium">March 07, 2000</span>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="text-gray-600">Role</span>
              <span className="font-medium">Guardian</span>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="text-gray-600">Gender</span>
              <span className="font-medium">Male</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberCard