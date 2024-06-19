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
import Popup from "@/components/ui/Popup";
import PetForm from "../petProile/PetForm";
import ConfirmBookingOTP from "./ConfirmBookingOTP";
import { useDispatch } from "react-redux";
import { setPageHeader } from "@/store/features/pageHeader/pageHeaderSlice";
import UserService from "@/services/User.Service";

const Form = () => {
  // Variables
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const reason_id = searchParams.get("reason");
  const showToast = useToast();
  const router = useRouter();
  const { startLoading, stopLoading } = useLoader();
  const totalPages = 3;
  const [currentPage, setCurrentPage] = useState(id ? 3 : 1);
  const [doctors, setDoctors] = useState([]);
  const [user_id, setUserID] = useState(null);
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [pets, setPets] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [selectedClinic, setSelectedClinic] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [appointment, setAppointment] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isOTPPopupOpen, setOTPPopupOpen] = useState(false);
  const [userHomeClinic, setUserHomeClinic] = useState(null);

  // Methods
  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  const openOTPPopup = () => {
    if (doctors.some((doctor) => doctor.selected === true)) {
      sendBookingOTP();
      setOTPPopupOpen(true);
    } else {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    }
  };
  const closeOTPPopup = () => setOTPPopupOpen(false);

  const getPets = () => {
    if (user_id) {
      PetService.getPetsByUserId(user_id)
        .then((response) => {
          if (!response.data.status)
            return showToast(response.data.message, "warning");
          console.log(response);
          setPets(response.data.data);
          setServices(
            services.map((item) => ({
              ...item,
              pets: response.data.data.map((pet) => ({
                ...pet,
                isSelected: false,
              })),
            }))
          );
        })
        .catch((error) => {
          return showToast(error.message, "error");
        });
    }
  };

  console.log("getted pets", pets);

  const fetchData = async () => {
    if (user_id && localStorage) {
      const isNew = localStorage.getItem("isNew");
      try {
        // Fetch pets
        const petResponse = await PetService.getPetsByUserId(user_id);
        if (!petResponse.data.status) {
          showToast(petResponse.data.message, "warning");
        } else {
          if (Boolean(!isNew)) {
            if (petResponse.data.data.length === 0) {
              await refetchPets();
            } else {
              console.log(petResponse.data.data);
              setPets(petResponse.data.data);
            }
          }
        }

        console.log("petResponse", petResponse);

        // Fetch services
        const serviceResponse = await MasterService.getMastersWithChildsByCode({
          code: "SERVICE",
        });
        console.log("service response", serviceResponse);
        if (serviceResponse.data.status) {
          setServices(
            serviceResponse.data.data.map((item) => ({
              ...item,
              is_checked: false,
              pets: petResponse.data.data.map((pet) => ({
                ...pet,
                isSelected: false,
              })),
            }))
          );
          console.log("first");
        }
      } catch (error) {
        showToast(error.message, "error");
      }
    }
  };

  console.log(services);

  const refetchPets = async () => {
    await fetchData();
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
    let canProceed = true;
    switch (currentPage) {
      case 1:
        if (
          services.length === 0 ||
          !services.some(
            (service) =>
              Array.isArray(service.pets) &&
              service.pets.some((pet) => pet.isSelected === true)
          )
        ) {
          showToast("Please select at least one service with a pet", "warning");
          canProceed = false;
        } else {
          setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
        }
        break;
      case 2:
        if (clinics.length === 0) {
          showToast("Please select at least one doctor", "warning");
          canProceed = false;
        } else {
          setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
        }
        break;
      case 3:
        if (!selectedDate || !selectedSlot) {
          showToast("Please select date and time", "warning");
          canProceed = false;
        } else {
          setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
        }
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    if (currentPage === 1) {
      router.push("/");
    }
    {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    }
  };

  // const getServices = () => {
  //   MasterService.getMastersWithChildsByCode({ code: "SERVICE" })
  //     .then((response) => {
  //       console.log("service response", response);
  //       if (response.data.status) {
  //         setServices(
  //           response.data.data.map((item) => ({
  //             ...item,
  //             is_checked: false,
  //             pets: pets.map((pet) => ({ ...pet, isSelected: false })),
  //           }))
  //         );
  //       }
  //     })
  //     .catch((error) => console.log(error.message));
  // };

  const otpConfirmed = (otp) => {
    verifyBookingOTP(otp);
  };

  const verifyBookingOTP = (otp) => {
    startLoading();
    BookingService.verifyBookingOTP({
      phone: JSON.parse(localStorage.getItem("user_info")).phone,
      otp,
    })
      .then((response) => {
        stopLoading();
        if (!response.data.status)
          return showToast(response.data.message, "warning");
        onConfirmBooking();
      })
      .catch((error) => {
        stopLoading();
        showToast(error.message, "error");
      });
  };

  const sendBookingOTP = () => {
    startLoading();
    BookingService.sendBookingOTP({
      phone: JSON.parse(localStorage.getItem("user_info")).phone,
    })
      .then((response) => {
        stopLoading();
        if (!response.data.status)
          return showToast(response.data.message, "warning");
        return showToast(response.data.message, "success");
      })
      .catch((error) => {
        stopLoading();
        return showToast(error.message, "error");
      });
  };

  const addServicesData = (serviceId, action) => {
    if (action == "remove") {
      setSelectedServices((prevValues) =>
        prevValues.filter((values) => values != serviceId)
      );
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };
  const onConfirmBooking = () => {
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
    if (reason_id) appointment.reason_id = reason_id;

    clinics.map((clinic) => {
      if (clinic.selected) {
        appointment.clinic_id = clinic.id;
      }
    });

    doctors.map((doctor) => {
      if (doctor.selected && doctor.id != "best-available-vet") {
        appointment.doctor_id = doctor.id;
      } else if (doctor.id == "best-available-vet" && doctor.selected) {
        //SELECT RANDOM DOCTOR FROM THE LIST
        const randomDoctor = doctors.filter(
          (doctor) => doctor.id != "best-available-vet"
        );
        const randomDoctorIndex = Math.floor(
          Math.random() * randomDoctor.length
        );
        appointment.doctor_id = randomDoctor[randomDoctorIndex].id;
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
    startLoading();
    BookingService.bookAppointment(payload)
      .then((response) => {
        stopLoading();
        if (!response.data.status)
          return showToast(response.data.message, "warning");

        showToast(response.data.message, "success");
        getPets();
        const appointment_id = response.data.data.appointment_id;

        return router.push(
          `/booking/${appointment_id}${reason_id ? "?rescheduled=true" : ""}`
        );
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

        setAppointment(response.data.data[0]);
      })
      .catch((error) => {
        showToast(error.message, "error");
      });
  };

  const prepareForm = () => {
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

          const bestAvailableDoctor = {
            doctor_name: "Best Available Vet",
            id: "best-available-vet",
            selected: false,
          };
          setDoctors([bestAvailableDoctor, ...clinic.clinic_doctors]);
        }
        return clinic;
      })
    );
  };

  useEffect(() => {
    const addBestAvailableDoctor = () => {
      const bestAvailableDoctor = {
        doctor_name: "Best Available Vet",
        id: "best-available-vet",
        selected: false,
      };

      if (!doctors.some((doctor) => doctor.id === "best-available-vet")) {
        setDoctors([bestAvailableDoctor, ...doctors]);
      }
    };

    addBestAvailableDoctor();
  }, []);

  console.log("doctors", doctors);

  const renderPage = () => {
    return (
      <>
        <SelectServicePage
          services={services}
          setServices={setServices}
          openPopup={openPopup}
          closePopup={closePopup}
          updateSelectedService={addServicesData}
          className={
            "w-full transition-all ease-out delay-1000 " +
            (currentPage == 1 ? "block" : "hidden")
          }
        />
        {currentPage == 2 && (
          <SelectClinicPage
            selectedServicesData={selectedServices}
            clinics={clinics}
            setClinics={setClinics}
            setSelectedClinic={setSelectedClinic}
            setDoctors={setDoctors}
            className={
              "w-full transition-all ease-out delay-1000 " +
              (currentPage == 2 ? "block" : "hidden")
            }
          />
        )}
        {currentPage == 3 && (
          <SelectDoctorAndDateTimePage
            isGroomingOnly={selectedServices.includes(105 || "105")}
            selectedServicesData={selectedServices}
            currentPage={currentPage}
            className={
              "w-full transition-all ease-out delay-1000 " +
              (currentPage == 3 ? "block" : "hidden")
            }
            doctors={
              selectedServices.length == 1 &&
              selectedServices.includes(105 || "105")
                ? doctors.filter((doctorData) => doctorData.doctor_id == 12)
                : selectedServices.length >= 1 &&
                  selectedServices.includes(105 || "105")
                ? doctors
                : doctors.filter((doctorData) => doctorData.doctor_id != 12)
              // selectedServices.includes(105 || "105") ? doctors.filter((doctorData) => doctorData.doctor_id == 12) : doctors.filter((doctorData) => doctorData.doctor_id != 12)
            }
            setDoctors={setDoctors}
            selectedClinic={selectedClinic}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setSelectedSlot={setSelectedSlot}
            onConfirmBooking={openOTPPopup}
          />
        )}
      </>
    );
  };

  // Lifecycle hooks
  useEffect(() => {
    getClinics();

    setUserID(JSON.parse(localStorage.getItem("user_info"))?.id);

    dispatch(
      setPageHeader({
        title: "Booking",
        currentMenu: "BOOKING",
        currentPath: "/booking",
      })
    );
  }, []);

  useEffect(() => {
    fetchData();
    getUserData();
  }, [user_id]);

  useEffect(() => {
    if (id && !appointment && services && services.length > 0) getAppointment();
  }, [services]);

  useEffect(() => {
    if (appointment && services) {
      prepareForm();
    }
  }, [appointment]);

  const getUserData = async () => {
    if (user_id) {
      const userdata = await UserService.getUserById(user_id);
      if (userdata?.data?.data?.clinic_name != null) {
        setUserHomeClinic(userdata?.data?.data?.clinic_name);
      }
    }
  };

  useEffect(() => {
    const sortClinicsByHomeClinicName = () => {
      console.log("SORTING CLINICS BY HOME CLINIC NAME");
      console.log("USER HOME CLINIC: ", userHomeClinic);
      console.log("CLINICS: ", clinics);

      if (clinics.length > 0 && userHomeClinic != null) {
        const homeClinicIndex = clinics.findIndex(
          (clinic) => clinic.name === userHomeClinic
        );
        if (homeClinicIndex > -1) {
          const homeClinic = clinics[homeClinicIndex];
          clinics.splice(homeClinicIndex, 1);
          clinics.unshift(homeClinic);
        }
        setClinics(clinics);
      }
    };

    sortClinicsByHomeClinicName();
  }, [userHomeClinic, clinics]);

  return user_id ? (
    <div className="text-primary">
      <div className="pt-1 sm:pt-4">
        <button
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
          <span className="text-lg sm:text-xl ml-2 font-open-sans">Back</span>
        </button>
      </div>
      <div className="mt-4 h-fit sm:min-h-[60vh]">{renderPage()}</div>
      <div className="sm:my-4 my-16 flex items-center justify-center">
        {currentPage < totalPages && (
          <Button
            color="secondary"
            label="Next"
            onClick={handleNext}
            className="px-4 py-2 rounded-full sm:w-52 h-12 text-lg sm:mt-16"
          />
        )}
      </div>

      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <PetForm closePopup={closePopup} onPetAdded={getPets} />
      </Popup>

      <Popup isOpen={isOTPPopupOpen} onClose={closeOTPPopup}>
        <ConfirmBookingOTP
          onOTPConfirmed={otpConfirmed}
          sendBookingOTP={sendBookingOTP}
          phoneNumber={JSON.parse(localStorage.getItem("user_info"))?.phone}
        />
      </Popup>
    </div>
  ) : (
    <div className="flex items-center justify-center text-primary mt-10">
      <h2 className="text-3xl font-bold">
        Please login to book the appointment
      </h2>
    </div>
  );
};

export default Form;
