"use client"
import React, { useState, useEffect } from 'react'
import UserForm from './UserForm';
import BillingForm from './BillingForm';

const ProfileForm = () => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    }

    useEffect(()=>{

    },[])
    return (
        <div className='bg-primary3 w-[430px]'>
            <div className="flex justify-between w-[80%] m-auto mb-4 border-b-2 mt-16">
                <button
                    className={`text-slate-700 text-sm leading-4 w-[50%] tracking-normal ${activeTab === 1
                        ? 'border-b-2 border-blue-700 '
                        : 'text-gray-700'
                        } px-1  py-2 focus:outline-none`}
                    onClick={() => handleTabClick(1)}
                >
                    Profile
                </button>
                <button
                    className={`text-slate-700 text-sm leading-4  w-[50%] tracking-normal ${activeTab === 2
                        ? 'border-b-2 border-blue-700 '
                        : 'text-gray-700'
                        } px-4 py-2 ml-10 focus:outline-none`}
                    onClick={() => handleTabClick(2)}
                >
                    Billing Information
                </button>

            </div>
            <div className='w-[100%] m-auto flex-auto justify-center  items-center'>
                {/* Content for Tab 1 */}
                {activeTab === 1 && <div className="p-4">
                    <UserForm />
                </div>
                }

                {/* Content for Tab 2 */}
                {activeTab === 2 && <div className="p-4" >
                    <BillingForm />
                </div>
                }

               

            </div>
        </div>
    )
}

export default ProfileForm