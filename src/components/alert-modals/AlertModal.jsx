import React from 'react'

const AlertModal = () => {
  return (
    <>
        <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => console.log("alert Modal closed")}></div>
        <div className='flex items-center justify-center gap-10 bg-white'>
            <img src="./images/success.svg" alt="" />
            <p className='text-text-color font-[500]'>Successful</p>
            <p className='text-[#6F7975] text-[14px]'>You have successfully deleted this member from your organization</p>
        </div>
    </>
  )
}

export default AlertModal