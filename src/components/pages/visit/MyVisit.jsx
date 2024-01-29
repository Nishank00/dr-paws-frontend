"use client"
import React, { useState } from 'react'
import AllVisit from './AllVisit';
import PastVisit from './PastVisit';
import CancelledVisit from './CancelledVisit';
import UpcomingVisit from './UpcomingVisit';
import NoVisitBox from './NoVisitBox';
import AppointmentBox from './AppointmentBox';

const MyVisit = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    }
    return (
        <div className='w-full pt-[83px]'>
            <div className="flex mb-4 border-b-2 ">
                <button
                    className={`text-slate-700 font-bold text-md leading-4 tracking-normal ${activeTab === 1
                        ? 'border-b-2 border-blue-500 '
                        : 'text-gray-700'
                        } px-1  py-2 focus:outline-none`}
                    onClick={() => handleTabClick(1)}
                >
                    All

                </button>
                <button
                    className={`text-slate-700  font-bold text-md leading-4 tracking-normal ${activeTab === 2
                        ? 'border-b-2 border-blue-500 '
                        : 'text-gray-700'
                        } px-4 py-2 ml-10 focus:outline-none`}
                    onClick={() => handleTabClick(2)}
                >
                    Upcoming
                </button>
                <button
                    className={`text-slate-700  font-bold text-md leading-4 tracking-normal ${activeTab === 3
                        ? 'border-b-2 border-blue-500 '
                        : 'text-gray-700'
                        } px-4 py-2 ml-10 focus:outline-none`}
                    onClick={() => handleTabClick(3)}
                >
                    Past
                </button>
                <button
                    className={`text-slate-700 font-bold text-md leading-4 tracking-normal ${activeTab === 4
                        ? 'border-b-2 border-blue-500 '
                        : 'text-gray-700'
                        } px-4 py-2 ml-10 focus:outline-none`}
                    onClick={() => handleTabClick(4)}
                >
                    Cancelled
                </button>
            </div>
            <div className='w-full m-auto flex-auto justify-center  items-center'>
                {/* Content for Tab 1 */}
                {activeTab === 1 && <div className="">
                    <AllVisit />
                </div>
                }

                {/* Content for Tab 2 */}
                {activeTab === 2 && <div className="p-4" >
                    <NoVisitBox />

                </div>
                }

                {/* Content for Tab 3 */}
                {activeTab === 3 && <div className="p-4">
                    <AppointmentBox />

                </div>
                }
                {/* Content for Tab 4 */}
                {activeTab === 4 && <div className="p-4">
                    <CancelledVisit />

                </div>
                }

            </div>
        </div>
    )
}

export default MyVisit