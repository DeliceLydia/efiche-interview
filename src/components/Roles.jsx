import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from './Image';
import Logo from './Logo';

const Roles = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (role) => {
    setSelectedRole(role);

    if (role === 'Nurse') {
      navigate('/nurse-page'); 3
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <Logo />
        <div className="w-full max-w-md">
          <h2 className="text-xl font-semibold mb-6 text-center">Select the user role</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              'Facility admin',
              'Receptionist',
              'Lab technician',
              'Radiology technician',
              'Audiologist',
              'Pharmacist',
              'Cashier',
              'Nurse',
              'Accountant',
              'Dentist'
            ].map((role, index) => (
              <label
                key={index}
                className="flex justify-between items-center border border-[#ebecee] rounded-lg px-4 py-4 cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <span className="text-[#4d525d]">{role}</span>
                <input
                  type="radio"
                  name="role"
                  className="form-radio w-5 h-5 text-[#ebecee] focus:ring-[#27a376] border-[#ebecee]"
                  checked={selectedRole === role}
                  onChange={() => handleRoleChange(role)}
                />
              </label>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-[#b0bbca] text-sm flex pt-8">
          © 2024 eFiche. All rights reserved. <br />
          <a href="#" className="text-[#1e2433] hover:underline px-3">Terms & Conditions</a>
          <a href="#" className="text-[#1e2433] hover:underline"> Privacy Policy</a>
        </div>
      </div>
      <Image />
    </div>
  );
};

export default Roles;
