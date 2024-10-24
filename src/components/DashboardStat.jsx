import React from 'react';

const DashboardStats = () => {
  const stats = [
    {
      label: 'Current consultations',
      value: '07',
      linkText: 'Go to my consultations',
      link: '/consultations'
    },
    {
      label: 'Current admissions',
      value: '21',
      linkText: 'Go to my admissions',
      link: '/admissions'
    },
    {
      label: 'Current appointments',
      value: '17',
      linkText: 'Go to my appointments',
      link: '/appointments'
    },
    {
      label: 'Current emergency PT',
      value: '500',
      linkText: 'Go to my emergencies',
      link: '/emergencies'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-[#fff] shadow-md rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 border rounded-lg bg-white">
            <h3 className="text-sm text-[#1e2433] font-medium mb-2">
              {stat.label}
            </h3>
            <p className="text-4xl text-[#111827] font-bold mb-4">
              {stat.value}
            </p>
            <a
              href={stat.link}
              className="text-[#27a376] font-light text-sm flex items-center hover:underline"
            >
              {stat.linkText}
              <span className="ml-2">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
