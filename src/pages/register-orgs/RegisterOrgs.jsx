import React from 'react'

const RegisterOrgs = () => {
  return (
    <div>
        <div className='w-[100%] mx-auto my-[4rem]'>
            <div className='w-[50%] mx-auto'>
                <div className='flex items-center justify-between'>
                    <i>icon</i>
                    <p>Register Organization</p>
                    <p></p>
                </div>
                <p className='text-[#828282] mt-8'>By proceeding, you are registering your organization as a registered business. Not registered? Return to previous screen and select your organization type.</p>
                <div className='flex items-center gap-5 w-full'>
                    <div>
                        <label className='block text-left mb-2'>Email Address</label>
                        <input placeholder='hello@company.com' type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                    <div>
                        <label className='block text-left mb-2'>Email Address</label>
                        <input placeholder='hello@company.com' type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterOrgs