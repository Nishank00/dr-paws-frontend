import React, { useState } from "react";
import SelectServicePage from "./SelectServicePage";
import Button from "@/components/ui/Button";
import SelectClinicPage from "./SelectClinicPage";
import SelectDoctorAndDateTimePage from "./SelectDoctorAndDateTimePage";

const Form = () => {
  const totalPages = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    page1: { field1: "" },
    page2: { field2: "" },
    page3: { field3: "" },
  });

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

  const renderPage = (page) => {
    switch (page) {
      case 1:
        return <SelectServicePage />;
      case 2:
        return <SelectClinicPage />;
      case 3:
        return <SelectDoctorAndDateTimePage />;
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="pt-4">
        <Button
          label="Back"
          onClick={handleBack}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        />
      </div>
      <div className="mt-4">
        {renderPage(currentPage)}
        <div className="mt-4">
          {currentPage < totalPages && (
            <Button
              label="Next"
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
