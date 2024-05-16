import { useEffect, useState } from "react";
import DoctorSelect from "./DoctorSelect";
import Calendar from "./Calender";
import moment from "moment";
import { useRouter } from "next/navigation";
import DoctorService from "@/services/Doctor.Service";
import { useToast } from "@/components/ui/ToastProvider";

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
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [availableDays, setAvailableDays] = useState([]);
  const [doctorClinicTimings, setDoctorClinicTimings] = useState([]);
  const showToast = useToast();

  const dateSelected = async (date) => {
    setSelectedDate(date);
    await getSelectedDoctorClinicData(date);
  };

  console.log("availableDays", availableDays);

  const slotClicked = (availableSlot) => {
    setAvailableSlots(
      availableSlots.map((slot) => {
        if (slot.formattedTime == availableSlot.formattedTime) {
          slot.selected = true;
          setSelectedSlot({ ...availableSlot, selected: true });
        } else {
          slot.selected = false;
        }
        return slot;
      })
    );
  };

  // async function handleDoctorClick(doctorIndex, doctorId, doctorName) {
  //   let copyDoctorData = doctors.map((doctor) => {
  //     if (doctor.id === doctorId) {
  //       doctor["selected"] = !doctor["selected"];
  //     } else {
  //       doctor["selected"] = false;
  //     }
  //     return { ...doctor };
  //   });

  //   console.log(doctors)

  //   setSelectedDoctorId(doctorId);
  //   setDoctors(copyDoctorData);

  //   // If the clicked doctor is the "best available doctor"
  //   if (doctorName === "best available doctor") {
  //     const allDoctorSlots = doctors.flatMap((doctor) => doctor.availableSlots); // Collect all available slots from other doctors

  //     // Remove duplicates and sort the slots
  //     const bestAvailableSlots = Array.from(new Set(allDoctorSlots)).sort(
  //       (a, b) => a.localeCompare(b, undefined, { numeric: true })
  //     );

  //     setAvailableSlots(bestAvailableSlots);
  //   } else {
  //     // Fetch the selected doctor's clinic data
  //     await getSelectedDoctorClinicData();
  //   }
  // }

  async function handleDoctorClick(doctorIndex, doctorId, doctorName) {
  console.log("Doctor Clicked", doctorId, doctorName);
  
  let copyDoctorData = doctors.map((doctor) => {
    if (doctor.id === doctorId) {
      doctor["selected"] = !doctor["selected"];
    } else {
      doctor["selected"] = false;
    }
    return { ...doctor };
  });

  console.log(doctors);
  setSelectedDoctorId(doctorId);
  setDoctors(copyDoctorData);

  // If the clicked doctor is the "Best Available Vet"
  if (doctorId === "best-available-vet") {
    console.log("BEST AVAILABLE VET CLICKED");
    
    const availableDoctors = doctors.filter(
      (doctor) => doctor.id !== "best-available-vet"
    );

    const allDoctorSlots = await Promise.all(
      availableDoctors.map(async (doctor) => {
        const payload = {
          doctor_id: doctor.id,
          clinic_id: selectedClinic.id,
        };
        const response = await DoctorService.getDoctorClinicTimings(payload);
        console.log(`Response for doctor ${doctor.id}:`, response);
        return response.data.data?.availableDays || [];
      })
    );

    console.log("All Doctor Slots", allDoctorSlots);

    // Check if all elements in allDoctorSlots are empty arrays
    const hasAvailableSlots = allDoctorSlots.some((slots) => slots.length > 0);

    if (hasAvailableSlots) {
      // Flatten the array of arrays into a single array
      const collectiveSlots = allDoctorSlots.flat();
      console.log("Collective Slots", collectiveSlots);
      
      // Remove duplicates and sort the slots
     
      setAvailableDays(collectiveSlots);

      

      // Flatten the array of arrays into a single array
      const flattenedTimeSlots = collectiveTimeSlots.flat();

      // Set the availableSlots state with the flattened time slots
      setAvailableSlots(flattenedTimeSlots);
      
   
    } else {
      setAvailableSlots([]);
    }
  } else {
    // Fetch the selected doctor's clinic data
    await getSelectedDoctorClinicData();
  }
}
  
  

  async function getSelectedDoctorClinicData(date = null) {
    try {
      let payload = {
        doctor_id: selectedDoctorId,
        clinic_id: selectedClinic.id,
      };

      if (date) {
        payload["date"] = moment(date).format("YYYY-MM-DD");
      }
      const response = await DoctorService.getDoctorClinicTimings(payload);
      console.log("Doctor Clinic Timings NORMAL", response);

      const { data = { status: false, message: "Something is missing" } } =
        response;
      if (!data.status) return showToast(data.message);

      setDoctorClinicTimings(data.data);
      setAvailableSlots(data.data?.timesArray);
    } catch (error) {
      console.log(error);
    }
  }

  // const sortedDoctors = [...doctors].sort((a, b) => {
  //   if (a.doctor_name.toLowerCase() === "best available vet") return -1;
  //   if (b.doctor_name.toLowerCase() === "best available vet") return 1;
  //   return 0;
  // });
  const sortedDoctors = false ? doctors : [
    { id: "best-available-vet", doctor_name: "Best Available Vet", selected: false },
    ...doctors.filter((doctor) => doctor.doctor_name.toLowerCase() !== "best available vet"),
  ].sort((a, b) => {
    if (a.doctor_name.toLowerCase() === "best available vet") return -1;
    if (b.doctor_name.toLowerCase() === "best available vet") return 1;
    return 0;
  });

  // const isDayAvailable = (selectedDate) => {
  // // if (isGroomingOnly) {
  //   //   return true;
  //   // }
  //   const selectedDay = moment(selectedDate).format("dddd");
  //   console.log("selectedDay", selectedDay);
  //   return availableDays.includes(selectedDay);
  // };
  const isDayAvailable = (selectedDate) => {
    if (selectedDoctorId === "best-available-vet") {
      return true;
    }
    const selectedDay = moment(selectedDate).format("dddd");
    console.log("selectedDay", selectedDay);
    return availableDays.includes(selectedDay);
  };

  // useEffect(() => {
  //   if (isGroomingOnly && doctors.length > 0) {
  //     const firstDoctorId = doctors[0].id;
  //     handleDoctorClick(0, firstDoctorId, doctors[0].doctor_name);
  //   }
  // }, [isGroomingOnly, doctors]);

  useEffect(() => {
    setAvailableSlots([]);
    getSelectedDoctorClinicData();
  }, [selectedDoctorId]);

  useEffect(() => {
    // console.log({ doctorClinicTimings });
    let { availableDays = [] } = doctorClinicTimings;
    console.log("doctorClinicTimings", doctorClinicTimings);
    setAvailableDays(availableDays);
  }, [doctorClinicTimings]);

  useEffect(() => {
    if (selectedDate) dateSelected(selectedDate);
  }, [selectedClinic]);

  useEffect(() => {
    setIsDoctorSelected(doctors.filter((doctor) => doctor.selected).length > 0);
  }, [doctors]);

  return (
    <div className={"pt-1 sm:pt-10 " + className}>
      <div className="mb-24">
        {!doctors || doctors.length == 0 || !selectedClinic ? (
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
           {true && (
              <>
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
                      onClick={handleDoctorClick}
                    />
                  ))}
                </div>
              </>
            )}
            <div className="pt-1 sm:pt-10">
              <h2 onClick={
                () => {
              
                }
              } className="text-primary text-xl sm:text-4xl font-custom-roca font-medium mb-1">
                Select Date and Time
              </h2>
              <p className="text-primary text-xs sm:text-sm mb-4 font-custom-open-sans">
                Please select your appoinment slot
              </p>
              {false ? <> </>: !selectedDoctorId && currentPage == 3 && (
                <p className="text-red-500 mb-6">Select Doctor</p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 pb-10 items-start justify-start">
                <div className="col-span-2">
                  <Calendar
                    selected={selectedDate}
                    onSelect={dateSelected}
                    disabled={!isDoctorSelected}
                    availableDays={availableDays}
                  />
                </div>
                <div className="text-primary font-semibold">
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
                          welcome walk-ins but {`can't `}guarantee an appointment
                          time.
                        </p>
                      )}

                      <div className="">
                        {availableSlots &&
                          availableSlots.map((avaliableSlot, index) => (
                            <div key={"slot" + index}>
                              {avaliableSlot.selected ? (
                                <div className="grid grid-cols-2 gap-2 w-full sm:max-w-60">
                                  <div className="rounded-lg shadow-lg bg-primary4 border-2 border-primary w-full sm:w-30 py-4 flex items-center justify-center mb-3">
                                    <span>{avaliableSlot.formattedTime}</span>
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
                                  onClick={() => slotClicked(avaliableSlot)}
                                  className="rounded-lg shadow-lg bg-primary4 w-full sm:max-w-60 py-4 flex items-center justify-center mb-3 cursor-pointer hover:shadow-2xl"
                                >
                                  <span>{avaliableSlot.formattedTime}</span>
                                </div>
                              )}
                            </div>
                          ))}
                      </div>
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
