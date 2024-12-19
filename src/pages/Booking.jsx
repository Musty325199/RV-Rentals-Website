import React, { useState } from 'react'
import CustomSelect from '../components/CustomSelect';
const Booking = ({ isOpen, onClose }) => {
  const options = ["San Diego", "Maligu Beach", "Mission Bay", "Napa Valley"];
  const RVoptions = ["EuroCamper", "Vanagon", "MotorHome", "Flying Cloud", "Ranger Van", "Travel Trailer"];

  if (!isOpen) return null;
  const [issOpen, setIssOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIssOpen(!issOpen);

  const selectOption = (RVoption) => {
    setSelectedOption(RVoption);
    setIssOpen(false);
  };

  return (
    <div
    className="fixed inset-0 bg-gray-600 bg-opacity-50"
    onClick={onClose}
  >
    <div
      className="w-[100%] flex items-center justify-center bg-[#4da674] p-3 py-5  md:p-8"
      onClick={(e) => e.stopPropagation()}
    >
     <div className='w-full md:w-[80%]'>
     <div className='flex justify-between items-center'>
      <h1 className="text-3xl text-white font-semibold mb-4">Check Availability</h1>
      <button onClick={onClose} className='h-[30px] font-semibold w-[30px] text-[#4da674] text-md bg-white rounded-full'>X</button>
      </div>
      <div className='flex justify-between md:mt-5'>
        <div className='hidden md:flex flex-col items-center justify-around'>
        <h1 className='text-lg text-white font-medium'>Travel Details</h1>
        <h1 className='text-lg text-white font-medium'>Personal Details</h1>
        </div>
        <form className='flex flex-col md:gap-5'>
        <h1 className='md:hidden text-lg text-white font-medium mb-3 md:mb-0'>Travel Details</h1>
         <div className='flex gap-3 mb-5 md:mb-0 md:gap-5'>
         <CustomSelect options={options} label="Pick up*"/>
         <CustomSelect options={options} label="Drop off*"/>
         </div>
          <div className='flex  gap-3 mb-5 md:mb-0 md:gap-5'>
          <label className="flex w-2/4 md:w-[256px] flex-col justify-between items-start text-white gap-2">Start Date*
        <input type="date" className='w-full h-[35px] border-none outline-none bg-[#1F6340] px-5 font-medium' required />
      </label>
      <label className="flex w-2/4 md:w-[256px] flex-col justify-between items-start text-white gap-2">End Date*
        <input type="date" className='w-full h-[35px] border-none outline-none bg-[#1F6340] px-5 font-medium' required/>
      </label>
          </div>
          <div className='flex  gap-3 mb-5 md:mb-0 md:gap-5'>
          <label className="flex w-2/4 md:w-[256px] flex-col justify-between items-start text-white gap-2" >Number*
        <input type="number" className='w-full h-[35px] border-none outline-none bg-[#1F6340] px-5 font-medium' required/>
      </label>
          <div className="relative w-2/4 md:w-64">
      <label className="block text-white mb-2" required>RV type*</label>
      
      <div
        className="bg-[#1F6340] text-white font-semibold cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="px-4 py-2 flex justify-between items-center">
          <span>{selectedOption || ""}</span>
          <svg
            className={`w-5 h-5 transform ${issOpen ? "rotate-180" : "rotate-0"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 8l4 4 4-4" />
          </svg>
        </div>
      </div>

      {issOpen && (
        <div className="absolute w-full mt-1 bg-[#1F6340] z-10">
          {RVoptions.map((RVoption, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer text-white hover:bg-green-200"
              onClick={() => selectOption(RVoption)}
            >
              {RVoption}
            </div>
          ))}
        </div>
      )}
    </div>
          </div>
          <div className='mb-5 md:mb-0 md:mt-[2rem]'>
        <h1 className='md:hidden text-lg text-white font-medium mb-3 md:mb-0'>Personal Details</h1>
        <div className='flex flex-col md:gap-5'>
          <div className='flex gap-3  md:gap-5'>
          <label className="flex w-2/4 md:w-[256px] flex-col justify-between items-start text-white gap-2">First name*
        <input type="text" className='w-full h-[35px] border-none outline-none bg-[#1F6340] px-5 font-medium' />
      </label>
      <label className="flex w-2/4 md:w-[256px] flex-col justify-between items-start text-white gap-2">Last name*
        <input type="text" className='w-full h-[35px] border-none outline-none bg-[#1F6340] px-5 font-medium' />
      </label>
          </div>
          <div className='flex gap-3 md:gap-5'>
          <label className="flex w-2/4 md:w-[256px] flex-col justify-between items-start text-white gap-2">Phone
        <input type="number" className='w-full h-[35px] border-none outline-none bg-[#1F6340] px-5 font-medium' />
      </label>
      <label className="flex w-2/4 md:w-[256px] flex-col justify-between items-start text-white gap-2">Email*
        <input type="email" className='w-full h-[35px] border-none outline-none bg-[#1F6340] px-5 font-medium' required/>
      </label>
          </div>
        </div>
      </div>
          <button type='submit' className='md:ml-4 mx-10 font-semibold w-3/4 md:w-[150px]  text-[#4da764] px-3 py-3 bg-white'
                style={{border:"2px solid white",borderRadius:"25px"}}>Submit</button>
        </form>
      </div>
     </div>
     </div>
  </div>
  )
}

export default Booking