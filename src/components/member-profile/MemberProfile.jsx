import React from 'react'
import GuardianCard from '../guardian-card/GuardianCard'
import MemberCard from '../member-card/MemberCard'
import WalletCard from '../wallet-card/WalletCard'

import Slider from "react-slick";

const MemberProfile = ({currentUser, id}) => {

    const settings = {
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
      };



    // console.log();
  return (
    <div className='flex items-start gap-10 px-[30px] py-[1rem]'>
        <div className='w-full'>
            <div className='shadow-md rounded-[6px] flex items-center gap-7 p-[20px] mb-10 w-full'>
                <img src="./images/member1.svg" className='w-[45%] rounded-[6px]' alt="" />
                <img src="./images/qr-code.svg" className='w-[45%] rounded-[6px]' alt="" />
            </div>
            <MemberCard />
            <GuardianCard currentUser={currentUser} id={id}/>
            <div className='shadow-md rounded-[6px] p-[20px] mt-10'>
                <div className='flex items-center justify-between mb-3'>
                    <p className='text-[#19201D] font-[600] txt-[18px]'>Authorized persons</p>
                    <img src="./images/edit.svg" alt="" className='cursor-pointer' />
                </div>
                <div className='flex items-center gap-7'>
                    <img src="./images/guardian.svg" className='w-[45%] rounded-[6px]' alt="" />
                    <img src="./images/signature.svg" className='w-[45%] rounded-[6px]' alt="" />
                </div>
            </div>
        </div>
        <div className='w-[50%]'>
            <div className='shadow-md rounded-[6px] p-[20px] w-full'>
                <p className='text-[#1D1D1D] text-[18px] font-[600] mb-5'>Wallet</p>
                <div className='w-full'>
                    <Slider {...settings}>
                        <WalletCard title="Wallet balalance" amount="250,000,500" />
                        <WalletCard title="Total deposit" amount="150,000,500" />
                        <WalletCard title="Total purchases" amount="200,000,500" />
                        <WalletCard title="In-app" amount="180,000,500" />
                        <WalletCard title="In-store" amount="90,000,500" />
                    </Slider>
                </div>
                {/* <div className="overflow-hidden">
                    <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory p-4">
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default MemberProfile