"use client"

import React, { useState, useEffect } from 'react'
import Popup from '@/components/ui/Popup';
import PetService from '@/services/Pet.Service';
import UploadService from '@/services/Upload.service';
import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation'
import Image from 'next/image';
import { useToast } from "@/components/ui/ToastProvider";

import { IoChevronBackOutline } from "react-icons/io5";

const AddMedicalHistory = () => {
    const [docTypes, setDocTypes] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [urlList, setUrlList] = useState([]);
    const showToast = useToast();
    const [documentlist, setDocumenetList] = useState([]);
    // const router = useRouter();
    // const { id } = router.query
    const router = useRouter();
    const { id } = useParams();
  const fileInputRef = React.useRef(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const [doc, setDoc] = useState({
        doc_type: null
    })
    const handleGoBack = () => {
        router.back();
    }
    const handleFileChange = (e) => {
        setSelectedFiles(Array.from(e.target.files))
    }
    const getDoccumnetTypes = () => {
        PetService.getDocumentType().then((r) => {
            if (r.data.status) {
                setDocumenetList(r.data.data)
                showToast(r.data.message, "success");
            }
            else {
                showToast(r.data.message, "error");
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleUploadFiles = ({ e, doc_id ,doc_name}) => {
        console.log("work")
        const files = e.target.files;
        const formData = new FormData();
        // files.forEach(file => {
        //     formData.append('files', file); // Append each selected file to the FormData object
        // });
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]); // Append each selected file to the FormData object
        }
        console.log("upload service start")
        UploadService.uploadFile(formData)
            .then((r) => {
                if (r.data.status) {
                    // setUrlList(r.data.data)
                    // setUserData({ ...user, profile_image: r.data.data })
                    const existingDocIndex = uploadedFiles.findIndex(obj => obj.doc_type === doc_id);
                    if (existingDocIndex !== -1) {
                        let tempData = [...uploadedFiles];
                        r.data.data.forEach((url, index, array) => {
                            tempData[existingDocIndex].doc_list.push({ pet_id:id, url, doc_type: doc_id ,doc_name});
                        })
                        setUploadedFiles(tempData)
                    } else {
                        // If there's no existing object, create a new one with doc_name, doc_id, and doc_list
                        const newDoc = {
                            doc_type: doc_id,
                            doc_name,
                            doc_list: [] // Start with the first data in the list
                        };
                        r.data.data.forEach((url, index) => {
                            newDoc.doc_list.push({ url, doc_type: doc_id, pet_id:id ,doc_name})
                        })
                        let tempData = [...uploadedFiles, newDoc];
                        setUploadedFiles(tempData)

                    }
                    console.log("uploadedfiles=>", uploadedFiles)
                }
                else {
                    console.log(r.data.message)
                }
            })
            .catch((err) => {
                uploading.value = false;
                console.log("err in upload=>", err);
            });
        console.log("srvcie stop")
    }

    const selectDocType = (e) => {
        setDoc({ ...doc, doc_type: e.target.value })
    }
    const handleSubmit = () => {
        console.log(uploadedFiles)
        let payload = [];
        uploadedFiles.forEach(ele => {
            payload = [...payload, ...ele.doc_list]
        })

        PetService.saveMultiPetDocumnets(payload).then((r) => {
            if (r.data.status) {
                setUploadedFiles([]);
                showToast(r.data.message, "success");

            }
            else {
                showToast(r.data.message, "error");
            }
        })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getDoccumnetTypes()
        console.log("pet_id=>",id)
    }, [])
    return (
        <div className='w-full'>
            <div className='w-full flex mt-10' onClick={handleGoBack}>
                <IoChevronBackOutline className="text-2xl" color="#33495F" />
                <button className="text-primary font-custom-open-sans text-sm ml-1">
                    Back
                </button>
            </div>
            <div className='w-full p-10'>
                <div className='w-full flex justify-center m-auto'>
                    <h1 className='font-custom-roca text-secondary text-4xl'>Buddy’s Medical History</h1>
                </div>
                <div className='w-full mt-4'>
                    {
                        documentlist && documentlist.map((doc, index) => (
                            <div key={index} className='w-full flex justify-between items-center border-b-2 py-5'>
                                <div className='w-full  text-primary font-custom-roca text-md'>
                                    <div class='text-primary font-custom-roca text-md'>
                                        Past {doc.name}
                                    </div>
                                  
                                </div>
                                <div style={{ display: 'inline-block', position: 'relative' }}>
                                    <button
                                        className="justify-center items-center text-secondary font-bold text-md 
                                w-[166px] h-[50px] border-[color:var(--Secondary-1,#5281A2)] flex 
                                rounded-[40px] border-2 border-solid"
                                        onClick={handleButtonClick}>Upload</button>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={(e) => handleUploadFiles({ e, doc_id: doc.id,doc_name:doc.name })}
                                        style={{ position: 'absolute', top: 0, left: 0, opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div class=" mt-4 grid  grid-cols-4  gap-5  w-full  justify-between text-wrap">
                    {
                        uploadedFiles && uploadedFiles.map((doc, docIndex) => (
                            <div key={docIndex} className="text-wrap bg-primary3 rounded-md p-4">
                                <h3 className="break-words flex font-bold">
                                    <span class="mr-2">
                                        <Image src={"/home/vaccine_icon.svg"} width={23} height={23} alt="err"/>
                                    </span>{doc.doc_name}
                                    </h3>
                                { <ul>
                                    {doc.doc_list && doc.doc_list.map((file, fileIndex) => (
                                        <li key={fileIndex} class="truncate mt-1 ">{file.url}</li>
                                    ))}
                                </ul> }
                            </div>
                        ))
                    }
                </div>
                <div className='w-full md:w-[40%] flex justify-between items-center m-auto mt-10'>
                    <div onClick={()=>router.push(`/pets/${id}`)} className=' cursor-pointer text-sm font-custom-open-sans text-primary font-bold'>
                        i will do it latter
                    </div>
                    <div>
                        <button onClick={handleSubmit} className='w-[210px] h-[50px] rounded-full bg-secondary text-white font-bold font-custom-open-sans text-md'>Save</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddMedicalHistory