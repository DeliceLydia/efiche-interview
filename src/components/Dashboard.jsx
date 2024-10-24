import React from 'react';
import { PiHandWavingFill } from "react-icons/pi";
import DashboardStats from './DashboardStat';
import Consultations from './Consultations';
import InPatient from './InPatient';

const Dashboard = () => {

  return (
    <div className="bg-[#f1f2f4] w-full py-6 pl-28 ml-10">
      <div className='ml-36'>
        <h1 className="mb-2 text-[#111827] font-semibold text-2xl flex items-center">
          Hi, Jack
          <PiHandWavingFill className="text-[#dfb891] ml-2" size={28} />
        </h1>
        <p className="text-[#687588] font-light mb-3">
          This is your performance report so far
        </p>
      </div>
      <main className=''>
        <DashboardStats />
        <Consultations />
        <InPatient />
      </main>
    </div>
  );
};

export default Dashboard;
