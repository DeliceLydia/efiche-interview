import React from 'react';
import doc from '../assets/doc.png'
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="flex items-center mb-6">
          <img src="efiche.png" alt="eFiche" className="w-16 h-20 mr-2" />
          <h1 className="text-4xl font-bold text-gray-900">eFiche</h1>
        </div>

        <div className="w-full max-w-md">
          <h2 className="text-xl font-semibold mb-6 text-center">Log into your account</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#222836]">
                User name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="user name"
                style={{ '::placeholder': { color: '#b9c3d0' } }}
                className="w-full px-4 py-2 border border-[#ebecee] rounded-md focus:outline-none focus:ring-1 focus:ring-[#27a376]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#222836]">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  style={{ '::placeholder': { color: '#b9c3d0' } }}
                  className="w-full px-4 py-2 border border-[#ebecee] rounded-md focus:outline-none focus:ring-1 focus:ring-[#27a376]"
                />
                <span className="absolute inset-y-0 right-4 flex items-center">
                  <AiOutlineEyeInvisible />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between py-4">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-green-600" />
                <span className="ml-2 text-sm text-[#687588]">Remember Me</span>
              </label>
              <a href="#" className="text-sm text-[#687588] hover:text-green-500">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#27a376] text-white rounded-md hover:bg-green-600"
            >
              Login
            </button>
          </form>
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
          className="w-full h-[calc(100vh-3rem)] max-w-[80%] rounded-3xl -mr-14"
        />
      </div>
    </div>
  );
};

export default Login;
