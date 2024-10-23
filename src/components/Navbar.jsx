import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { TbMessage } from "react-icons/tb";

const Navbar = ({ setSidebarToggle, sidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const roles = [
    { name: 'Nurse', icon: '/path-to-nurse-icon' },
    { name: 'Facility admin', icon: '/path-to-facility-admin-icon' },
    { name: 'Receptionist', icon: '/path-to-receptionist-icon' },
    { name: 'Lab Technician', icon: '/path-to-lab-technician-icon' },
    { name: 'Pharmacist', icon: '/path-to-pharmacist-icon' },
    { name: 'Cashier', icon: '/path-to-cashier-icon' },
    { name: 'Dentist', icon: '/path-to-dentist-icon' },
  ];

  return (
    <nav className=' py-5 flex justify-around items-center shadow'>
      <div className='flex items-center -ml-16'>
        <button
          onClick={() => setSidebarToggle(prev => !prev)}
          className='text-[#084d8d] flex items-center text-sm font-medium hover:text-[#000] md:hidden'
        >
          {sidebarToggle ? <XMarkIcon className='me-4 h-5 w-5 bg-[red]' /> : <FaBars className='me-4' />}
        </button>
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className='flex items-center justify-between w-40 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 bg-white hover:border-gray-400 transition-all'
        >
          <span className="text-sm font-medium">Nurse</span>
          {!isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
        </button>

        {isOpen && (
          <div className="absolute top-16 mt-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-48 p-6">
            <div className="">
              {roles.map((role, index) => (
                <button
                  key={index}
                  className="w-full flex justify-between px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <span>{role.name}</span>
                  <AiOutlineCaretDown />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-8 items-center -mr-52">
        <div className="relative">
          <span className="relative flex">
          <TbMessage size={24}/>
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </span>
        </div>
        <div className="relative  flex items-center">
          <img
            src="ai2.jpeg"
            alt="Profile"
            className="w-12 h-12 rounded-full border border-gray-200"
          />
          <AiOutlineCaretDown className="ml-2 text-gray-700" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
