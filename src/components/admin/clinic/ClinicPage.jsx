import ClinicService from "@/services/Clinic.service";
import { useState, useEffect } from "react";
import ClinicList from "./ClinicList";

const ClinicPage = () => {
  const [clinics, setClinics] = useState([]);

  const getClinics = () => {
    ClinicService.getData()
      .then((response) => {
        if (response.data.status) {
          setClinics(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getClinics();
  }, []);

  return (
    <div>
      <ClinicList clinics={clinics} />
    </div>
  );
};

export default ClinicPage;
