import React, { useEffect, useState } from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import { IoChevronDownOutline } from 'react-icons/io5'
import Alert from '../../components/alert/Alert'

const Subscribe = ({baseUrl}) => {

    const [featuresDropDown, setFeaturesDropDown] = useState(false)
    const [subscriptionType, setSubscriptionType] = useState('')
    const [quantity, setQuantity] = useState('')
    const durationArray = ['Yearly','Monthly','Weeekly','Daily']
    const [arrayOfFeatures, setArrayOfFeatures] = useState([])
    const [selectedFeature, setSelectedFeature] = useState('')
    const [selectedFeatureDuration, setSelectedFeatureDuration] = useState('')
    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState()
    // const arrayOfFeatures = [
    //     {
    //         title:'Basic',
    //         desc:'This plan gives members access to one Gotruhub feature subscribed.',
    //         benefit: [
    //         {
    //             id:1,
    //             name:'GotruPass'
    //         }, 
    //         {
    //             id:2,
    //             name:'GotruMonitor'
    //         },
    //         {
    //             id:3,
    //             name:'GotruTrade'
    //         }
    //     ]
    //     },
    //     {
    //         title:'Combo',
    //         desc:'This plan gives members access to two features subscribed.',
    //         benefit: [
    //             {
    //                 id:11,
    //                 name:'GotruPass + GotruMonitor'
    //             }, 
    //             {
    //                 id:22,
    //                 name:'GotruPass + GotruTrade'
    //             },
    //             {
    //                 id:33,
    //                 name:'GotruMonitor + GotruTrade'
    //             }
    //         ]
    //     },
    //     {
    //         title:'Basic',
    //         desc:'This plan gives members access to all Gotruhub feature',
    //         benefit: [
    //             {
    //                 id:111,
    //                 name:'All features'
    //             }
    //         ]
    //     },
    //     {
    //         title:'Result',
    //         desc:'This plan gives members access to check their results on gotruhub',
    //         benefit: [
    //             {
    //                 id:1111,
    //                 name:'Result'
    //             }
    //         ]
    //     }
    // ]
    const user = JSON.parse(localStorage.getItem('user'))

    const [checkedIds, setCheckedIds] = useState([]);

    const handleGoClick = () => {
        const checkedIds = [];
        arrayOfFeatures.forEach(feature => {
            feature.benefit.forEach(ben => {
                const checkbox = document.getElementById(`checkbox-${ben.id}`);
                if (checkbox.checked) {
                    checkedIds.push(ben.id);
                }
            });
        });
        console.log("Checked IDs:", checkedIds);
        setCheckedIds(checkedIds);
    };

    async function getSubs(){
        const res = await fetch(`${baseUrl}/subscriptions`,{
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${user.data.access_token}`
            }
        })
        const data = await res.json()
        setArrayOfFeatures(data.data)
        console.log(data);
    }

    useEffect(() => {
        getSubs()
    },[])

    console.log(arrayOfFeatures);

    async function handleSubscription(){
        const res = await fetch(`${baseUrl}/plan/add-to-cart`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${user.data.access_token}`
            },
            body: JSON.stringify({ subscriptionType, quantity })
        })
        const data = await res.json()
        if(res.ok){
            setMsg("Subscription Added Successfully");
            setAlertType('success')
            setQuantity('')
            setSelectedFeature('')
            setSelectedFeatureDuration('')
        }
        if(!res.ok){
            setMsg("Subscription Was Not Successfully Added");
            setAlertType('error')
        }
        console.log(res, data);
        console.log(quantity, subscriptionType);
    }

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
                            <input type="text" value={selectedFeature} placeholder='Gotrupass, Gotrumonitor' className='outline-none w-full rounded-[4px] bg-transparent text-[14px]'/>
                            <IoChevronDownOutline color="d7d7d7" cursor='pointer' onClick={() => setFeaturesDropDown(!featuresDropDown)}/>
                        </div>
                        {featuresDropDown &&
                            <div className='py-5 bg-white absolute  border overflow-y-scroll h-[320px] px-3 rounded-[12px] mt-2 z-[10] w-full'>
                                {
                                    arrayOfFeatures && arrayOfFeatures.map(ftr => (
                                        <div className='px-3 border-b pb-3 cursor-pointer mb-3'>
                                            <p className='text-[#1D1D1D] capitalize text-[12px]'>{ftr.name} <span className='text-[10px]'>({ftr.duration})</span></p>
                                            {/* <p className='text-[#828282] mt-2 mb-3 text-[12px]'>{feature.desc}</p> */}
                                            {
                                                ftr.feature.map(benefit => (
                                                    <div className='flex items-center gap-1 mt-1'>
                                                        <input className='cursor-pointer' type="radio" onChange={e => {
                                                            setSelectedFeature(benefit.name)
                                                            setSelectedFeatureDuration(ftr.duration)
                                                            setSubscriptionType(ftr._id)
                                                            }} name="benefit" />
                                                        <p className='text-[#6F7975] text-[12px]'>{benefit.name}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                                {/* <div className='flex items-center gap-5 text-[13px] justify-end py-3'>
                                    <button className='text-[#4F4F4F] border px-3 py-1 rounded-[4px]' onClick={() => setFeaturesDropDown(false)}>Cancel</button>
                                    <button className='text-white bg-primary-color border px-3 py-1 rounded-[4px]'>Apply</button>
                                </div> */}
                            </div>
                        }
                    </div>

                    <div className='w-full relative'>
                        <label className='block text-text-color text-left mb-2'>Select the duration you are subscribing for</label>
                        <div className='flex items-center justify-between px-4 py-3 border w-full rounded-[4px]'>
                            <input type="text" value={selectedFeatureDuration} placeholder='Monthly' className='outline-none w-full rounded-[4px] bg-transparent text-[14px] capitalize'/>
                            {/* <IoChevronDownOutline color="d7d7d7" cursor='pointer' onClick={() => setDuratioDropDown(!durationDropDown)}/> */}
                        </div>
                        {/* {durationDropDown &&
                            <div className='py-5 bg-white absolute  border overflow-y-scroll h-[220px] px-3 rounded-[12px] mt-2 z-[10] w-full'>
                                {
                                    durationArray.map(duration => (
                                        <div className='px-3 border-b pb-3 cursor-pointer mb-3'>
                                            <p className='text-[#1D1D1D] capitalize text-[12px]'>{duration}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        } */}
                    </div>
                </div>
                <div className='w-full mt-7 flex flex-col px-[30px]'>
                    <label className='block text-text-color text-left mb-2'>How many members will be using this feature?</label>
                    <div className='flex items-center justify-between px-4 py-3 border w-full rounded-[4px]'>
                        <input onChange={e => setQuantity(e.target.value)} type="text" placeholder='250' className='outline-none w-full rounded-[4px] bg-transparent text-[14px]'/>
                        {/* <IoChevronDownOutline color="d7d7d7" cursor='pointer' onClick={() => setFeaturesDropDown(!featuresDropDown)}/> */}
                    </div>
                </div>
                <div className='w-full mt-7 px-[30px] flex items-center gap-5 '>
                    <button className='bg-[#2D3934] rounded-[4px] px-5 py-3 text-[#FAFAFA] font-[600]'>View Summary</button>
                    <button className='border border-[#2D3934] rounded-[4px] py-3 px-6 text-[#2D3934] font-[600]' onClick={handleSubscription}>Subscribe</button>
                </div>
            </div>
            {/* <div>
                {
                    arrayOfFeatures.map(feature => (
                        <div>
                            {feature.benefit.map(ben => (
                                <div className='flex items-center gap-2'>
                                    <input id={`checkbox-${ben.id}`} type="checkbox" />
                                    <p>{ben.name}</p>
                                </div>
                            ))}
                        </div>
                    ))
                }
                <button onClick={handleGoClick} className='bg-primary-color text-white px-3 ml-4 mt-4'>Go</button>
            </div> */}
        </div>
        {
            msg && <Alert msg={msg} setMsg={setMsg} alertType={alertType}/>
        }
    </div>
  )
}

export default Subscribe