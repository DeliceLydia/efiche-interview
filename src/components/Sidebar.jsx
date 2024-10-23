import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { FiUserPlus, FiUsers } from "react-icons/fi";
import { CiCalendarDate, CiViewTimeline } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarToggle }) => {
  const menuItems = [
    { icon: <RxDashboard size={22}/>, path: '/' },
    { icon: <FiUserPlus size={22}/>, path: '/add-user' },
    { icon: <CiCalendarDate size={22}/>, path: '/calendar' },
    { icon: <CiViewTimeline size={22}/>, path: '/timeline' },
    { icon: <FiUsers size={22}/>, path: '/users' },
  ];

  return (
    <div className={`w-50 px-12 pt-4 shadow bg-[#ffffff] fixed h-full ${sidebarToggle ? 'block' : 'hidden'} md:block`}>
      <div className="flex justify-center items-center mb-4">
        <img src="efiche.png" alt="eFiche" className="w-8 h-12" />
        <h1 className="text-xl font-bold text-[#2c2c2c]">eFiche</h1>
      </div>

      <ul className='mt-8 text-[#acb8c8] font-bold flex flex-col items-center'>
        {menuItems.map((item, index) => (
          <li key={index} className={`h-10 flex items-center rounded-md mb-5 ${index === 0 ? 'bg-[#27a376] text-[#fff] px-12 py-7 rounded-xl' : ''}`}
          >
            <Link to={item.path} className='flex items-center'>
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
