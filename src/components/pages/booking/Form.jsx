import React, { useEffect, useState } from "react";
import SelectServicePage from "./SelectServicePage";
import Button from "@/components/ui/Button";
import SelectClinicPage from "./SelectClinicPage";
import SelectDoctorAndDateTimePage from "./SelectDoctorAndDateTimePage";
import MasterService from "@/services/Master.service";
import ClinicService from "@/services/Clinic.service";
import moment from "moment";
import PetService from "@/services/Pet.Service";
import BookingService from "@/services/Booking.service";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/ToastProvider";
import { useLoader } from "@/components/ui/LoaderContext";

const Form = () => {
  // Variables
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const showToast = useToast();
  const router = useRouter();
  const { startLoading, stopLoading } = useLoader();
  const totalPages = 3;
  const [currentPage, setCurrentPage] = useState(id ? 3 : 1);
  const [doctors, setDoctors] = useState([]);
  const [user_id, setUserID] = useState(null);
  const [services, setServices] = useState([]);
  const [pets, setPets] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [selectedClinic, setSelectedClinic] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [appointment, setAppointment] = useState(null);

  // Methods
  const getPets = () => {
    PetService.getPetsByUserId(user_id)
      .then((response) => {
        if (response.data.status) setPets(response.data.data);
      })
      .catch((error) => console.log(error.message));
  };

  const getClinics = () => {
    ClinicService.getClinics()
      .then((response) => {
        if (response.data.status) {
          setClinics(
            response.data.data.map((clinic) => ({ ...clinic, selected: false }))
          );
        }
      })
      .catch((error) => console.error("Error:", error.message));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const getServices = () => {
    MasterService.getMastersWithChildsByCode({ code: "SERVICE" })
      .then((response) => {
        if (response.data.status) {
          setServices(
            response.data.data.map((item) => ({
              ...item,
              is_checked: false,
              pets: pets.map((pet) => ({ ...pet, isSelected: false })),
            }))
          );
        }
      })
      .catch((error) => console.log(error.message));
  };

  const onConfirmBooking = () => {
    startLoading();
    const selectedStartTime = selectedSlot.sqlStartTime;
    const endTime = selectedSlot.sqlEndTime;

    const appointment = {
      clinic_id: null,
      doctor_id: null,
      user_id,
      date: moment(selectedDate).format("YYYY-MM-DD"),
      start_time: selectedStartTime,
      end_time: endTime,
    };
    if (id) appointment.id = id;

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

    if (!appointment.clinic_id || !appointment.doctor_id) {
      return showToast("Please select Clinic and Doctor", "warning");
    }

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

    BookingService.bookAppointment(payload)
      .then((response) => {
        stopLoading();
        if (!response.data.status)
          return showToast(response.data.message, "warning");

        showToast(response.data.message, "success");
        getPets();
        const appointment_id = response.data.data.appointment_id;
        router.push(`/booking/${appointment_id}`);
        return;
      })
      .catch((error) => {
        stopLoading();
        console.log(error.message);
      });
  };

  const getAppointment = () => {
    BookingService.getAppointment(id)
      .then((response) => {
        if (!response.data.status)
          return showToast(response.data.message, "warning");

        console.log("response.data.data => ", response.data.data[0]);
        setAppointment(response.data.data[0]);
      })
      .catch((error) => {
        showToast(error.message, "error");
      });
  };

  const prepareForm = () => {
    console.log("runnig prepare form");
    if (!appointment) return showToast("Appointment not found", "warning");
    if (!services || services.length == 0)
      return showToast("Services not found", "warning");

    // setSelectedDate(new Date(appointment.date));
    // setSelectedSlot({ formattedTime: appointment.start_time, selected: true });
    setServices(
      services.map((service) => {
        appointment.appointment_items.map((appointment_item) => {
          if (service.id == appointment_item.service_id) {
            service.is_checked = true;
            service.pets = service.pets.map((pet) => {
              if (pet.id == appointment_item.pet_id) {
                pet.isSelected = true;
              }
              return pet;
            });
          }
        });
        return service;
      })
    );

    setClinics(
      clinics.map((clinic) => {
        if (clinic.id == appointment.clinic_id) {
          clinic.selected = true;
          setSelectedClinic(clinic);
          clinic.clinic_doctors.forEach((clinic_doctor) => {
            clinic_doctor.selected = false;
            if (clinic_doctor.id == appointment.doctor_id) {
              clinic_doctor.selected = true;
            }
          });
          setDoctors(clinic.clinic_doctors);
        }
        return clinic;
      })
    );
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

  // Lifecycle hooks
  useEffect(() => {
    getClinics();
    setUserID(JSON.parse(localStorage.getItem("user_info")).id);
  }, []);

  useEffect(() => {
    getPets();
  }, [user_id]);

  useEffect(() => {
    if (pets.length > 0) getServices();
  }, [pets]);

  useEffect(() => {
    console.log("services =>", services);
    if (id && !appointment && services && services.length > 0) getAppointment();
  }, [services]);

  useEffect(() => {
    if (appointment && services) {
      prepareForm();
    }
  }, [appointment]);

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
          <span className="text-xl ml-2 font-open-sans">{"Back"}</span>
        </button>
      </div>
      <div className="mt-4 min-h-[60vh]">{renderPage()}</div>
      <div className="my-4 flex items-center justify-center">
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
