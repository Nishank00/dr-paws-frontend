import { useState, useEffect } from "react";
import DoctorForm from "./DoctorForm";
import UserService from "@/services/User.Service";
import Button from "@/components/ui/Button";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  const getDoctors = () => {
    UserService.getDoctors()
      .then((response) => {
        if (response.data.status) {
          setDoctors(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <div className="bg-primary3 p-2 text-center rounded-md shadow-md">
      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map((doctor, i) => (
            <tr key={"doctor" + i}>
              <td>{doctor.id}</td>
              <td>{doctor.full_name}</td>
              <td>{doctor.email}</td>
              <td>
                <Button label="Edit" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
