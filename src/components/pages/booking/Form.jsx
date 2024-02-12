import React, { useEffect, useState } from "react";
import SelectServicePage from "./SelectServicePage";
import Button from "@/components/ui/Button";
import SelectClinicPage from "./SelectClinicPage";
import SelectDoctorAndDateTimePage from "./SelectDoctorAndDateTimePage";
import MasterService from "@/services/Master.service";
import ClinicService from "@/services/Clinic.service";

const Form = () => {
  const totalPages = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    page1: { field1: "" },
    page2: { field2: "" },
    page3: { field3: "" },
  });

  const [services, setServices] = useState([]);
  const [clinics, setClinics] = useState([]);

  const getClinics = () => {
    ClinicService.getClinics()
      .then((response) => {
        if (response.data.status)
          setClinics(
            response.data.data.map((clinic) => ({ ...clinic, selected: false }))
          );
      })
      .catch((err) => console.log(err));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleChange = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [`page${currentPage}`]: {
        ...prevFormData[`page${currentPage}`],
        [fieldName]: value,
      },
    }));
  };

  const getServices = () => {
    MasterService.getMastersWithChildsByCode({ code: "SERVICE" })
      .then((res) => {
        if (res.data.status) {
          setServices(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderPage = () => {
    return (
      <>
        <SelectServicePage
          services={services}
          setServices={setServices}
          className={"w-full " + (currentPage == 1 ? "block" : "hidden")}
        />
        <SelectClinicPage
          clinics={clinics}
          setClinics={setClinics}
          setDoctors={setDoctors}
          className={"w-full " + (currentPage == 2 ? "block" : "hidden")}
        />
        <SelectDoctorAndDateTimePage
          className={"w-full " + (currentPage == 3 ? "block" : "hidden")}
          doctors={doctors}
          setDoctors={setDoctors}
        />
      </>
    );
  };

  useEffect(() => {
    getServices();
    getClinics();
  }, []);

  return (
    <div className="text-primary">
      <div className="pt-4">
        <button
          disabled={currentPage === 1}
          type="button"
          onClick={handleBack}
          className={"flex items-center"}
        >
          <span className="text-2xl mr-1">{"<"}</span>
          <span className="text-xl">{"Back"}</span>
        </button>
      </div>
      <div className="mt-4">{renderPage()}</div>
      <div className="my-4 text-center">
        {currentPage < totalPages && (
          <Button
            type="secondary"
            label="Next"
            onClick={handleNext}
            className="px-4 py-2 rounded-full w-40"
          />
        )}
      </div>
    </div>
  );
};

export default Form;
