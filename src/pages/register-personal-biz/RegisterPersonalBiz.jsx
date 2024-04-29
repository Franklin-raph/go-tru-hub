import React from 'react'
import { GoChevronLeft } from 'react-icons/go'
import { MdOutlineFileUpload } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const RegisterPersonalBiz = () => {

  const navigate = useNavigate()

  return (
    <div>
        <div className='w-[100%] mx-auto my-[4rem]'>
            <div className='w-[55%] mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1 cursor-pointer' onClick={() => navigate('/register')}>
                        <GoChevronLeft />
                        <p>Back</p>
                    </div>
                    <p className='text-[#19201D] text-[24px] font-[500]'>Personal Business</p>
                    <p></p>
                </div>
                <p className='text-[#828282] mt-8 mb-10'>By proceeding, you are registering your organization as a personal business. Not a personal business? Return to previous screen and select your organization type.</p>
                <div className='flex items-center gap-5 w-full'>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Name of Establishment</label>
                        <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Business Type</label>
                        <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                </div>
                <div className='flex items-center gap-5 w-full my-[3rem]'>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Phone Number</label>
                        <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Email Address</label>
                        <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                </div>
                <div className='flex items-center gap-5 w-full'>
                    <div className='w-full'>
                        <div className="flex items-center justify-between">
                            <label className='block text-left mb-2'>Enter Referral Code</label>
                            <p className='text-[#828282] text-[12px]'>(Optional)</p>
                        </div>
                        <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Personal Address</label>
                        <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                </div>
                <div className='flex items-center gap-5 w-full my-[3rem]'>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Year of Establishment</label>
                        <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Name of proprietor</label>
                        <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                </div>
                <div className='w-full'>
                    <label className='block text-left mb-2'>Business ddress</label>
                    <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                </div>
                <button className='text-white bg-primary-color w-full rounded-[4px] mt-[2.5rem] px-[35px] py-[16px] text-center mx-auto'>Proceed</button>
            </div>
        </div>
    </div>
  )
}

export default RegisterPersonalBiz