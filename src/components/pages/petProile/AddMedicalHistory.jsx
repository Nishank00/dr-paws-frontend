"use client";

import React, { useState, useEffect } from "react";
import Popup from "@/components/ui/Popup";
import PetService from "@/services/Pet.Service";
import UploadService from "@/services/Upload.service";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useToast } from "@/components/ui/ToastProvider";

import { IoChevronBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const AddMedicalHistory = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const showToast = useToast();
  const [documentlist, setDocumenetList] = useState([]);
  // const router = useRouter();
  // const { id } = router.query
  const router = useRouter();
  const { id } = useParams();
  const fileInputRef = React.useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const { selectedPetInfo } = useSelector((state) => state.userSession);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const [doc, setDoc] = useState({
    doc_type: null,
  });
  const handleGoBack = () => {
    router.back();
  };
  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };
  const getDoccumnetTypes = () => {
    PetService.getDocumentType()
      .then((r) => {
        if (r.data.status) {
          setDocumenetList(r.data.data);
          showToast(r.data.message, "success");
        } else {
          showToast(r.data.message, "error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUploadFiles = ({ e, doc_id, doc_name }) => {
    console.log("work");
    const files = e.target.files;
    const formData = new FormData();
    // files.forEach(file => {
    //     formData.append('files', file); // Append each selected file to the FormData object
    // });
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]); // Append each selected file to the FormData object
    }
    console.log("upload service start");
    UploadService.uploadFile(formData)
      .then((r) => {
        if (r.data.status) {
          // setUrlList(r.data.data)
          // setUserData({ ...user, profile_image: r.data.data })
          const existingDocIndex = uploadedFiles.findIndex(
            (obj) => obj.doc_type === doc_id
          );
          if (existingDocIndex !== -1) {
            let tempData = [...uploadedFiles];
            r.data.data.forEach((url, index, array) => {
              tempData[existingDocIndex].doc_list.push({
                pet_id: id,
                url,
                doc_type: doc_id,
                doc_name,
              });
            });
            setUploadedFiles(tempData);
          } else {
            // If there's no existing object, create a new one with doc_name, doc_id, and doc_list
            const newDoc = {
              doc_type: doc_id,
              doc_name,
              doc_list: [], // Start with the first data in the list
            };
            r.data.data.forEach((url, index) => {
              newDoc.doc_list.push({
                url,
                doc_type: doc_id,
                pet_id: id,
                doc_name,
              });
            });
            let tempData = [...uploadedFiles, newDoc];
            setUploadedFiles(tempData);
          }
          console.log("uploadedfiles=>", uploadedFiles);
        } else {
          console.log(r.data.message);
        }
      })
      .catch((err) => {
        uploading.value = false;
        console.log("err in upload=>", err);
      });
    console.log("srvcie stop");
  };

  const selectDocType = (e) => {
    setDoc({ ...doc, doc_type: e.target.value });
  };
  const handleSubmit = () => {
    console.log(uploadedFiles);
    let payload = [];
    uploadedFiles.forEach((ele) => {
      payload = [...payload, ...ele.doc_list];
    });

    PetService.saveMultiPetDocumnets(payload)
      .then((r) => {
        if (r.data.status) {
          setUploadedFiles([]);
          showToast(r.data.message, "success");
        } else {
          showToast(r.data.message, "error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemoveFile = (docIndex, fileIndex) => {
    setUploadedFiles((prevUploadedFiles) => {
      const updatedUploadedFiles = prevUploadedFiles.map((doc) => ({
        ...doc,
        doc_list: [...doc.doc_list],
      }));

      if (docIndex >= 0 && docIndex < updatedUploadedFiles.length) {
        if (
          fileIndex >= 0 &&
          fileIndex < updatedUploadedFiles[docIndex].doc_list.length
        ) {
          updatedUploadedFiles[docIndex].doc_list.splice(fileIndex, 1);
        } else {
          console.error("Invalid fileIndex:", fileIndex);
        }
      } else {
        console.error("Invalid docIndex:", docIndex);
      }

      return updatedUploadedFiles;
    });
  };
  useEffect(() => {
    getDoccumnetTypes();
    console.log("pet_id=>", id, selectedPetInfo);
  }, []);
  return (
    <div className="w-full">
      <div className="w-full flex mt-10" onClick={handleGoBack}>
        <IoChevronBackOutline className="text-2xl" color="#33495F" />
        <button className="text-primary font-custom-open-sans text-sm ml-1">
          Back
        </button>
      </div>
      <div className="w-full p-10">
        <div className="w-full flex justify-center m-auto">
          <h1 className="font-custom-roca text-secondary text-4xl">
            {`${selectedPetInfo?.name}'s` || "Buddy’s"} Medical History
          </h1>
        </div>
        <div className="w-full mt-4">
          {documentlist &&
            documentlist.map((doc, index) => (
              <div className="flex flex-col border-b-2 py-5" key={index}>
                <div className="w-full flex justify-between items-center py-2">
                  <div className="w-full  text-primary font-custom-roca text-md">
                    <div className="text-primary font-custom-roca text-md">
                      {doc.name}
                    </div>
                  </div>
                  <div
                    style={{ display: "inline-block", position: "relative" }}
                  >
                    <button
                      className="justify-center items-center text-secondary font-bold text-md 
                                w-[166px] h-[50px] border-[color:var(--Secondary-1,#5281A2)] flex 
                                rounded-[40px] border-2 border-solid"
                      onClick={handleButtonClick}
                    >
                      Upload
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={(e) =>
                        handleUploadFiles({
                          e,
                          doc_id: doc.id,
                          doc_name: doc.name,
                        })
                      }
                      style={{
                        zIndex: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        opacity: 0,
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
                <div className="flex w-full p-8">
                  {uploadedFiles &&
                    uploadedFiles
                      .filter(
                        (uploadedDoc) => uploadedDoc.doc_name === doc.name
                      )
                      .map((doc, docIndex) => (
                        <div
                          key={docIndex}
                          className="flex mx-auto flex-wrap justify-start w-full gap-2"
                        >
                          {doc.doc_list &&
                            doc.doc_list.map((file, fileIndex) => (
                              // <div key={fileIndex} className="truncate mt-1 text-primary w-1/4">
                              //   {file.url}
                              // </div>
                              <div
                                key={fileIndex}
                                className="flex gap-0 w-1/5 flex-col"
                              >
                                <div
                                  className="bg-primary3 p-4 h-[86px] flex justify-end text-[#5281A2]"
                                  onClick={() =>
                                    handleRemoveFile(docIndex, fileIndex)
                                  }
                                >
                                  X
                                </div>
                                <div className="bg-primary3/30 p-4 truncate text-[#5281A2]">
                                  {file.url}
                                </div>
                              </div>
                            ))}
                        </div>
                      ))}
                </div>
              </div>
            ))}
        </div>
        <div className="w-full flex justify-center items-center m-auto mt-10">
          <div>
            <button
              onClick={handleSubmit}
              className="w-[210px] h-[50px] rounded-full bg-secondary text-white font-bold font-custom-open-sans text-md"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMedicalHistory;
