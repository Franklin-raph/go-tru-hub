import React, { useEffect, useState } from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import { useNavigate, useParams } from 'react-router-dom'
import { IoCloseOutline } from 'react-icons/io5'
import BtnLoader from '../../components/btn-loader/BtnLoader'
import Alert from '../../components/alert/Alert'
import { GoTrash } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";


const SingleUnit = ({baseUrl}) => {

    const navigate = useNavigate()
    const { id } = useParams()
    const user = JSON.parse(localStorage.getItem('user'))
    const [allSubUnits, setAllSubUnits] = useState([])
    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState()
    const [unitName, setUnitName] = useState('')
    const [loading, setLoading] = useState(false)

    const [subUnitName, setSubUnitName] = useState()

    const [editUnit, setEditUnit] = useState(false)
    const [deleteUnit, setDeleteUnit] = useState(false)

    const [editSubUnit, setEditSubUnit] = useState(false)
    const [deleteSubUnit, setDeleteSubUnit] = useState(false)
    

    async function getUnitInfo(){
        const res = await fetch(`${baseUrl}/unit/${id}/subunits`,{
            method:"GET",
            headers:{
                'Authorization':`Bearer ${user.data.access_token}`
            }
        })
        const data = await res.json()
        console.log(data.data.units[0].unit.name);
        if(!res.ok){
            setMsg(data.message);
            setAlertType('error');
            return;
        }
        if(res.ok){
            setUnitName(data.data.units[0].unit.name)
            setAllSubUnits(data.data.units);
            setAlertType('success');
            return;
        }
    }

    async function deleteUnitFn(){
        setLoading(true)
        const res = await fetch(`${baseUrl}/units/${id}`,{
            method:"DELETE",
            headers:{
                'Authorization':`Bearer ${user.data.access_token}`
            }
        })
        if(res) setLoading(false)
        if(res.ok){
            navigate('/units')
        }
        if(!res.ok){
            setMsg(data.message);
            setAlertType('error');
            return;
        }
    }

    async function updateUnitFn(){
        setLoading(true)
        const res = await fetch(`${baseUrl}/units/${id}`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user.data.access_token}`
            },
            body: JSON.stringify({name: unitName})
        })
        const data = await res.json()
        if(res) {
            setLoading(false)
            setEditUnit(false)
        }
        if(res.ok){
            setMsg(data.message);
            setAlertType('success');
            return;
        }
        if(!res.ok){
            setMsg(data.message);
            setAlertType('error');
            return;
        }
    }

    async function deleteSubUnitFn(subUnitId){
        setLoading(true)
        const res = await fetch(`${baseUrl}/subunits/${subUnitId}`,{
            method:"DELETE",
            headers:{
                'Authorization':`Bearer ${user.data.access_token}`
            }
        })
        if(res) setLoading(false)
        if(res.ok){
            getUnitInfo()
            setDeleteSubUnit(false)
            setMsg("Sub unit deleted successfully");
            setAlertType('success');
            return;
        }
        if(!res.ok){
            setMsg(data.message);
            setAlertType('error');
            return;
        }
    }

    async function updateSubUnitFn(subUnitId){
        console.log(subUnitId);
        setLoading(true)
        const res = await fetch(`${baseUrl}/units/${subUnitId}`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user.data.access_token}`
            },
            body: JSON.stringify({name: subUnitName})
        })
        const data = await res.json()
        if(res) {
            setLoading(false)
            setEditSubUnit(false)
        }
        if(!res.ok){
            setMsg(data.message);
            setAlertType('error');
            return;
        }
        if(res.ok){
            getUnitInfo()
            setMsg(data.message);
            setAlertType('success');
            return;
        }
    }

    useEffect(() => {
        getUnitInfo()
    },[])

  return (
    <div>
        <SideNav />
        <div className="w-[78%] ml-auto pb-5">
            <TopNav />
            <div className="">
                <div className="flex justify-between items-start mb-[3rem] bg-[#F2FCF7] px-[30px] py-[1rem]">
                    <div className="flex items-center gap-2">
                        <img src="./images/arrow-left.svg" alt="" onClick={() => navigate('/units')} className='cursor-pointer' />
                        <p className="text-[28px] text-primary-color font-[600]">About {unitName}</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <FaRegEdit className="text-gray-500 font-[600] text-[20px] cursor-pointer" onClick={() => setEditUnit(true)}/>
                        <GoTrash className="text-red-500 font-[600] text-[20px] cursor-pointer" onClick={() => setDeleteUnit(true)}/>
                    </div>
                </div>
                <div className='px-[30px]'>
                    <p className='text-[#19201D] text-[18px] font-[600] mb-3'>All Sub-units</p>
                    {
                        allSubUnits.length < 1 &&
                        <div className="flex items-center gap-5 justify-center text-center px-[3rem]">
                            <p>Create new sessions before updating members' units to ensure session data is accurately collated using units and their members.</p>
                        </div>
                    }
                    {
                        allSubUnits && allSubUnits.map((subUnit) => (
                            <div className='flex items-center justify-between p-3 shadow rounded-[8px] my-4 bg-white'>
                                <p>{subUnit.name}</p>
                                <div className='flex items-center gap-2'>
                                    <FaRegEdit className="text-gray-500 font-[600] text-[20px] cursor-pointer" onClick={() => {
                                        setEditSubUnit(subUnit._id)
                                        setSubUnitName(subUnit.name)
                                    }} />
                                    <GoTrash className="text-red-500 font-[600] text-[20px] cursor-pointer" onClick={() => setDeleteSubUnit(subUnit._id)} />
                                </div>
                                {/* <button onClick={() => navigate(`/unit/${subUnit._id}`)} className='bg-[#19201D] py-2 px-4 rounded-[4px] text-white text-[14px]'>View</button> */}
                            </div>
                        )).reverse()
                    }
                </div>
            </div>
        </div>

        {
            editUnit &&
            <div>
                <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setEditUnit(false)}></div>
                <div className="bg-white w-[450px] fixed top-[50%] left-[50%] pt-[20px] px-[2rem] z-[100] pb-[20px]" style={{ transform: "translate(-50%, -50%)" }}>
                    <div className="flex items-center justify-between border-b pb-[5px]">
                        <p className="text-[px]">Edit Unit</p>
                        <IoCloseOutline fontSize={"20px"} cursor={"pointer"} onClick={() => setEditUnit(false)}/>
                    </div>
                    <div className='mt-5'>
                        <p>Unit Name</p>
                        <div className='px-4 py-3 outline-none border w-full rounded-[4px]'>
                            <input type="text" value={unitName} onChange={e => setUnitName(e.target.value)} className='outline-none w-full rounded-[4px]'/>
                        </div>
                    </div>
                    {
                        loading ? 
                        <BtnLoader bgColor="#191f1c"/>
                        :
                        <button onClick={updateUnitFn} className='text-white bg-primary-color w-full rounded-[4px] mt-[2.5rem] px-[35px] py-[16px] text-center mx-auto'>Update Unit Name</button>
                    }
                </div>
            </div>
        }

        {
            deleteUnit &&
            <div>
                <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setDeleteUnit(false)}></div>
                <div className="bg-white w-[450px] fixed top-[50%] left-[50%] pt-[20px] px-[2rem] z-[100] pb-[20px]" style={{ transform: "translate(-50%, -50%)" }}>
                    <div className="flex items-center justify-between border-b pb-[5px]">
                        <p className="text-[px]">Delete Unit</p>
                        <IoCloseOutline fontSize={"20px"} cursor={"pointer"} onClick={() => setDeleteUnit(false)}/>
                    </div>
                    <div className='mt-5'>
                        Are you sure, you want to delete this unit?
                    </div>
                    {
                        loading ? 
                        <BtnLoader bgColor="#191f1c"/>
                        :
                        <button onClick={deleteUnitFn} className='text-white bg-primary-color w-full rounded-[4px] mt-[2.5rem] px-[35px] py-[16px] text-center mx-auto'>Yes, Delete</button>
                    }
                </div>
            </div>
        }

        {
            editSubUnit &&
            <div>
                <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setEditSubUnit(false)}></div>
                <div className="bg-white w-[450px] fixed top-[50%] left-[50%] pt-[20px] px-[2rem] z-[100] pb-[20px]" style={{ transform: "translate(-50%, -50%)" }}>
                    <div className="flex items-center justify-between border-b pb-[5px]">
                        <p className="text-[px]">Edit Unit</p>
                        <IoCloseOutline fontSize={"20px"} cursor={"pointer"} onClick={() => setEditSubUnit(false)}/>
                    </div>
                    <div className='mt-5'>
                        <p>Sub Unit Name</p>
                        <div className='px-4 py-3 outline-none border w-full rounded-[4px]'>
                            <input type="text" value={subUnitName} onChange={e => setSubUnitName(e.target.value)} className='outline-none w-full rounded-[4px]'/>
                        </div>
                    </div>
                    {
                        loading ? 
                        <BtnLoader bgColor="#191f1c"/>
                        :
                        <button onClick={() => updateSubUnitFn(editSubUnit)} className='text-white bg-primary-color w-full rounded-[4px] mt-[2.5rem] px-[35px] py-[16px] text-center mx-auto'>Update Sub Unit Name</button>
                    }
                </div>
            </div>
        }

        {
            deleteSubUnit &&
            <div>
                <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setDeleteSubUnit(false)}></div>
                <div className="bg-white w-[450px] fixed top-[50%] left-[50%] pt-[20px] px-[2rem] z-[100] pb-[20px]" style={{ transform: "translate(-50%, -50%)" }}>
                    <div className="flex items-center justify-between border-b pb-[5px]">
                        <p className="text-[px]">Delete Unit</p>
                        <IoCloseOutline fontSize={"20px"} cursor={"pointer"} onClick={() => setDeleteSubUnit(false)}/>
                    </div>
                    <div className='mt-5'>
                        Are you sure, you want to delete this sub unit?
                    </div>
                    {
                        loading ? 
                        <BtnLoader bgColor="#191f1c"/>
                        :
                        <button onClick={() => deleteSubUnitFn(deleteSubUnit)} className='text-white bg-primary-color w-full rounded-[4px] mt-[2.5rem] px-[35px] py-[16px] text-center mx-auto'>Yes, Delete</button>
                    }
                </div>
            </div>
        }

        {
            msg && <Alert msg={msg} setMsg={setMsg} alertType={alertType}/>
        }
    </div>
  )
}

export default SingleUnit