'use client'
import React, { useState, useEffect } from 'react'

const OverviewTabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    }

    return (
        <div className='w-full mx-auto flex items-center justify-center'>
          <div className="flex mb-4 border-b-2">
            <button
              className={`text-slate-700 text-xl leading-4 tracking-normal ${activeTab === 1
                ? 'border-b-8 border-secondary2'
                : 'text-gray-700'
                } px-4 py-2 focus:outline-none`}
              onClick={() => handleTabClick(1)}
            >
              Planned check-ups
            </button>
            <button
              className={`text-slate-700 text-xl leading-4 tracking-normal ${activeTab === 2
                ? 'border-b-8 border-secondary2 '
                : 'text-gray-700'
                } px-4 py-2 focus:outline-none`}
              onClick={() => handleTabClick(2)}
            >
              Sickness & Emergency
            </button>
            <button
              className={`text-slate-700 text-xl leading-4 tracking-normal ${activeTab === 3
                ? 'border-b-8 border-secondary2 '
                : 'text-gray-700'
                } px-4 py-2 focus:outline-none`}
              onClick={() => handleTabClick(3)}
            >
              Diagnostics
            </button>
            <button
              className={`text-slate-700 text-xl leading-4 tracking-normal ${activeTab === 4
                ? 'border-b-8 border-secondary2 '
                : 'text-gray-700'
                } px-4 py-2 focus:outline-none`}
              onClick={() => handleTabClick(4)}
            >
              Planned surgeries
            </button>
            <button
              className={`text-slate-700 text-xl leading-4 tracking-normal ${activeTab === 5
                ? 'border-b-8 border-secondary2 '
                : 'text-gray-700'
                } px-4 py-2 focus:outline-none`}
              onClick={() => handleTabClick(5)}
            >
              Dental
            </button>
            <button
              className={`text-slate-700 text-xl leading-4 tracking-normal ${activeTab === 6
                ? 'border-b-8 border-secondary2 '
                : 'text-gray-700'
                } px-4 py-2 focus:outline-none`}
              onClick={() => handleTabClick(6)}
            >
              Grooming
            </button>
            <button
              className={`text-slate-700 text-xl leading-4 tracking-normal ${activeTab === 7
                ? 'border-b-8 border-secondary2 '
                : 'text-gray-700'
                } px-4 py-2 focus:outline-none`}
              onClick={() => handleTabClick(7)}
            >
              Pet services
            </button>
          </div>
        </div>
      );
      
}

export default OverviewTabs