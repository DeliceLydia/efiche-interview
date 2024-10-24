import React from 'react';
import { Line } from 'react-chartjs-2';
import { FiUsers } from "react-icons/fi";
import { PiBriefcaseThin } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Consultations = () => {
  const data = {
    labels: ['11th', '12th', '13th', '14th', '15th', '16th', '17th'],
    datasets: [
      {
        label: 'Completed',
        data: [20, 25, 30, 22, 27, 35, 40],
        borderColor: '#14af60',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Pending',
        data: [10, 15, 12, 18, 20, 23, 25],
        borderColor: '#fec837',
        fill: false,
        tension: 0.4,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const stats = [
    {
      label: 'Consultations',
      value: '27',
      percentage: '+25.5%',
      increase: true,
      icon: <FiUsers size={20} />,
    },
    {
      label: 'Admissions',
      value: '25',
      percentage: '+4.10%',
      increase: true,
      icon: <PiBriefcaseThin size={20} />,
    },
    {
      label: 'Appointments',
      value: '20',
      percentage: '+5.1%',
      increase: true,
      icon: <IoIosArrowRoundBack size={24} />,
    },
    {
      label: 'Referrals',
      value: '07',
      percentage: '-25.5%',
      increase: false,
      icon: <IoIosArrowRoundForward size={24} />,
    },
  ];

  return (
    <div className="bg-white w-full max-w-6xl mx-auto p-6 shadow-md rounded-xl mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-white shadow rounded-lg">
              <div className="w-12 h-12 mb-4 bg-gray-100 rounded-full flex justify-center items-center">
                {stat.icon}
              </div>
              <div className="flex items-center gap-3 mb-2">
                <p className="text-4xl font-bold text-gray-800">{stat.value}</p>
                <span className={`text-sm flex items-center gap-2 font-normal ${stat.increase ? 'text-green-600 bg-green-100 px-2 py-1 rounded-lg' : 'text-red-500 bg-red-100 px-2 py-1 rounded-lg'}`}>
                  <FaArrowTrendUp />
                  {stat.percentage}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="p-6">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Consultations</h2>
            <div className="flex items-center border p-2 rounded-xl">
              <span className="text-sm font-light mr-2">Last 7 days</span>
              <button className="p-2">
                <CiCalendarDate size={20} />
              </button>
            </div>
          </div>
          <ul className="mt-4 mb-6 flex space-x-4">
            {data.datasets.map((dataset, index) => (
              <li key={index} className="flex items-center">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: dataset.borderColor }}></span>
                <span className="ml-2 text-sm font-normal">{dataset.label}</span>
              </li>
            ))}
          </ul>
          <Line data={data} options={options} /> 
        </div>
      </div>
    </div>
  );
};

export default Consultations;
