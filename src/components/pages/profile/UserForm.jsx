"use client"
import React, { useEffect, useState } from 'react'
import UploadService from '@/services/Upload.service';
import UserService from '@/services/User.Service';

const UserForm = ({ closePopup, user_id }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [token, setToken] = useState("");
    const [userData, setUserData] = useState({
        full_name: "",
        email: "",
        phone: "",
        user_type: "",
        profile_image: "",
        address: "",
    })


    // const handleFileChange = ( event ) =>
    // {
    //     console.log( "token", token )
    //     console.log( "file changed" )
    //     setSelectedFile( event.target.files[ 0 ] );
    //     handleUpload()
    // };

    const handleFileChange = async (e) => {
        try {
            console.log("start")
            const formData = new FormData();
            formData.append("files", e.target.files[0]);
            UploadService.uploadFile(formData)
                .then((r) => {
                    if (r.data.status) {
                        setUserData({ ...user, profile_image: r.data.data[0] })
                    }
                    else {
                        console.log(r.data.message)
                    }
                })
                .catch((err) => {
                    uploading.value = false;
                    console.log("err in upload=>", err);
                });

            alert('Upload successful')
        } catch (error) {
            console.error('Error uploading file', error);
        }
    };

    const handleSubmit = () => {
        let payload = { ...userData };
        payload.id = user_id
        UserService.updateUser(payload).then((r) => {
            if (r.data.status) {
                closePopup();
                setUserData(
                    {
                        full_name: "",
                        email: "",
                        phone: "",
                        user_type: "",
                        profile_image: "",
                        address: "",
                    }
                )
            }
            else {
                console.log(r.data.message)
                alert(r.data.message)
            }
        })
            .catch((err) => {
                console.log(err);
            })
    }

    const onCancel = () => {
        console.log("work")
        closePopup();
        setUserData({
            full_name: "",
            email: "",
            phone: "",
            user_type: "",
            profile_image: "",
            address: "",
        })
    }
    const getUserDataById = (id) => {
        UserService.getUserById(id).then((r) => {
            if (r.data.status) {
                setUserData(r.data.data)
            }
        })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getUserDataById(user_id)

    }, [user_id, userData.profile_image])


    return (
        <div className='w-full m-auto h-[530px] overflow-scroll'>

            <div className="relative w-fit m-auto">
                <label htmlFor="file-input" className="cursor-pointer block">
                    <div className="w-48 h-36  flex items-center justify-center">

                        <img
                            loading="lazy"
                            srcSet={userData.profile_image || "dummyProfilePic.jpg"}
                            className="aspect-square relative object-contain object-center w-full max-w-[125px] rounded-full"
                        />
                        <div className="w-6 h-6 rounded-full bg-secondary absolute right-10 bottom-5"></div>

                    </div>
                </label>
                <input
                    type="file"
                    id="file-input"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e)}
                />
            </div>
            <div className='flex flex-col w-[80%] m-auto'>
                <label className='text-sm font-custom-open-sans'>Name</label>
                <input
                    // className="text-slate-700  text-base leading-5 mt-2  whitespace-nowrap self-stretch border border-[color:var(--Accent,#74A7B3)] bg-white  justify-center py-1 rounded-md border-solid items-start" type="text"
                    className="input font-custom-open-sansrounded-lg px-4 py-2 border-2  text-md rounded-lg text-primary"



                    placeholder=''
                    value={userData.full_name}
                    onChange={(e) => setUserData({ ...userData, full_name: e.target.value })}
                />
            </div>
            <div className='flex flex-col w-[80%] m-auto mt-3'>
                <label className='text-sm font-custom-open-sans'>Contact No</label>
                <div className='flex justify-between mt-2 '>
                    <input
                        // className="text-slate-700 w-[15%] text-base leading-5 whitespace-nowrap self-stretch border border-[color:var(--Accent,#74A7B3)] bg-white  justify-center py-1 rounded-md border-solid items-start" type="text"
                        className=" w-[15%]  font-custom-open-sans input rounded-lg px-2 py-2 border-2  text-md text-primary"

                        placeholder=''
                        value="+91"
                        disabled={true}

                    />
                    <input
                        className="input w-[80%] font-custom-open-sans rounded-lg px-4 py-2 border-2  text-md text-primary"
                        placeholder=''
                        onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                        value={userData.phone}

                    />
                </div>
            </div>
            <div className='flex flex-col w-[80%] m-auto mt-3'>
                <label className='text-sm font-custom-open-sans'>Email</label>
                <input
                    className="input font-custom-open-sans rounded-lg px-4 py-2 border-2  text-md text-primary"
                    type="text"
                    placeholder=''
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    value={userData.email}
                />
            </div>
            <div className='flex flex-col w-[80%] m-auto mt-3'>
                <label className='text-sm font-custom-open-sans'>Address</label>
                <input
                    className="input font-custom-open-sans  rounded-lg px-4 py-2 border-2  text-md text-primary"
                    placeholder=''
                    onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                    value={userData.address}
                />
            </div>

            <div className='flex  justify-between  w-[80%] m-auto mt-3 h-[50px]'>
                          
                <button onClick={onCancel} className=' w-[150px] border-2 border-solid border-[color:var(--Secondary-1,#5281A2)]  rounded-full text-sm font-bold font-custom-open-sans text-primary hover:text-white hover:bg-secondary'>
                    Cancel           
                         </button>
                <button onClick={handleSubmit} className=' w-[150px] border-2 border-solid border-[color:var(--Secondary-1,#5281A2)]  rounded-full text-sm font-bold font-custom-open-sans text-primary hover:text-white hover:bg-secondary'>
                    Save
                </button>
            </div>


        </div>
    )
}

export default UserForm