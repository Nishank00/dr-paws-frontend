'use client'
import React, { useState } from 'react';


export default function VerticalTabs() {


    const [activeTab, setActiveTab] = useState('tab1');

    const activeButonStyle = "text-white text-lg font-bold capitalize whitespace-nowrap justify-center border-l-[color:var(--Primary-1,#33495F)] bg-[#5281a2] pl-7 pr-16 py-5 border-l-[5px] border-solid items-start max-md:px-5";
    const buttonStyle = "text-slate-700 text-lg capitalize whitespace-nowrap justify-center items-stretch bg-white pl-7 pr-16 py-5 max-md:pl-5 max-md:pr-7";

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        console.log(activeTab)

    };


    return (
        <>
            <div className="flex  h-full mt-[29px]">
                {/* Tab buttons */}
                <div className=" flex flex-col w-[29%] flex-shrink-0">
                    <button
                        className={`tab-button ${activeTab === 'tab1' && 'active-tab'} ${activeTab === 'tab1' ? activeButonStyle : buttonStyle}`}
                        onClick={() => handleTabClick('tab1')}
                    >
                        Planned Check-Ups
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'tab2' && 'active-tab'} ${activeTab === 'tab2' ? activeButonStyle : buttonStyle}`}
                        onClick={() => handleTabClick('tab2')}
                    >
                        Sickness & Emergency
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'tab3' && 'active-tab'} ${activeTab === 'tab3' ? activeButonStyle : buttonStyle}`}
                        onClick={() => handleTabClick('tab3')}
                    >
                        Diagnostics
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'tab4' && 'active-tab'} ${activeTab === 'tab4' ? activeButonStyle : buttonStyle}`}
                        onClick={() => handleTabClick('tab4')}
                    >
                        Planned surgeries
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'tab5' && 'active-tab'} ${activeTab === 'tab5' ? activeButonStyle : buttonStyle}`}
                        onClick={() => handleTabClick('tab5')}
                    >
                        Dental
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'tab6' && 'active-tab'} ${activeTab === 'tab6' ? activeButonStyle : buttonStyle}`}
                        onClick={() => handleTabClick('tab6')}
                    >
                        Grooming
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'tab7' && 'active-tab'} ${activeTab === 'tab7' ? activeButonStyle : buttonStyle}`}
                        onClick={() => handleTabClick('tab7')}
                    >
                        Pet Services
                    </button>
                </div>

                {/* Tab content */}
                <div className="flex flex-col items-stretch w-[71%] ml-5 max-md:w-full max-md:ml-0">
                    <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? '' : 'hidden'}`}>
                        <span className="justify-between items-center bg-orange-100 flex grow flex-col w-full px-16 py-10 max-md:max-w-full max-md:px-5">
                            <div className="text-slate-700 text-2xl capitalize self-stretch max-md:max-w-full">
                                Planned check-ups
                            </div>
                            <div className="justify-center self-stretch mt-8 max-md:max-w-full">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex grow flex-col max-md:mt-4">
                                            <span className="justify-between flex gap-2.5 items-start">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Vaccinations
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3035879011bacadfa26d5d795d3a6fd99d9a8b5ef96d8815bb22845a9a8db600?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Deworming
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf547f474c68b57424b3842a4375228190a215798f79c19e4d15478e9181cdfb?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Nutritional Counselling
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/686067d3a5ab7568a30a5a77815b39eb55eff705df121e862a62e6b8dff5a812?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Behavioural Counselling
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex flex-col max-md:mt-4">
                                            <span className="justify-between flex gap-2.5 items-start">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Vaccinations
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff3fd7c16edc95a1c7e7ea971356d5a37e9756b2a056e744a9b52366abcece79?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Deworming
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4fc2bf21c46570bd030c4b414de770a2d670a9d343cfdb95e755c4ef1ee8b40?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Nutritional Counselling
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-[#9fa983] mt-20 px-12 py-3.5 rounded-[86px] max-md:mt-10 max-md:px-5">
                                View Services
                            </span>
                        </span>
                    </div>
                    <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? '' : 'hidden'}`}>
                    <span className="justify-between items-center bg-orange-100 flex grow flex-col w-full px-16 py-10 max-md:max-w-full max-md:px-5">
                            <div className="text-slate-700 text-2xl capitalize self-stretch max-md:max-w-full">
                                Planned check-ups
                            </div>
                            <div className="justify-center self-stretch mt-8 max-md:max-w-full">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex grow flex-col max-md:mt-4">
                                            <span className="justify-between flex gap-2.5 items-start">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Vaccinations
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3035879011bacadfa26d5d795d3a6fd99d9a8b5ef96d8815bb22845a9a8db600?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Deworming
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf547f474c68b57424b3842a4375228190a215798f79c19e4d15478e9181cdfb?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Nutritional Counselling
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/686067d3a5ab7568a30a5a77815b39eb55eff705df121e862a62e6b8dff5a812?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Behavioural Counselling
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex flex-col max-md:mt-4">
                                            <span className="justify-between flex gap-2.5 items-start">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Vaccinations
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff3fd7c16edc95a1c7e7ea971356d5a37e9756b2a056e744a9b52366abcece79?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Deworming
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4fc2bf21c46570bd030c4b414de770a2d670a9d343cfdb95e755c4ef1ee8b40?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Nutritional Counselling
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-stone-400 mt-20 px-12 py-3.5 rounded-[86px] max-md:mt-10 max-md:px-5">
                                View Services
                            </span>
                        </span>
                    </div>
                    <div id="tab3" className={`tab-content ${activeTab === 'tab3' ? '' : 'hidden'}`}>
                    <span className="justify-between items-center bg-orange-100 flex grow flex-col w-full px-16 py-10 max-md:max-w-full max-md:px-5">
                            <div className="text-slate-700 text-2xl capitalize self-stretch max-md:max-w-full">
                                Planned check-ups
                            </div>
                            <div className="justify-center self-stretch mt-8 max-md:max-w-full">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex grow flex-col max-md:mt-4">
                                            <span className="justify-between flex gap-2.5 items-start">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Vaccinations
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3035879011bacadfa26d5d795d3a6fd99d9a8b5ef96d8815bb22845a9a8db600?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Deworming
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf547f474c68b57424b3842a4375228190a215798f79c19e4d15478e9181cdfb?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Nutritional Counselling
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/686067d3a5ab7568a30a5a77815b39eb55eff705df121e862a62e6b8dff5a812?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Behavioural Counselling
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex flex-col max-md:mt-4">
                                            <span className="justify-between flex gap-2.5 items-start">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Vaccinations
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff3fd7c16edc95a1c7e7ea971356d5a37e9756b2a056e744a9b52366abcece79?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Deworming
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4fc2bf21c46570bd030c4b414de770a2d670a9d343cfdb95e755c4ef1ee8b40?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Nutritional Counselling
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-stone-400 mt-20 px-12 py-3.5 rounded-[86px] max-md:mt-10 max-md:px-5">
                                View Services
                            </span>
                        </span>
                    </div>
                    <div id="tab4" className={`tab-content ${activeTab === 'tab4' ? '' : 'hidden'}`}>
                    <span className="justify-between items-center bg-orange-100 flex grow flex-col w-full px-16 py-10 max-md:max-w-full max-md:px-5">
                            <div className="text-slate-700 text-2xl capitalize self-stretch max-md:max-w-full">
                                Planned check-ups
                            </div>
                            <div className="justify-center self-stretch mt-8 max-md:max-w-full">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex grow flex-col max-md:mt-4">
                                            <span className="justify-between flex gap-2.5 items-start">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Vaccinations
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3035879011bacadfa26d5d795d3a6fd99d9a8b5ef96d8815bb22845a9a8db600?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Deworming
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf547f474c68b57424b3842a4375228190a215798f79c19e4d15478e9181cdfb?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Nutritional Counselling
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/686067d3a5ab7568a30a5a77815b39eb55eff705df121e862a62e6b8dff5a812?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Behavioural Counselling
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex flex-col max-md:mt-4">
                                            <span className="justify-between flex gap-2.5 items-start">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Vaccinations
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff3fd7c16edc95a1c7e7ea971356d5a37e9756b2a056e744a9b52366abcece79?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Deworming
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4fc2bf21c46570bd030c4b414de770a2d670a9d343cfdb95e755c4ef1ee8b40?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Nutritional Counselling
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-stone-400 mt-20 px-12 py-3.5 rounded-[86px] max-md:mt-10 max-md:px-5">
                                View Services
                            </span>
                        </span>
                    </div>
                    <div id="tab5" className={`tab-content ${activeTab === 'tab5' ? '' : 'hidden'}`}>
                    <span className="justify-between items-center bg-orange-100 flex grow flex-col w-full px-16 py-10 max-md:max-w-full max-md:px-5">
                            <div className="text-slate-700 text-2xl capitalize self-stretch max-md:max-w-full">
                                Planned check-ups
                            </div>
                            <div className="justify-center self-stretch mt-8 max-md:max-w-full">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex grow flex-col max-md:mt-4">
                                            <span className="justify-between flex gap-2.5 items-start">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Vaccinations
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3035879011bacadfa26d5d795d3a6fd99d9a8b5ef96d8815bb22845a9a8db600?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Deworming
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf547f474c68b57424b3842a4375228190a215798f79c19e4d15478e9181cdfb?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Nutritional Counselling
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/686067d3a5ab7568a30a5a77815b39eb55eff705df121e862a62e6b8dff5a812?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Behavioural Counselling
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex flex-col max-md:mt-4">
                                            <span className="justify-between flex gap-2.5 items-start">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Vaccinations
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff3fd7c16edc95a1c7e7ea971356d5a37e9756b2a056e744a9b52366abcece79?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Deworming
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4fc2bf21c46570bd030c4b414de770a2d670a9d343cfdb95e755c4ef1ee8b40?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Nutritional Counselling
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-stone-400 mt-20 px-12 py-3.5 rounded-[86px] max-md:mt-10 max-md:px-5">
                                View Services
                            </span>
                        </span>
                    </div>
                    <div id="tab6" className={`tab-content ${activeTab === 'tab6' ? '' : 'hidden'}`}>
                    <span className="justify-between items-center bg-orange-100 flex grow flex-col w-full px-16 py-10 max-md:max-w-full max-md:px-5">
                            <div className="text-slate-700 text-2xl capitalize self-stretch max-md:max-w-full">
                                Planned check-ups
                            </div>
                            <div className="justify-center self-stretch mt-8 max-md:max-w-full">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex grow flex-col max-md:mt-4">
                                            <span className="justify-between flex gap-2.5 items-start">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Vaccinations
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3035879011bacadfa26d5d795d3a6fd99d9a8b5ef96d8815bb22845a9a8db600?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Deworming
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf547f474c68b57424b3842a4375228190a215798f79c19e4d15478e9181cdfb?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Nutritional Counselling
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/686067d3a5ab7568a30a5a77815b39eb55eff705df121e862a62e6b8dff5a812?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Behavioural Counselling
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex flex-col max-md:mt-4">
                                            <span className="justify-between flex gap-2.5 items-start">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Vaccinations
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff3fd7c16edc95a1c7e7ea971356d5a37e9756b2a056e744a9b52366abcece79?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Deworming
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4fc2bf21c46570bd030c4b414de770a2d670a9d343cfdb95e755c4ef1ee8b40?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Nutritional Counselling
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-stone-400 mt-20 px-12 py-3.5 rounded-[86px] max-md:mt-10 max-md:px-5">
                                View Services
                            </span>
                        </span>
                    </div>
                    <div id="tab7" className={`tab-content ${activeTab === 'tab7' ? '' : 'hidden'}`}>
                    <span className="justify-between items-center bg-orange-100 flex grow flex-col w-full px-16 py-10 max-md:max-w-full max-md:px-5">
                            <div className="text-slate-700 text-2xl capitalize self-stretch max-md:max-w-full">
                                Planned check-ups
                            </div>
                            <div className="justify-center self-stretch mt-8 max-md:max-w-full">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex grow flex-col max-md:mt-4">
                                            <span className="justify-between flex gap-2.5 items-start">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Vaccinations
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3035879011bacadfa26d5d795d3a6fd99d9a8b5ef96d8815bb22845a9a8db600?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Deworming
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf547f474c68b57424b3842a4375228190a215798f79c19e4d15478e9181cdfb?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Nutritional Counselling
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/686067d3a5ab7568a30a5a77815b39eb55eff705df121e862a62e6b8dff5a812?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Behavioural Counselling
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                                        <div className="items-stretch flex flex-col max-md:mt-4">
                                            <span className="justify-between flex gap-2.5 items-start">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Vaccinations
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff3fd7c16edc95a1c7e7ea971356d5a37e9756b2a056e744a9b52366abcece79?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Deworming
                                                </div>
                                            </span>
                                            <span className="justify-between items-center flex gap-2.5 mt-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4fc2bf21c46570bd030c4b414de770a2d670a9d343cfdb95e755c4ef1ee8b40?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                                    className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                                                    Nutritional Counselling
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-stone-400 mt-20 px-12 py-3.5 rounded-[86px] max-md:mt-10 max-md:px-5">
                                View Services
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
