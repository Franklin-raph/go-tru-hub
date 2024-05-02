import React, { useState } from 'react'
import TopNav from '../../components/top-nav/TopNav'
import SideNav from '../../components/side-nav/SideNav'
import { IoChevronDownOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import AlertModal from '../../components/alert-modals/AlertModal'

const CreateUser = () => {

    const [userTypeDropDown, setUserTypeDropDown] = useState(false)
    const [userType, setUserType] = useState('')
    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState('success')
    const [alertTitle, setAlertTitle] = useState('Check your email')
    const [isLoading, setIsLoading] = useState(false)
    const adminAccessArray = ['Gotru Pass', 'Gotru Trade', 'Gotru Monitor']
    const userTypeArray = [
        {
            label:'Member',
            info1:'This user is the direct recipient of the gotruhub tokens e.g a student',
            info2:'*To create this user category, you are required to create units in monitor first which this user can belong to.'
        },
        {
            label:'Guardian/supervisor',
            info1:'This user is a guardian/supervisor of a member e.g a parent',
            info2:'*To create this user category, you are required to have created a member to which this user can be linked'
        },
        {
            label:'Assignee',
            info1:'This user carries out specific assignment that can be monitored e.g a teacher',
            info2:''
        },
        {
            label:'Admin',
            info1:'This user has admin level access to one or more of the features on gotruhub e.g a staff',
            info2:''
        }
    ]
    const navigate = useNavigate()

  return (
    <div>
        <SideNav />
        <div className="w-[78%] bg-[#F2FCF7] ml-auto pb-5">
        <TopNav />
            <div className="px-[30px] py-[1rem]">
                <div className="flex items-center justify-between mb-[3rem]">
                    <p className="text-[28px] text-primary-color font-[600]">Create User</p>
                </div>
                <div>
                    <div className='mt-7 flex items-center gap-5 w-full'>
                        <div className='w-full'>
                            <label className='block text-left mb-2 text-text-color'>Full Name <span className='text-red-500'>*</span></label>
                            <div className='px-4 py-3 outline-none border w-full rounded-[4px]'>
                                <input placeholder='First and last name' type="text" className='outline-none w-full rounded-[4px] bg-transparent text-[14px]'/>
                            </div>
                        </div>
                        <div className='w-full'>
                            <label className='block text-text-color text-left mb-2'>Email <span className='text-red-500'>*</span></label>
                            <div className='px-4 py-3 border w-full rounded-[4px]'>
                                <input placeholder='Enter email address' type="text" className='outline-none w-full rounded-[4px] bg-transparent text-[14px]'/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 relative">
                        <label className='block text-text-color text-left mb-2'>User Type <span className='text-red-500'>*</span></label>
                        <div className='flex items-center justify-between px-4 py-3 border w-full rounded-[4px]'>
                            <input type="text" value={userType} placeholder='Select user type' className='outline-none w-full rounded-[4px] bg-transparent text-[14px]'/>
                            <IoChevronDownOutline color="d7d7d7" cursor='pointer' onClick={() => setUserTypeDropDown(!userTypeDropDown)}/>
                        </div>
                        {userTypeDropDown &&
                            <div className='py-5 bg-white  px-3 rounded-[12px] mt-5 w-full'>
                                {
                                    userTypeArray.map(type => (
                                        <div className='px-3 border-b pb-3 cursor-pointer mb-3' onClick={() => {
                                            setUserTypeDropDown(false) 
                                            setUserType(type.label)
                                        }}>
                                            <p className='text-[#1D1D1D]'>{type.label}</p>
                                            <p className='text-[#828282] mt-2 mb-3'>{type.info1}</p>
                                            <p className='text-[#865C1D]'>{type.info2}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                    {
                        userType === 'Admin' &&
                            <div className="mt-7">
                                <label className='block text-text-color text-left mb-2'>Allow this admin access to <span className='text-red-500'>*</span></label>
                                <div className='flex items-center'>
                                    {
                                        adminAccessArray.map(access => (
                                            <div className='flex items-center gap-2 w-full rounded-[4px]'>
                                                <input type="checkbox" className='outline-none rounded-[4px] bg-transparent text-[14px]'/>
                                                <p className='text-[#828282]'>{access}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                    }

                    <div className="mt-7">
                        <label className='block text-text-color text-left mb-2'>
                            {userType === "Guardian/supervisor" ? `Guardian's Image`:`User's image`} <span className='text-red-500'>*</span>
                        </label>
                        <div className='relative flex items-center justify-center flex-col rounded-[16px] h-[300px] w-full' style={{ border:'1.5px dashed #D0D5DD' }}>
                            <img src="./images/file-upload.svg" alt="" />
                            <p className='text-text-color font-[600] mt-5'>Click to upload <span className='font-[400] text-[#475367]'>or drag and drop</span> </p>
                            <p className='text-[#98A2B3]'>PNG, JPG (max. 5mb)</p>
                            <div className='flex items-center gap-[15px] w-full mt-5'>
                                <div className='w-[35%] ml-auto h-[2px] bg-[#F0F2F5]'></div>
                                <p>OR</p>
                                <div className='w-[35%] mr-auto h-[2px] bg-[#F0F2F5]'></div>
                            </div>
                            <input type="file" className='cursor-pointer absolute opacity-0 h-full outline-none w-full rounded-[4px] bg-transparent text-[14px]'/>
                            <button className='text-white bg-primary-color rounded-[4px] mt-[2.5rem] px-[28px] py-[10px] text-center mx-auto'>Browse Files</button>
                        </div>
                        {userType === "Guardian/supervisor" && 
                            <p className='text-[#4F4F4F] text-[14px] mt-4'>For the purpose of gotrupass, a member can have multiple authorities allowed to sign them in/out, upload the images of those authorities below. <span className='cursor-pointer text-secondary-color underline'>Learn more about gotrupass</span> </p>
                        }
                    </div>
                    {
                        userType === "Guardian/supervisor" &&
                        <>
                            <div className="mt-7">
                                <label className='block text-text-color text-left mb-2'>
                                    Image of guardian’s Signature <span className='text-red-500'>*</span>
                                </label>
                                <div className='relative flex items-center justify-center flex-col rounded-[16px] h-[300px] w-full' style={{ border:'1.5px dashed #D0D5DD' }}>
                                    <img src="./images/file-upload.svg" alt="" />
                                    <p className='text-text-color font-[600] mt-5'>Click to upload <span className='font-[400] text-[#475367]'>or drag and drop</span> </p>
                                    <p className='text-[#98A2B3]'>PNG, JPG (max. 5mb)</p>
                                    <div className='flex items-center gap-[15px] w-full mt-5'>
                                        <div className='w-[35%] ml-auto h-[2px] bg-[#F0F2F5]'></div>
                                        <p>OR</p>
                                        <div className='w-[35%] mr-auto h-[2px] bg-[#F0F2F5]'></div>
                                    </div>
                                    <input type="file" className='cursor-pointer absolute opacity-0 h-full outline-none w-full rounded-[4px] bg-transparent text-[14px]'/>
                                    <button className='text-white bg-primary-color rounded-[4px] mt-[2.5rem] px-[28px] py-[10px] text-center mx-auto'>Browse Files</button>
                                </div>
                            </div>
                            <div className="mt-7">
                                <label className='block text-text-color text-left mb-2'>
                                    Image of relation <span className='text-red-500'>*</span>
                                </label>
                                <div className='relative flex items-center justify-center flex-col rounded-[16px] h-[300px] w-full' style={{ border:'1.5px dashed #D0D5DD' }}>
                                    <img src="./images/file-upload.svg" alt="" />
                                    <p className='text-text-color font-[600] mt-5'>Click to upload <span className='font-[400] text-[#475367]'>or drag and drop</span> </p>
                                    <p className='text-[#98A2B3]'>PNG, JPG (max. 5mb)</p>
                                    <div className='flex items-center gap-[15px] w-full mt-5'>
                                        <div className='w-[35%] ml-auto h-[2px] bg-[#F0F2F5]'></div>
                                        <p>OR</p>
                                        <div className='w-[35%] mr-auto h-[2px] bg-[#F0F2F5]'></div>
                                    </div>
                                    <input type="file" className='cursor-pointer absolute opacity-0 h-full outline-none w-full rounded-[4px] bg-transparent text-[14px]'/>
                                    <button className='text-white bg-primary-color rounded-[4px] mt-[2.5rem] px-[28px] py-[10px] text-center mx-auto'>Browse Files</button>
                                </div>
                            </div>
                        </>
                    }
                    <div className="flex items-center justify-end mt-10 gap-3">
                        <button  className="py-3 px-4 border border-[#1D1D1D] rounded-[8px] text-[14px]">Cancel</button>
                        <button className="bg-primary-color text-white px-4 py-3 rounded-[8px] text-[14px]" onClick={() => navigate('/create-user')} >Create account</button>
                    </div>
                </div>
            </div>
        </div>
        {msg &&
            <AlertModal msg={msg} alertType={alertType} setMsg={setMsg} alertTitle={alertTitle}/>
        }
    </div>
  )
}

export default CreateUser