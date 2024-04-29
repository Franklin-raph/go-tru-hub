import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  return (
    <div className='w-[100%] mx-auto my-[4rem]'>
      <div className='w-[50%] mx-auto'>
        <p className='text-[28px] mb-[40px] text-center'>What type of organization are you registering?</p>
        <div className='border rounded-[4px] px-4 py-3 w-[80%] mx-[auto] cursor-pointer' onClick={() => navigate('/register-organization')}>
          <p className='text-[#19201D] font-[600] text-[26px]'>Registered Organizations</p>
          <p className='text-[#6F7975] mt-4'>Companies with Registered CAC</p>
        </div>
        <div className='border rounded-[4px] px-4 py-3 w-[80%] mx-auto my-10 cursor-pointer' onClick={() => navigate('/rregister-personal-biz')}>
          <p className='text-[#19201D] font-[600] text-[26px]'>Personal Businesses</p>
          <p className='text-[#6F7975] mt-4'>Businesses not registered</p>
        </div>
        <div className='border rounded-[4px] px-4 py-3 w-[80%] mx-auto cursor-pointer' onClick={() => navigate('/regiser-government-biz')}>
          <p className='text-[#19201D] font-[600] text-[26px]'>Government/Licensed Institutions</p>
          <p className='text-[#6F7975] mt-4'>Government Agencies and Ministries</p>
        </div>
      </div>

      <p className='mt-[7rem] text-center'>Already have an account? <span className='text-secondary-color cursor-pointer' onClick={() => navigate('/login')}>Login</span> </p>
    </div>
  )
}

export default Register