import PetService from "@/services/Pet.Service";
import React, { useEffect, useState } from "react";
import DocCard from "./DocCard";
require('dotenv').config()

const PetDocumentList = ({ name, pet_id, id }) => {
    const [docList, setDocList] = useState([]);


    const getPetDocument = () => {
        PetService.getPetDocuments({ pet_id, doc_type: id }).then((r) => {
            if (r.data.status) {
                setDocList(r.data.data)
            }
            else {
                alert(r.data.message)
            }
        })
            .catch((err) => {
                console.log(err);
            })

    }
    useEffect(() => {
        if (pet_id && id) {
            getPetDocument()
        }

    }, [id, pet_id])

    return (
        <>
            <div className="w-full grid">
                <div className="text-primary text-lg text-center md:text-left font-custom-open-sans font-bold leading-6 tracking-normal mt-10 max-md:max-w-full">
                    {name}
                </div>
                <div className="w-full mt-4 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5">
                    {
                        docList && docList.map((doc, index) => (
                            <DocCard key={"doclist" + index} {...doc} baseurl={`${process.env.NEXT_PUBLIC_API_UPLOAD_URL}/${doc.url}`} />
                        ))
                    }
                  
                </div>
                {
                    docList.length==0 && <div class="w-full text-center text-primary text-lg">No Records</div>

                }
            </div>
        </>
    )

}

export default PetDocumentList;