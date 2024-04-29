import React from 'react'

const Login = () => {
  return (
    <div className='w-[100%] mx-auto text-center my-[4rem]'>
      <div className='w-[40%] mx-auto'>
        <p className='text-[28px] mb-[40px]'>Login to manage your company</p>
        <div>
          <label className='block text-left mb-2'>Email Address</label>
          <input placeholder='hello@company.com' type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
        </div>
        <div className='mt-7'>
          <label className='block text-left mb-2'>Password</label>
          <div className='px-4 py-3 outline-none border w-full rounded-[4px]'>
            <input placeholder='Your Password' type="password" className='outline-none w-full rounded-[4px]'/>
          </div>
        </div>
        <p className='text-left mt-5'>Forgot Your Password? <span>Reet</span> </p>
        <button className='text-white bg-primary-color w-full rounded-[4px] mt-[2.5rem] px-[35px] py-[16px] text-center mx-auto'>Login</button>
        <p className='mt-10'>New to Gotru? <span className='text-secondary-color'>Sign up</span> </p>
      </div>
      <p className='mt-[10rem]'>&copy; 2022 Gotruhub and Gotruhub logo are trademarks of the company.</p>
      <p>Please visit our <span className='text-secondary-color'>Terms of service</span> for more details.</p>
    </div>
  )
}

export default Login