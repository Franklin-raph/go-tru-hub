import React from 'react'
import Footer from '../../components/footer/Footer'

const Contact = () => {
  return (
    <div>
      <div className='text-center my-[10rem] w-[30%] mx-auto'>
        <h1 className='text-[25px] font-[500] mb-4'>Contact Us</h1>
        <p className='mb-5'>Have a concern, please do send us a message we are always available to help out</p>
        <div className='flex items-center gap-2 justify-center my-3'>
          <i>icon</i>
          <p>090 20060037</p>
        </div>
        <div className='flex items-center gap-2 justify-center my-3'>
          <i>icon</i>
          <p>gotruhub@gmail.com</p>
        </div>
        <div className='flex items-center gap-2 justify-center my-3'>
          <i>icon</i>
          <p>acandacresources@gmail.com</p>
        </div>
      </div>
      <div className='text-center'>
          <h1 className='text-primary-color font-[500] text-[48px] w-[50%] mx-auto'>
              Sign up with Gotruhub to start managing your team
          </h1>
          <p className='leading-[1.6] w-[580px] mx-auto mt-6'>
              Create account instantly to start managing your team and resources.
          </p>
          <div className='text-center'>
              <button className='text-white bg-primary-color rounded-[8px] mt-[2.5rem] px-[35px] py-[16px] text-center mx-auto'>Get Started with Gotruhub</button>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact