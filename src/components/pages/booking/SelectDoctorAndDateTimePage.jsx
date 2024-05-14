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

  const handleDoctorClick = (doctorIndex, doctorId) => {
    // console.log(doctorIndex, doctorId, selectedClinic);
    let copyDoctorData = doctors.map((doctor) => {
      if (doctor.id == doctorId) {
        doctor["selected"] = !doctor["selected"];
      } else {
        doctor["selected"] = false;
      }
      return { ...doctor };
    });

    setSelectedDoctorId(doctorId);
    setDoctors(copyDoctorData);
  };

  async function getSelectedDoctorClinicData(date = null) {
    try {
      // if (!selectedDoctorId && currentPage == 3) {
      //   return showToast("Select Doctor", "error");
      // }
      // if (!selectedClinic.id && currentPage == 3) {
      //   return showToast("Select Clinic", "error");
      // }
      let payload = {
        doctor_id: selectedDoctorId,
        clinic_id: selectedClinic.id,
      };

      if (date) {
        payload["date"] = moment(date).format("YYYY-MM-DD");
      }
      const response = await DoctorService.getDoctorClinicTimings(payload);

      const { data = { status: false, message: "Something is missing" } } =
        response;
      if (!data.status) return showToast(data.message);

      setDoctorClinicTimings(data.data);
      setAvailableSlots(data.data?.timesArray);
    } catch (error) {
      console.log(error);
    }
  }

  const sortedDoctors = [...doctors].sort((a, b) => {
    if (a.doctor_name.toLowerCase() === "best available vet") return -1;
    if (b.doctor_name.toLowerCase() === "best available vet") return 1;
    return 0;
  });

  const isDayAvailable = (selectedDate) => {
    const selectedDay = moment(selectedDate).format("dddd");
    console.log("selectedDay", selectedDay);
    return availableDays.includes(selectedDay);
  };

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
            <h2 className="text-primary text-xl sm:text-4xl font-custom-roca font-medium mb-1">
              Select Vet
            </h2>
            <p className="text-primary text-xs sm:text-sm mb-4 font-custom-open-sans">
              Please select the vet {`you'd`} like to meet
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {/* <div
                onClick={handleClick}
                className={`p-3 flex flex-col items-center bg-primary4 rounded-lg ${
                  doctor.selected ? "ring-4 ring-secondary" : ""
                }`}
              >
                <div
                  className="rounded-full h-32 w-32"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&" +
                      ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div className="p-4 text-primary">
                  <h4 className="font-bold">{doctor.doctor_name}</h4>
                </div>
              </div> */}
              {sortedDoctors.map((doctor, i) => (
                <DoctorSelect
                  key={"doctor" + i}
                  doctor={{ ...doctor, index: i }}
                  selected={doctor?.selected}
                  onClick={handleDoctorClick}
                />
              ))}
            </div>
            <div className="pt-1 sm:pt-10">
              <h2 className="text-primary text-xl sm:text-4xl font-custom-roca font-medium mb-1">
                Select Date and Time
              </h2>
              <p className="text-primary text-xs sm:text-sm mb-4 font-custom-open-sans">
                Please select your appoinment slot
              </p>
              {!selectedDoctorId && currentPage == 3 && (
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
                          welcome walk-ins but {`can't`}guarantee an appointment
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
