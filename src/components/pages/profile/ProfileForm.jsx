"use client"
import React, { useState, useEffect } from 'react'
import UserForm from './UserForm';
import BillingForm from './BillingForm';

const ProfileForm = ({ closePopup, user_id }) => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    }

    useEffect(() => {

    }, [])
    return (
        <>
            {/* <div className='bg-primary3 w-[430px]  rounded-md'>
            <div  className="flex justify-between align-baseline w-[80%] m-auto  border-2 ">
                <button 
                className='w-[50%]  h-7 text-sm text-primary '
                >
                    Profile
                </button>
                <button
                style={{border:"1px solid red"}}
                    className={`text-primary h-10 text-sm   font-custom-open-sans font-bold  w-[50%] tracking-normal  px-1   `}
                    onClick={() => handleTabClick( 1 )}
                > 
                    Profile
                   { activeTab === 1 && <div className='w-full border-2 rounded-full align-baseline border-solid border-blue-700'></div>}
                </button>
                <button
                    className={`text-slate-700 text-sm leading-4  w-[50%] tracking-normal ${ activeTab === 2
                        ? 'border-b-2 border-blue-700 '
                        : 'text-gray-700'
                        } px-4 py-2 ml-10 focus:outline-none`}
                    onClick={() => handleTabClick( 2 )}
                >
                    Billing Information
                </button>

            </div>
            <div className='w-[100%] m-auto flex-auto justify-center  items-center'> */}
            {/* Content for Tab 1 */}
            {/* {activeTab === 1 && <div className="py-1 px-4">
                    <UserForm user_id={user_id} closePopup={closePopup} />
                </div>
                } */}

            {/* Content for Tab 2 */}
            {/* {activeTab === 2 && <div className="p-4" >
                    <BillingForm user_id={user_id} closePopup={closePopup} />
                </div>
                } */}
            {/* </div>
        </div> */}
            <div className='bg-primary3 w-[430px]  rounded-md'>
                <div className='w-full h-12 flex items-end border-2 border-solid  rounded-md'>
                    <button onClick={() => handleTabClick(1)}
                         className='w-[50%] h-full  flex flex-col justify-between items-center'>
                        <div className='text-primary text-sm  font-bold font-custom-open-sans mt-3'>
                            Profile
                        </div>
                        {activeTab === 1 && <div className='w-full border-2 rounded-full align-baseline border-solid border-blue-700'></div>}</button>
                    <button
                        onClick={() => handleTabClick(2)}
                        className='w-[50%] h-full  flex flex-col justify-between items-center'>
                        <div className='text-primary text-sm  font-bold font-custom-open-sans mt-3'>
                        Billing Information
                        </div>
                        {activeTab === 2 && <div className='w-full border-2 rounded-full align-baseline border-solid border-blue-700'></div>}</button>
                </div>
            <div className='w-[100%] m-auto flex-auto justify-center  items-center'> 
            {/* Content for Tab 1 */}
            {activeTab === 1 && <div className="py-1 px-4">
                    <UserForm user_id={user_id} closePopup={closePopup} />
                </div>
                }

            {/* Content for Tab 2 */}
            {activeTab === 2 && <div className="p-4" >
                    <BillingForm user_id={user_id} closePopup={closePopup} />
                </div>
                }
            </div>
            </div>
        </>


    )
}

export default ProfileForm