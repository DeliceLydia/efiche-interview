import React from 'react'
import { PiBriefcaseThin } from "react-icons/pi";
import { CiViewTimeline } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import { MdOutlineTagFaces } from "react-icons/md";

const InPatient = () => {
  const stats = [
    {
      icon: <FaCheck size={20} />,
      label: 'Available Beds',
      value: '32'
    },
    {
      icon: <HiXMark size={20} />,
      label: 'Occupied Beds',
      value: '11'
    },
    {
      icon: <CiViewTimeline size={20} />,
      label: 'Transfers work list',
      value: '07'
    },
    {
      icon: <MdOutlineTagFaces size={20} />,
      label: 'Discharge list',
      value: '32'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-[#fff] shadow-md rounded-xl mt-6">
      <h1 className='my-2 text-xl font-medium'>Inpatient</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="p-6">
            <div className='flex items-center gap-2'>
            <div className="text-base text-[#1e2433] w-12 h-12 mb-4 bg-gray-100 rounded-full flex justify-center items-center">
              {stat.icon}
            </div>
            <p className="text-sm text-[#111827] font-light w-14">
              {stat.label}
            </p>
            </div>
            <p className="text-4xl text-[#111827] font-semibold mb-4 flex items-center mt-4">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InPatient