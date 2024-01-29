import React from "react";
import ClinicSelect from "./ClinicSelect";

const SelectClinicPage = () => {
  return (
    <div className="w-full">
      <h2 className="text-primary font-medium text-5xl mb-1">Select Clinic</h2>
      <p className="text-primary mb-6">Book an appointment at our clinic</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        <ClinicSelect hideVisitButton selected />
        <ClinicSelect hideVisitButton />
        <ClinicSelect hideVisitButton />
        <ClinicSelect hideVisitButton />
        <ClinicSelect hideVisitButton />
        <ClinicSelect hideVisitButton />
        <ClinicSelect hideVisitButton />
        <ClinicSelect hideVisitButton />
      </div>
    </div>
  );
};

export default SelectClinicPage;
