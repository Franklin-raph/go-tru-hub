import React, { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

const RegisterGovernmentBiz = () => {

  const navigate = useNavigate()
  const [govtlevelDropDown, setGovtLevelDropDown] = useState(false)
  const [stateDropDown, setStateDropDown] = useState(false)
  const [lgaDropDown, setLgaDropDown] = useState(false)
  const govtlevelArray = ['Federal', 'State', 'Local']
  const [govtLevel, setGovtLevel] = useState('')


  return (
    <div>
        <div className='w-[100%] mx-auto my-[4rem]'>
            <div className='w-[55%] mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1 cursor-pointer' onClick={() => navigate('/register')}>
                        <GoChevronLeft />
                        <p>Back</p>
                    </div>
                    <p className='text-[#19201D] text-[24px] font-[500]'>Government Institutions</p>
                    <p></p>
                </div>
                <p className='text-[#828282] mt-8 mb-10'>By proceeding, you are registering your organization as a government/licensed institution. Not a government/licensed institution? Return to previous screen and select your organization type.</p>
                <div className='flex items-center gap-5 w-full'>
                  <div className='w-full relative'>
                      <label className='block text-left mb-2'>Government level</label>
                      <div className='px-4 py-3 outline-none border w-full rounded-[4px] flex items-center justify-between'>
                        <input value={govtLevel} placeholder='Select level' type="text" className='outline-none w-full rounded-[4px]'/>
                        <GoChevronDown cursor={'pointer'} onClick={() => setGovtLevelDropDown(!govtlevelDropDown)}/>
                      </div>
                      {
                        govtlevelDropDown && 
                          <div className='absolute w-full bg-white border rounded-[4px] mt-3 px-2 z-[99]'>
                            {
                              govtlevelArray.map((item, index) => {
                                return (
                                    <p onClick={() => {
                                      setGovtLevelDropDown(false)
                                      setGovtLevel(item)
                                    }} className='cursor-pointer py-1 hover:text-[#cecece]'>{item}</p>
                                )
                              })
                            }
                          </div>
                      }
                    </div>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Ministry/Agency</label>
                        <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                </div>

                {govtLevel === 'State' &&
                  <div className='w-full relative mt-8'>
                    <label className='block text-left mb-2'>State</label>
                    <div className='px-4 py-3 outline-none border w-full rounded-[4px] flex items-center justify-between'>
                      <input placeholder='Select level' type="text" className='outline-none w-full rounded-[4px]'/>
                      <GoChevronDown cursor={'pointer'} onClick={() => setStateDropDown(!stateDropDown)}/>
                    </div>
                    {
                      stateDropDown && 
                        <div className='absolute w-full bg-white border rounded-[4px] mt-3 px-2'>
                          {
                            govtlevelArray.map((item, index) => {
                              return (
                                  <p onClick={() => setStateDropDown(false)} className='cursor-pointer py-1 hover:text-[#cecece]'>{item}</p>
                              )
                            })
                          }
                        </div>
                    }
                  </div>
                  }

                  {govtLevel === 'Local' &&
                    <div className='flex items-center gap-5 w-full'>
                      <div className='w-full relative mt-8'>
                        <label className='block text-left mb-2'>State</label>
                        <div className='px-4 py-3 outline-none border w-full rounded-[4px] flex items-center justify-between'>
                          <input placeholder='Select State' type="text" className='outline-none w-full rounded-[4px]'/>
                          <GoChevronDown cursor={'pointer'} onClick={() => setStateDropDown(!stateDropDown)}/>
                        </div>
                        {
                          stateDropDown && 
                            <div className='absolute w-full bg-white border rounded-[4px] mt-3 px-2'>
                              {
                                govtlevelArray.map((item, index) => {
                                  return (
                                      <p onClick={() => setStateDropDown(false)} className='cursor-pointer py-1 hover:text-[#cecece]'>{item}</p>
                                  )
                                })
                              }
                            </div>
                        }
                      </div>
                      <div className='w-full relative mt-8'>
                        <label className='block text-left mb-2'>LGA</label>
                        <div className='px-4 py-3 outline-none border w-full rounded-[4px] flex items-center justify-between'>
                          <input placeholder='Select LGA' type="text" className='outline-none w-full rounded-[4px]'/>
                          <GoChevronDown cursor={'pointer'} onClick={() => setLgaDropDown(!lgaDropDown)}/>
                        </div>
                        {
                          lgaDropDown && 
                            <div className='absolute w-full bg-white border rounded-[4px] mt-3 px-2'>
                              {
                                govtlevelArray.map((item, index) => {
                                  return (
                                      <p onClick={() => setLgaDropDown(false)} className='cursor-pointer py-1 hover:text-[#cecece]'>{item}</p>
                                  )
                                })
                              }
                            </div>
                        }
                      </div>
                    </div>
                  }

                <div className='flex items-center gap-5 w-full my-[3rem]'>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Contact address</label>
                        <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Website</label>
                        <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                </div>
                <div className='flex items-center gap-5 w-full'>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Email address</label>
                        <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Phone number</label>
                        <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                </div>
                {/* <div className='flex items-center gap-5 w-full my-[3rem]'>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Year of Establishment</label>
                        <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                    <div className='w-full'>
                        <label className='block text-left mb-2'>Name of proprietor</label>
                        <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                    </div>
                </div> */}
                {/* <div className='w-full mt-[3rem]'>
                    <div className='flex item-center justify-between mb-2'>
                      <label className='block text-left'>Enter referral code</label>
                      <p className='text-[#828282]'>Optional</p>
                    </div>
                    <input type="text" className='px-4 py-3 outline-none border w-full rounded-[4px]'/>
                </div> */}
                <button className='text-white bg-primary-color w-full rounded-[4px] mt-[2.5rem] px-[35px] py-[16px] text-center mx-auto'>Proceed</button>
            </div>
        </div>
    </div>
  )
}

export default RegisterGovernmentBiz