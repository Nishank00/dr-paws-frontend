"use client"
import React, { useState, useEffect } from 'react'
import PetCard from './PetCard';
import DialogBox from '@/components/Common/DialogBox';
import ProfileForm from './ProfileForm';
import UserService from '@/services/User.Service';
import PetService from '@/services/Pet.Service';
import { UserService as UserStorageService } from "@/services/Storage.service"
import Popup from '@/components/ui/Popup';
import PetList from './PetList';
import PetForm from './PetForm';

const UserPofile = () => {
    const gridData = [1, 2, 3, 4, 5];
    const [isOpen, setIsOpen] = useState(false);
    const [userData, setUserData] = useState({});
    const [pets, setPets] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    const handleEditProfile = () => {
        setIsEditMode(true);
    };

    const handleUpdate = () => {
        setIsEditMode(false);
    };


    const getUserData = () => {
        console.log('getUserData running');
        UserService.getProfile()
            .then((response) => {
                if (!response.data.status) {
                    console.log('error');
                    return;
                }
                setUserData(response.data.data);
                UserStorageService.setUserInfo(response.data.data);
                // getPets(response.data.data.id);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const updateUserData = (data) => {
        UserService.updateUser(data)
            .then((response) => {
                if (!response.data.status) {
                    console.log('error');
                    return;
                }
                setUserData(response.data.data);
                UserStorageService.setUserInfo(response.data.data);
                isEditMode(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const getPets = (userId) => {
        PetService.getPetsByUserId(userId)
            .then((response) => {
                if (!response.data.status) {
                    console.log('error');
                    return;
                }
                setPets(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getUserData();
    }, [])

    return (
        <>

            <div className='w-full pt-[101px] flex flex-col-reverse lg:flex-col'>
                <div>
                    <div className='w-full flex items-center justify-center lg:justify-end sm:mt-5 md:mt-5'>
                        <button onClick={openPopup}
                        className="justify-center items-stretch w-[180px] border-[color:var(--Secondary-1,#5281A2)] flex gap-2 px-8 py-4 rounded-[86px] border-2 border-solid">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4de235d9b77455aa5f7570010e4b94c0b4e21c41aa50f4e54f6bc6467e5db216?apiKey=22a36eade5734692978208fb0d2f5c62&"
                                className="aspect-[1.08] object-contain object-center w-[15px] shrink-0 my-auto"
                            />
                            Edit Profile

                        </button>
                    </div>
                </div>
                <div className='w-full flex flex-col sm:flex-col md:flex-col lg:flex-row items-center lg:justify-between '>
                    {/* Avatr Box */}
                    <div className='hover:cursor-pointer'>
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d807e86609b272d880049a3ef6ee91d7c4381299e143d91e20e8af7c9b54cf3?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d807e86609b272d880049a3ef6ee91d7c4381299e143d91e20e8af7c9b54cf3?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d807e86609b272d880049a3ef6ee91d7c4381299e143d91e20e8af7c9b54cf3?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d807e86609b272d880049a3ef6ee91d7c4381299e143d91e20e8af7c9b54cf3?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d807e86609b272d880049a3ef6ee91d7c4381299e143d91e20e8af7c9b54cf3?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d807e86609b272d880049a3ef6ee91d7c4381299e143d91e20e8af7c9b54cf3?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d807e86609b272d880049a3ef6ee91d7c4381299e143d91e20e8af7c9b54cf3?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d807e86609b272d880049a3ef6ee91d7c4381299e143d91e20e8af7c9b54cf3?apiKey=22a36eade5734692978208fb0d2f5c62&"
                            className="aspect-square object-contain object-center  w-[160px] h-[160px] rounded-full"
                        />
                    </div>
                    <Popup isOpen={isOpen} onClose={closePopup} hideClose={true}>
                        <ProfileForm user_id={userData.id} closePopup={closePopup} />
                    </Popup>
                    {/* Profile details bOx */}

                    <div className='w-[100%] sm:[w-100%] md:[100%] lg:w-[80%] lg:ml-2  grid grid-cols-1 md:grid-cols-3 gap-2'>
                        <div className='w-[100%] flex  flex-col items-center justify-center'>
                            <div className="text-slate-700 text-2xl w-full text-center lg:text-left  italic font-semibold grow shrink basis-auto">
                                {userData.full_name || "NA"}
                            </div>
                            <div className="text-slate-500 w-full text-center lg:text-left text-sm leading-9 tracking-normal mt-5">
                                Contact No
                            </div>
                            <div className="text-slate-700 text-lg text-center lg:text-left w-full  font-semibold leading-8 tracking-normal ">
                                {userData.phone || "NA"}
                                {/* <input type="text" value={userData.phone} onChange={(e) => setUserData({...userData,phone:e.target.value})} /> */}
                            </div>
                        </div>
                        <div className='w-[100%] flex  flex-col items-center justify-center'>
                            <div className="text-slate-700 text-2xl w-full text-center lg:text-left  italic font-semibold grow shrink basis-auto">
                            </div>
                            <div className="text-slate-500 w-full text-center lg:text-left text-sm leading-9 tracking-normal mt-5">
                                Email
                            </div>
                            <div className="text-slate-700 text-lg text-center lg:text-left w-full  font-semibold leading-8 tracking-normal ">
                                {userData.email || "NA"}
                            </div>
                        </div>
                        <div className='w-[100%] flex  flex-col items-center justify-center'>
                            <div className="text-slate-700 text-2xl w-full text-center lg:text-left  italic font-semibold grow shrink basis-auto">
                            </div>
                            <div className="text-slate-500 w-full text-center lg:text-left text-sm leading-9 tracking-normal mt-5">
                                Address
                            </div>
                            <div className="text-slate-700 text-lg text-center lg:text-left w-full  font-semibold leading-8 tracking-normal ">
                                {userData.address || "NA"}
                                {/* <input type="text" value={userData.phone} onChange={(e) => setUserData({...userData,phone:e.target.value})} /> */}
                            </div>
                        </div>
                    </div>
                    {/* Button Box */}
                </div>

            </div>
            <hr className='mt-10' />
           
            <div className='w-full'>
                <PetList user_id={userData.id} />
            </div>
           
        </>
    )
}

export default UserPofile