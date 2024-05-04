import React, { useState } from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import { IoChevronDownOutline } from 'react-icons/io5'

const Subscribe = () => {

    const [featuresDropDown, setFeaturesDropDown] = useState(false)
    const arrayOfFeatures = [
        {
            title:'Basic',
            desc:'This plan gives members access to one Gotruhub feature subscribed.',
            benefit: ['GotruPass', 'GotruMonitor','GotruTrade']
        },
        {
            title:'Combo',
            desc:'This plan gives members access to two features subscribed.',
            benefit: ['GotruPass + GotruMonitor', 'GotruPass + GotruTrade', 'GotruMonitor + GotruTrade']
        },
        {
            title:'Basic',
            desc:'This plan gives members access to all Gotruhub feature',
            benefit: ['All features']
        },
        {
            title:'Result',
            desc:'This plan gives members access to check their results on gotruhub',
            benefit: ['Result']
        }
    ]

  return (
    <div>
        <SideNav />
        <div className="w-[78%] ml-auto pb-5">
        <TopNav />
            <div className="h-[100vh]">
                <div className="flex justify-between items-start mb-[3rem] bg-[#F2FCF7] px-[30px] py-[1rem]">
                    <div className="">
                        <p className="text-[28px] text-primary-color font-[600]">Subscription</p>
                        <p className='text-[#4F4F4F]'>Select the subscription plan that is perfect for your organization to get the best of Gotruhub.</p>
                        <p className='text-[#25751E] underline font-[500]'>Learn more about our features</p>
                    </div>
                    <button className="bg-[#646464] text-white px-5 py-3 rounded-[8px] text-[14px]" >Send Token</button>
                </div>
                <div className='mt-7 flex items-center gap-5 w-full px-[30px]'>
                    <div className='w-full relative'>
                        <label className='block text-left mb-2 text-text-color'>What features would you like to subscribe for?</label>
                        <div className='flex items-center justify-between px-4 py-3 border w-full rounded-[4px]'>
                            <input type="text" placeholder='Gotrupass, Gotrumonitor' className='outline-none w-full rounded-[4px] bg-transparent text-[14px]'/>
                            <IoChevronDownOutline color="d7d7d7" cursor='pointer' onClick={() => setFeaturesDropDown(!featuresDropDown)}/>
                        </div>
                        {featuresDropDown &&
                            <div className='py-5 bg-white absolute  border overflow-y-scroll h-[320px] px-3 rounded-[12px] mt-2 z-[10] w-full'>
                                {
                                    arrayOfFeatures.map(feature => (
                                        <div className='px-3 border-b pb-3 cursor-pointer mb-3'>
                                            <p className='text-[#1D1D1D] capitalize text-[12px]'>{feature.title}</p>
                                            <p className='text-[#828282] mt-2 mb-3 text-[12px]'>{feature.desc}</p>
                                            {
                                                feature.benefit.map(benefit => (
                                                    <div className='flex items-center gap-1 mt-1'>
                                                        <input type="checkbox" />
                                                        <p className='text-[#6F7975] text-[12px]'>{benefit}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                                <div className='flex items-center gap-5 text-[13px] justify-end py-3'>
                                    <button className='text-[#4F4F4F] border px-3 py-1 rounded-[4px]' onClick={() => setFeaturesDropDown(false)}>Cancel</button>
                                    <button className='text-white bg-primary-color border px-3 py-1 rounded-[4px]'>Apply</button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='w-full'>
                        <label className='block text-text-color text-left mb-2'>Select the duration you are subscribing for</label>
                        <div className='flex items-center justify-between px-4 py-3 border w-full rounded-[4px]'>
                            <input type="text" placeholder='Monthly' className='outline-none w-full rounded-[4px] bg-transparent text-[14px]'/>
                            <IoChevronDownOutline color="d7d7d7" cursor='pointer' onClick={() => setFeaturesDropDown(!featuresDropDown)}/>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-7 flex flex-col px-[30px]'>
                    <label className='block text-text-color text-left mb-2'>Select the duration you are subscribing for</label>
                    <div className='flex items-center justify-between px-4 py-3 border w-full rounded-[4px]'>
                        <input type="text" placeholder='Monthly' className='outline-none w-full rounded-[4px] bg-transparent text-[14px]'/>
                        <IoChevronDownOutline color="d7d7d7" cursor='pointer' onClick={() => setFeaturesDropDown(!featuresDropDown)}/>
                    </div>
                </div>
                <div className='w-full mt-7 flex flex-col px-[30px]'>
                    <button className='bg-[#2D3934] rounded-[4px] p-3 text-[#FAFAFA] font-[600]'>View Summary</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe