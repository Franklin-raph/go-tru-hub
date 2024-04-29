import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const Home = () => {

    const tabArray = ['Gotru Trade', 'Gotru Pass', 'Gotru Monitor']

  return (
    <div>
        <h1 className='mt-[7rem] text-[48px] text-primary-color leading-20 text-center font-[500] w-[80%] mx-auto'>Manage your mega stores, employees, team members and collect revenue with just one app</h1>
        <p className='mt-[5rem] w-[850px] text-justify leading-[1.6] mx-auto'>
            Gotruhub is a multi tenant digital platform built for diverse functions which include cooperative trading. It also allow you manage your mega stores, manage staff members, help schools/parents keep track of students security and school attendance record.
            <Link to='/about' className='text-secondary-color font-[500]'> Learn More</Link>
        </p>
        <div className='text-center'>
            <button className='text-white bg-primary-color rounded-[8px] mt-[4rem] px-[35px] py-[16px] text-center mx-auto'>Get Started with Gotruhub</button>
        </div>
        <img src="/land-1.svg" className='mx-auto mt-[5rem] mb-[10rem] w-[75%]' alt="" />
        <div className='text-center'>
            <h1 className='text-primary-color font-[500] text-[48px] w-[50%] mx-auto'>
                We’re all about helping you manage your organization
            </h1>
            <p className='leading-[1.6] w-[580px] mx-auto mt-8'>
                Our product is aimed at simplifying organization's management processes and helping to keep track of team activities.
            </p>
            <div className='flex items-center justify-center gap-[20px] mt-10'>
                {
                    tabArray.map((tab, index) => (
                        <div key={index} className='flex items-center justify-center gap-[100px]'>
                            <p className='text-center cursor-pointer text-[#6F7975]'>{tab}</p>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-start gap-[2rem] text-left w-[90%] mx-auto mt-[5rem]'>
                <img src="./trade_img.svg" className='w-[60%]' alt="" />
                <div className='w-[50%]'>
                    <p className='text-[32px] font-[500] mb-3'>Gotru Trade</p>
                    <p className='text-[#6F7975]'>With our ready to use inventory and ledger management systems, sales and payment management is seamless and can be done without cash. It is most suitable for cooperative trading.</p>
                </div>
            </div>
        </div>
        <div className='bg-primary-color py-[4rem] my-[10rem]'>
            <h1 className='text-white font-[400] text-[38px] w-[40%] mb-10 mx-auto text-center'>Why Corporate Organizations choose Gotruhub</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-[5rem]'>
                <div className='text-center flex flex-col items-center justify-center'>
                    <img src="./security.svg" alt="" />
                    <p className='my-5 text-[20px]'>Encrypted information</p>
                    <p className='text-[#cdcdcd]'>We provide you with a secure space to share and manage all your information.</p>
                </div>
                <div className='text-center flex flex-col items-center justify-center'>
                    <img src="./affordable.svg" alt="" />
                    <p className='my-5 text-[20px]'>Affordable offers</p>
                    <p className='text-[#cdcdcd]'>Our charges are unbeatable considering the services we provide.</p>
                </div>
                <div className='text-center flex flex-col items-center justify-center'>
                    <img src="./data.svg" alt="" />
                    <p className='my-5 text-[20px]'>Effective management of large data</p>
                    <p className='text-[#cdcdcd]'>Not minding the size of information you enter, we provide stress free handling.</p>
                </div>
                <div className='text-center flex flex-col items-center justify-center'>
                    <img src="./support-service.svg" alt="" />
                    <p className='my-5 text-[20px]'>Suport Team</p>
                    <p className='text-[#cdcdcd]'>Our support team are hands-on and we provide you with instant 24hrs support.</p>
                </div>
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

export default Home