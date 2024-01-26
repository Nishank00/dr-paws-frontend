'use client'
import React, { useState, useEffect } from 'react'

const OverviewTabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    }

    return (
        <div className='w-[100%] m-auto flex-auto justify-center  items-center'>
            <span className="self-center flex w-full max-w-[1042px] items-stretch justify-between gap-5  max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="px-5 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[81%] max-md:w-full max-md:ml-0">
                            <span className="flex grow flex-col items-stretch max-md:mt-7">
                                <div className="text-slate-700 text-4xl leading-9 capitalize whitespace-nowrap">
                                    Andheri West Clinic
                                </div>
                                <div className="text-slate-700 text-2xl leading-6 tracking-tight whitespace-nowrap mt-7">
                                    Grooming | OPD | Surgery
                                </div>

                            </span>
                        </div>
                        <div className="flex flex-col items-stretch w-[19%] ml-5 max-md:w-full max-md:ml-0">

                        </div>
                    </div>
                </div>
                <span className="text-white text-2xl font-bold whitespace-nowrap justify-center items-stretch bg-slate-500 mt-1 px-12 py-4 rounded-[43.2px] self-start max-md:px-5">
                    Book a Visit
                </span>
            </span>
            <div className="flex mb-4 border-b-2">
                <button
                    className={`text-slate-700 text-xl leading-4 tracking-normal ${activeTab === 1
                            ? 'border-b-2 border-blue-500 '
                            : 'text-gray-700'
                        } px-4 py-2 focus:outline-none`}
                    onClick={() => handleTabClick(1)}
                >
                    Overview
                </button>
                <button
                    className={`text-slate-700 text-xl leading-4 tracking-normal ${activeTab === 2
                            ? 'border-b-2 border-blue-500 '
                            : 'text-gray-700'
                        } px-4 py-2 focus:outline-none`}
                    onClick={() => handleTabClick(2)}
                >
                    Photo
                </button>
                <button
                    className={`text-slate-700 text-xl leading-4 tracking-normal ${activeTab === 3
                            ? 'border-b-2 border-blue-500 '
                            : 'text-gray-700'
                        } px-4 py-2 focus:outline-none`}
                    onClick={() => handleTabClick(3)}
                >
                    Surgery
                </button>
            </div>
        </div>
    )
}

export default OverviewTabs