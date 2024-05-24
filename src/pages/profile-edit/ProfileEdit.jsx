import React, { useState } from 'react';
import SideNav from '../../components/side-nav/SideNav';
import TopNav from '../../components/top-nav/TopNav';
import { useNavigate, useParams } from 'react-router-dom';

const ProfileEdit = ({baseUrl}) => {
    const navigate = useNavigate()
    const { id } = useParams()
  const [formData, setFormData] = useState({
    fullName: 'Bridget Okoronto Yakubu',
    unit: 'JSS 1',
    subUnit: 'A',
    assignments: ['PHY 101', 'THE 191', 'BIO 171', 'PHE 123', 'MTH 345', 'GEO 121'],
    dateOfBirth: '2020-03-24',
    gender: 'Male',
    userImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, userImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div>
        <SideNav />
        <div className="w-[78%] bg-[#F2FCF7] ml-auto">
        <TopNav />
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-[30px] py-[1rem]">
            {/* <div className="flex justify-between items-start mb-[3rem] bg-[#F2FCF7] py-[1rem]">
                <div className="flex items-center gap-2">
                    <img src="./images/arrow-left.svg" alt="" onClick={() => navigate('/manage-users')} className='cursor-pointer' />
                    <p className="text-[28px] text-primary-color font-[600]">{currentUser && currentUser.user.fullName}</p>
                </div>
                <button className="bg-[#646464] text-white px-5 py-3 rounded-[8px] text-[14px]" >Send Token</button>
            </div> */}
            <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl" onSubmit={handleSubmit}>
                <div className="mb-4">
                <label className="block text-gray-700">Member full name</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border rounded w-full"
                />
                </div>

                <div className="mb-4">
                <label className="block text-gray-700">Unit</label>
                <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border rounded w-full"
                >
                    <option>JSS 1</option>
                    <option>JSS 2</option>
                    <option>JSS 3</option>
                    <option>SSS 1</option>
                    <option>SSS 2</option>
                    <option>SSS 3</option>
                </select>
                </div>

                <div className="mb-4">
                <label className="block text-gray-700">Sub-unit</label>
                <select
                    name="subUnit"
                    value={formData.subUnit}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border rounded w-full"
                >
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                </div>

                <div className="mb-4">
                <label className="block text-gray-700">Assignments</label>
                <select
                    name="assignments"
                    value={formData.assignments}
                    onChange={handleInputChange}
                    multiple
                    className="mt-1 p-2 border rounded w-full"
                >
                    <option>PHY 101</option>
                    <option>THE 191</option>
                    <option>BIO 171</option>
                    <option>PHE 123</option>
                    <option>MTH 345</option>
                    <option>GEO 121</option>
                </select>
                </div>

                <div className="mb-4">
                <label className="block text-gray-700">Date of birth</label>
                <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border rounded w-full"
                />
                </div>

                <div className="mb-4">
                <label className="block text-gray-700">Gender</label>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border rounded w-full"
                >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
                </div>

                <div className="mt-7">
                    <label className='block text-text-color text-left mb-2'>User's image</label>
                    <div className='relative flex items-center justify-center flex-col rounded-[16px] h-[300px] w-full' style={{ border:'1.5px dashed #D0D5DD' }}>
                        <img src="./images/file-upload.svg" alt="" />
                        <p className='text-text-color font-[600] mt-5'>Click to upload <span className='font-[400] text-[#475367]'>or drag and drop</span> </p>
                        <p className='text-[#98A2B3]'>PNG, JPG (max. 5mb)</p>
                        <div className='flex items-center gap-[15px] w-full mt-5'>
                            <div className='w-[35%] ml-auto h-[2px] bg-[#F0F2F5]'></div>
                            <p>OR</p>
                            <div className='w-[35%] mr-auto h-[2px] bg-[#F0F2F5]'></div>
                        </div>
                        <input type="file" className='cursor-pointer absolute opacity-0 h-full outline-none w-full rounded-[4px] bg-transparent text-[14px]'/>
                        <button className='text-white bg-primary-color rounded-[4px] mt-[2.5rem] px-[28px] py-[10px] text-center mx-auto'>Browse Files</button>
                    </div>
                </div>

                <div className="flex justify-between mt-6">
                <button onClick={() => navigate(`/user/${id}`)} type="button" className="bg-white text-black border border-black py-2 px-4 rounded">
                    Back
                </button>
                <button type="submit" className="bg-primary-color text-white py-2 px-4 rounded">
                    Save changes
                </button>
                </div>
            </form>
            </div>
        </div>
    </div>
  );
};

export default ProfileEdit;
