import React, { useEffect, useState } from "react";
import SelectServicePage from "./SelectServicePage";
import Button from "@/components/ui/Button";
import SelectClinicPage from "./SelectClinicPage";
import SelectDoctorAndDateTimePage from "./SelectDoctorAndDateTimePage";
import MasterService from "@/services/Master.service";
import ClinicService from "@/services/Clinic.service";
import moment from "moment";
import PetService from "@/services/Pet.Service";

const Form = () => {
  const user_id = JSON.parse(localStorage.getItem("user_info")).id;
  const totalPages = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    page1: { field1: "" },
    page2: { field2: "" },
    page3: { field3: "" },
  });

  const [services, setServices] = useState([]);
  const [pets, setPets] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [selectedClinic, setSelectedClinic] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const getPets = async () => {
    try {
      const response = await PetService.getPetsByUserId(user_id);
      if (response.data.status) setPets(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getClinics = async () => {
    try {
      const response = await ClinicService.getClinics();
      if (response.data.status) {
        setClinics(
          response.data.data.map((clinic) => ({ ...clinic, selected: false }))
        );
      }
    } catch (error) {
      console.log(error);
    }
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

  const getServices = async () => {
    try {
      const response = await MasterService.getMastersWithChildsByCode({
        code: "SERVICE",
      });
      if (response.data.status) {
        setServices(
          response.data.data.map((item) => ({
            ...item,
            pets: pets.map((pet) => ({ ...pet, isSelected: false })),
          }))
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onConfirmBooking = () => {
    const selectedStartTime = moment(
      selectedSlot.formattedTime,
      "hh:mm:ss"
    ).format("hh:mm:ss");
    const endTime = moment(selectedSlot.formattedTime, "hh:mm:ss")
      .add(1, "hour")
      .format("hh:mm:ss");

    const appointment = {
      clinic_id: null,
      doctor_id: null,
      date: moment(selectedDate).format("YYYY-MM-DD"),
      start_time: selectedStartTime,
      end_time: endTime,
    };

    clinics.map((clinic) => {
      if (clinic.selected) {
        appointment.clinic_id = clinic.id;
      }
    });

    doctors.map((doctor) => {
      if (doctor.selected) {
        appointment.doctor_id = doctor.id;
      }
    });

    const appointment_items = [];

    services.forEach((service) => {
      if (service.is_checked) {
        service.pets.map((pet) => {
          if (pet.isSelected) {
            appointment_items.push({
              service_id: service.id,
              pet_id: pet.id,
            });
          }
        });
      }
    });

    const payload = { appointment, appointment_items };

    console.log("payload => ", payload);
    console.log("confirm booking clicked...");
  };

  const renderPage = () => {
    return (
      <>
        <SelectServicePage
          services={services}
          setServices={setServices}
          className={
            "w-full transition-all ease-out delay-1000 " +
            (currentPage == 1 ? "block" : "hidden")
          }
        />
        <SelectClinicPage
          clinics={clinics}
          setClinics={setClinics}
          setSelectedClinic={setSelectedClinic}
          setDoctors={setDoctors}
          className={
            "w-full transition-all ease-out delay-1000 " +
            (currentPage == 2 ? "block" : "hidden")
          }
        />
        <SelectDoctorAndDateTimePage
          className={
            "w-full transition-all ease-out delay-1000 " +
            (currentPage == 3 ? "block" : "hidden")
          }
          doctors={doctors}
          setDoctors={setDoctors}
          selectedClinic={selectedClinic}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setSelectedSlot={setSelectedSlot}
          onConfirmBooking={onConfirmBooking}
        />
      </>
    );
  };

  useEffect(() => {
    async function getEffects() {
      await getPets();
      await getClinics();
    }
    getEffects();
  }, []);

  useEffect(() => {
    getServices();
  }, [pets]);

  return (
    <div className="text-primary">
      <div className="pt-4">
        <button
          disabled={currentPage === 1}
          type="button"
          onClick={handleBack}
          className={"flex items-center"}
        >
          <span className="text-2xl mr-1">
            <svg
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.06077 8.99999L10.0608 1.99999L9.00011 0.939331L0.939453 8.99999L9.00011 17.0607L10.0608 16L3.06077 8.99999Z"
                fill="#33495F"
              />
            </svg>
          </span>
          <span className="text-xl ml-2">{"Back"}</span>
        </button>
      </div>
      <div className="mt-4 min-h-[100vh]">{renderPage()}</div>
      <div className="my-4 text-center">
        {currentPage < totalPages && (
          <Button
            color="secondary"
            label="Next"
            onClick={handleNext}
            className="px-4 py-2 rounded-full w-52 h-12 text-lg"
          />
        )}
      </div>
    </div>
  );
};

export default Form;
