import React, { useState } from 'react'
import AlertModal from '../../components/alert-modals/AlertModal'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import { useNavigate } from 'react-router-dom'
import SendTokenModal from '../../components/send-token-modal/SendTokenModal'

const ActiveSubs = () => {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const [isLoading, setIsLoading] = useState(false)
    const [msg, setMsg] = useState('')
    const [alertTitle, setAlertTitle] = useState('Confirm')
    const [alertType, setAlertType] = useState('success')
    const [sendTokenModal, setSendTokenModal] = useState(false)


  return (
    <div>
        <SideNav />
        <div className="w-[78%] ml-auto pb-5">
        <TopNav />
            <div className="">
                <div className="flex justify-between items-start mb-[3rem] bg-[#F2FCF7] px-[30px] py-[1rem]">
                    <div className="flex items-center gap-2">
                        <img src="./images/arrow-left.svg" alt="" onClick={() => navigate('/subscribe')} className='cursor-pointer' />
                        <p className="text-[28px] text-primary-color font-[600]">GotruTrade + GotruMonitor (Weekly)</p>
                    </div>
                    <button className="bg-[#2D3934] text-white px-5 py-3 rounded-[8px] text-[14px]" onClick={() => setSendTokenModal('By clicking the confirm button, 10 tokens will be sent to the selected members email.')} >Send Token</button>
                </div>
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-left">
                        <thead class="text-[14px] border-b">
                            <tr>
                                <th scope="col" class="px-6 py-3 th1 font-[700]">S/N</th>
                                <th scope="col" class="px-6 py-3 font-[700]">Name</th>
                                <th scope="col" class="px-6 py-3 font-[700]">Email</th>
                                <th scope="col" class="px-6 py-3 font-[700]">Unit</th>
                                <th scope="col" class="px-6 py-3 font-[700]">Sub-unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                                <td class="px-6 py-4">1</td>
                                <td class="px-6 py-4">Bridget Okoronta Yakubu</td>
                                <td class="px-6 py-4">boy@gmail.com</td>
                                <td class="px-6 py-4">Unit</td>
                                <td class="px-6 py-4">Sub-unit</td>
                            </tr>
                            <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                                <td class="px-6 py-4">2</td>
                                <td class="px-6 py-4">Omawumi Obi Lawal</td>
                                <td class="px-6 py-4">omawumiobilawal@g...</td>
                                <td class="px-6 py-4">Unit</td>
                                <td class="px-6 py-4">Sub-unit</td>
                            </tr>
                            <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                                <td class="px-6 py-4">3</td>
                                <td class="px-6 py-4">Benitta Olusegun</td>
                                <td class="px-6 py-4">omawumiobilawal@g...</td>
                                <td class="px-6 py-4">Unit</td>
                                <td class="px-6 py-4">Sub-unit</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {
            sendTokenModal &&
            <SendTokenModal setAlertType={setAlertType} setAlertTitle={setAlertTitle} sendTokenModal={sendTokenModal} alertType={alertType} setMsg={setMsg} alertTitle={alertTitle} setSendTokenModal={setSendTokenModal}/>
        }

        {
            msg &&
            <AlertModal msg={msg} setAlertType={setAlertType} setAlertTitle={setAlertTitle} alertType={alertType} setMsg={setMsg} alertTitle={alertTitle}/>
        }
        
    </div>
  )
}

export default ActiveSubs