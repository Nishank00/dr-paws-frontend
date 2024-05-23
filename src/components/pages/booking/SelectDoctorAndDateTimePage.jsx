import { useEffect, useState } from "react";
import DoctorSelect from "./DoctorSelect";
import Calendar from "./Calender";
import moment from "moment";
import { useRouter } from "next/navigation";
import DoctorService from "@/services/Doctor.Service";
import { useToast } from "@/components/ui/ToastProvider";
// import Loader from "@/components/ui/Loader";

const SelectDoctorAndDateTimePage = ({
  doctors = [],
  currentPage,
  selectedClinic = {},
  setDoctors,
  selectedDate,
  setSelectedDate,
  setSelectedSlot,
  onConfirmBooking,
  className,
  isGroomingOnly = false,
  selectedServicesData = [],
}) => {
  const [isDoctorSelected, setIsDoctorSelected] = useState(false);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [availableDays, setAvailableDays] = useState([]);
  const [doctorClinicTimings, setDoctorClinicTimings] = useState([]);
  const [isLoadingDoctorClinicData, setIsLoadingDoctorClinicData] = useState(false);
  const showToast = useToast();

  // Handle date selection
  const handleDateSelection = async (date) => {
    setSelectedDate(date);
    setIsLoadingDoctorClinicData(true);
    await fetchDoctorClinicData(date);
    setIsLoadingDoctorClinicData(false);
  };

  // Handle time slot selection
  const handleTimeSlotSelection = (selectedTimeSlot) => {
    setAvailableTimeSlots(
      availableTimeSlots.map((slot) => ({
        ...slot,
        selected: slot.formattedTime === selectedTimeSlot.formattedTime,
      }))
    );
    setSelectedSlot(selectedTimeSlot);
  };

  // Handle doctor selection
  const handleDoctorSelection = async (doctorId) => {
    console.log("Doctor Clicked", doctorId);
    const updatedDoctors = doctors.map((doctor) => ({
      ...doctor,
      selected: doctor.id === doctorId,
    }));

    console.log(updatedDoctors);

    setSelectedDoctorId(doctorId);
    setDoctors(updatedDoctors);

    setIsLoadingDoctorClinicData(true);
    await fetchDoctorClinicData();
    setIsLoadingDoctorClinicData(false);
  };

  // Fetch doctor clinic data based on selected doctor and date
  const fetchDoctorClinicData = async (date = null) => {
    if (selectedDoctorId === "best-available-vet") {
      try {
        const availableDoctors = doctors.filter(
          (doctor) => doctor.id !== "best-available-vet"
        );

        const allDoctorTimings = await Promise.all(
          availableDoctors.map(async (doctor) => {
            const payload = {
              doctor_id: doctor.id,
              clinic_id: selectedClinic.id,
              date: date ? moment(date).format("YYYY-MM-DD") : null,
            };
            const response = await DoctorService.getDoctorClinicTimings(payload);
            return response.data.data;
          })
        );

        console.log("All Doctor Timings", allDoctorTimings);

        if (date) {
          const availableSlots = allDoctorTimings
            .map((doctorTimings) => doctorTimings.timesArray)
            .flat();
          setAvailableTimeSlots(availableSlots);
        } else {
          const availableDays = allDoctorTimings
            .map((doctorTimings) => doctorTimings.availableDays)
            .flat();
          setAvailableDays(availableDays);
        }
      } catch (error) {
        console.log(error);
        showToast("Failed to fetch doctor clinic data", "error");
      }
    } else {
      try {
        const payload = {
          doctor_id: selectedDoctorId,
          clinic_id: selectedClinic.id,
          date: date ? moment(date).format("YYYY-MM-DD") : null,
        };

        const response = await DoctorService.getDoctorClinicTimings(payload);
        const { data = { status: false, message: "Something is missing" } } =
          response;
        if (!data.status) return showToast(data.message, "error");

        setDoctorClinicTimings(data.data);
        setAvailableDays(data.data?.availableDays);
        setAvailableTimeSlots(data.data?.timesArray);
      } catch (error) {
        console.log(error);
        showToast("Failed to fetch doctor clinic data", "error");
      }
    }
  };

  // Sort doctors with "Best Available Vet" at the top
  const sortedDoctors = [...doctors].sort((a, b) => {
    if (a.doctor_name.toLowerCase() === "best available vet") return -1;
    if (b.doctor_name.toLowerCase() === "best available vet") return 1;
    return 0;
  });

  // Check if a day is available for booking
  const isDayAvailable = (selectedDate) => {
    const selectedDay = moment(selectedDate).format("dddd");
    console.log("selectedDay", selectedDay);
    return availableDays.includes(selectedDay);
  };

  // Reset available time slots when selected doctor changes
  useEffect(() => {
    setAvailableTimeSlots([]);
    setIsLoadingDoctorClinicData(true);
    fetchDoctorClinicData();
    setIsLoadingDoctorClinicData(false);
  }, [selectedDoctorId]);

  // Update available days when doctor clinic timings change
  useEffect(() => {
    console.log("doctorClinicTimings", doctorClinicTimings);
    setAvailableDays(doctorClinicTimings.availableDays || []);
  }, [doctorClinicTimings]);

  // Fetch doctor clinic data when selected date changes
  useEffect(() => {
    if (selectedDate) handleDateSelection(selectedDate);
  }, [selectedClinic]);

  // Update isDoctorSelected state when doctors change
  useEffect(() => {
    setIsDoctorSelected(doctors.some((doctor) => doctor.selected));
  }, [doctors]);

  // Set first doctor as selected if isGroomingOnly is true
  useEffect(() => {
    console.log("isGroomingOnly", isGroomingOnly);
    if (isGroomingOnly && doctors.length > 0) {
      console.log("Making first doctor selected");
      const firstDoctorId = doctors[0].id;
      setSelectedDoctorId(firstDoctorId);

      const updatedDoctors = doctors.map((doctor, index) => ({
        ...doctor,
        selected: index === 0,
      }));
      setDoctors(updatedDoctors);

      setIsLoadingDoctorClinicData(true);
      fetchDoctorClinicData();
      setIsLoadingDoctorClinicData(false);
    }
  }, [isGroomingOnly, doctors]);

  return (
    <div className={"pt-1 sm:pt-10 " + className}>
      <div className="mb-24">
        {!doctors || doctors.length === 0 || !selectedClinic ? (
          <>
            <h2 className="text-primary text-xl sm:text-4xl font-custom-roca font-medium mb-1">
              Clinic not selected!!
            </h2>
            <p className="text-primary text-xs sm:text-sm mb-4 font-custom-open-sans">
              Please Select a Clinic to proceed with the booking
            </p>
          </>
        ) : (
          <>
            {!isGroomingOnly && (
              <div>
                <h2 className="text-primary text-xl sm:text-4xl font-custom-roca font-medium mb-1">
                  Select Vet
                </h2>
                <p className="text-primary text-xs sm:text-sm mb-4 font-custom-open-sans">
                  Please select the vet {`you'd`} like to meet
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {sortedDoctors.map((doctor, i) => (
                    <DoctorSelect
                      key={"doctor" + i}
                      doctor={{ ...doctor, index: i }}
                      selected={doctor?.selected}
                      onClick={() => handleDoctorSelection(doctor.id)}
                    />
                  ))}
                </div>
              </div>
            )}
            <div className="pt-1 sm:pt-10">
              <h2 className="text-primary text-xl sm:text-4xl font-custom-roca font-medium mb-1">
                Select Date and Time
              </h2>
              <p className="text-primary text-xs sm:text-sm mb-4 font-custom-open-sans">
                Please select your appointment slot
              </p>
              {!selectedDoctorId && currentPage === 3 && (
                <p className="text-red-500 mb-6">Select Doctor</p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 pb-10 items-start justify-start">
                <div className="col-span-2">
                  <Calendar
                    selected={selectedDate}
                    onSelect={handleDateSelection}
                    disabled={!isDoctorSelected}
                    availableDays={availableDays}
                  />
                </div>
                <div className="text-primary font-semibold">
                  {isLoadingDoctorClinicData ? (
                    <Loader />
                  ) : (
                    <>
                      {selectedDate && (
                        <>
                          {isDayAvailable(selectedDate) ? (
                            <h5 className="text-black mb-5">
                              Available timeslots for{" "}
                              <span className="text-primary">
                                {moment(selectedDate).format("dddd, MMM D")}
                              </span>
                            </h5>
                          ) : (
                            <p className="text-danger">
                              Sorry, no available timeslots for this day. We do
                              welcome walk-ins but {`can't`} guarantee an
                              appointment time.
                            </p>
                          )}

                          <div className="">
                            {availableTimeSlots &&
                              availableTimeSlots.map((timeSlot, index) => (
                                <div key={"slot" + index}>
                                  {timeSlot.selected ? (
                                    <div className="grid grid-cols-2 gap-2 w-full sm:max-w-60">
                                      <div className="rounded-lg shadow-lg bg-primary4 border-2 border-primary w-full sm:w-30 py-4 flex items-center justify-center mb-3">
                                        <span>{timeSlot.formattedTime}</span>
                                      </div>
                                      <button
                                        onClick={onConfirmBooking}
                                        className="rounded-lg shadow-lg bg-secondary hover:bg-primary text-white border-2 border-secondary w-full sm:w-30 py-4 flex items-center justify-center mb-3"
                                      >
                                        Confirm
                                      </button>
                                    </div>
                                  ) : (
                                    <div
                                      onClick={() =>
                                        handleTimeSlotSelection(timeSlot)
                                      }
                                      className="rounded-lg shadow-lg bg-primary4 w-full sm:max-w-60 py-4 flex items-center justify-center mb-3 cursor-pointer hover:shadow-2xl"
                                    >
                                      <span>{timeSlot.formattedTime}</span>
                                    </div>
                                  )}
                                </div>
                              ))}
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SelectDoctorAndDateTimePage;