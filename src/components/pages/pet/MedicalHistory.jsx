import Button from "@/components/ui/Button";
import React, { useEffect, useState } from "react";
import DocumentCard from "./DocumentCard";
import PetService from "@/services/Pet.Service";
import { useRouter } from "next/navigation";

const MedicalHistory = ({ pet_id, petData }) => {
  const router = useRouter();
  const [medicalDocuments, setMedicalDocuments] = useState([]);
  const [documentUploaded, setDocumentUploaded] = useState(false);

  const getMedicalDocuments = () => {
    PetService.getPetAllDocuments(petData.id)
      .then((response) => {
        if (!response.data.status) return;
        setMedicalDocuments(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (petData.id) getMedicalDocuments();
  }, [petData.id]);

  useEffect(() => {
    const tst = { doc_types: 0, empty_docs: 0 };
    medicalDocuments.forEach((document) => {
      tst.doc_types++;
      if (document.documents.length === 0) {
        tst.empty_docs++;
      }
    });

    setDocumentUploaded(tst.doc_types !== tst.empty_docs);
  }, [medicalDocuments]);
  return (
    <>
      <div className="flex flex-col gap-4 sm:gap-8 sm:p-8 mt-5">
        <div className="flex flex-col sm:flex-row justify-between gap-4 px-4 py-1">
          <div className="flex items-center gap-4">
            <div
              id="icon"
              className="w-10 h-10 rounded-full"
              style={{
                backgroundImage: `url(${
                  petData.pet_image
                    ? process.env.NEXT_PUBLIC_API_UPLOAD_URL +
                      "/" +
                      petData.pet_image
                    : petData?.pet_type_name == "Dog"
                    ? "/home/dog.png"
                    : "/home/cat_cartoon.png"
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <h3 className="text-primary text-lg sm:text-2xl font-custom-roca">
              {petData.name}&apos;s Medical History
            </h3>
          </div>

          <Button
            label="Update Medical History"
            className="bg-primary4 hover:bg-accent border-2 border-accent px-4 py-2 text-accent hover:text-primary4 h-10 w-full sm:w-auto"
            onClick={() => router.push(`/pets/${pet_id}/new_medical_history`)}
          />
        </div>

        {!documentUploaded && (
          <p className="text-2xl text-secondary text-center font-custom-roca my-20">
            You haven&apos;t added medical history
          </p>
        )}

        {documentUploaded &&
          medicalDocuments &&
          medicalDocuments.length > 0 &&
          medicalDocuments.map((documentType, i) => (
            <div
              key={"documentType" + i}
              className="flex flex-col gap-5 w-full text-primary font-custom-open-sans"
            >
              <h2 className="text-[16px] md:text-lg font-bold font-custom-roca">
                {documentType.document_type_name}
              </h2>

              <div className="flex flex-nowrap gap-4">
                {documentType.documents && documentType.documents.length > 0 ? (
                  documentType.documents.map((document, i) => (
                    <div
                      key={documentType.document_type_name + "document" + i}
                      className="shrink-0 w-44"
                    >
                      <DocumentCard document={document} className="shrink-0" />
                    </div>
                  ))
                ) : (
                  <p className="text-lg text-center">No documents available</p>
                )}
              </div>
              <hr className="mt-5" />
            </div>
          ))}
      </div>
    </>
  );
};

export default MedicalHistory;
