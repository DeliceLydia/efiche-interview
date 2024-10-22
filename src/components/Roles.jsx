import React from 'react';
import doc from '../assets/doc.png';

const Roles = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="flex items-center mb-6">
          <img src="efiche.png" alt="eFiche" className="w-16 h-20 mr-2" />
          <h1 className="text-4xl font-bold text-gray-900">eFiche</h1>
        </div>

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
                <span className="text-gray-900">{role}</span>
                <input
                  type="radio"
                  name="role"
                  className="form-radio w-5 h-5 text-[#ebecee] focus:ring-[#27a376] border-[#ebecee]"
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
      <div className="hidden lg:flex w-1/2 justify-center items-center mt-6 mb-6">
        <img
          src={doc}
          alt="Medical Experience"
          className="w-full h-[calc(100vh-3rem)] max-w-[80%] rounded-3xl mx-6"
        />
      </div>
    </div>
  );
};

export default Roles;
