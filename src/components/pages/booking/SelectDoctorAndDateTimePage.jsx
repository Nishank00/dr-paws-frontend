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
  const dateSelected1 = async (date) => {
    await getSelectedDoctorClinicData(date);
    const selectedDay = date.getDay();

    const { opening_time, closing_time } =
      selectedClinic.clinic_timings &&
      selectedClinic.clinic_timings.filter(
        (day) => day.day_value == selectedDay
      )[0];

    const openingMoment = moment(opening_time, "HH:mm:ss");
    const closingMoment = moment(closing_time, "HH:mm:ss");
    const timeArray = [];

    let currentTime = moment(openingMoment);
    while (currentTime <= closingMoment) {
      const formattedTime = currentTime.format("hh:mma");
      const sqlStartTime = currentTime.format("HH:mm:ss");
      const sqlEndTime = currentTime.add(1, "hour").format("HH:mm:ss");

      if (!doctorClinicTimings.doctorClinicData.length)
        return showToast("No timings of doctor found");

      const [filteredDoctorData] = doctorClinicTimings.doctorClinicData.filter(
        (doctorObj) => {
          return doctorObj.day_number == selectedDay;
        }
      );
      // console.log({ filteredDoctorData, selectedDay });
      if (!filteredDoctorData)
        return showToast("Doctor timings not found for this day");

      let doctorAvailableTimes = filteredDoctorData.doctor_timing.split(",");

      if (!doctorAvailableTimes.length)
        return showToast("Doctor timings not found");
      // console.log({ doctorAvailableTimes });

      // used for loop to break from timings array if the doctor is available in shifts.i.e.10-11,15-18
      for (let drIndex = 0; drIndex < doctorAvailableTimes.length; drIndex++) {
        const drObj = doctorAvailableTimes[drIndex];
        let drStartTime = moment(drObj.split("-")?.[0], "HH:mm");
        let drEndTime = moment(drObj.split("-")?.[1], "HH:mm");
        let isTimeValid = moment(formattedTime, "hh:mma").isBetween(
          drStartTime,
          drEndTime,
          null,
          "[)"
        );
        // console.log(
        //   isTimeValid,
        //   formattedTime,
        //   drStartTime,
        //   drEndTime,
        //   date,
        //   "isDate",
        //   moment(formattedTime, "hh:mma").isAfter(moment(date))
        // );
        // checks if date is between the selected range and checks if formatted time is after the current time and less than the formatted time

        // for (
        //   let existingSlotIndex = 0;
        //   existingSlotIndex < doctorClinicTimings?.existingAppointments.length;
        //   existingSlotIndex++
        // ) {
        //   const bookedSlot =
        //     doctorClinicTimings?.existingAppointments[existingSlotIndex][
        //       "booked_slot"
        //     ];
        //   let bookedSlotStartTime = moment(bookedSlot.split("-")?.[0], "HH:mm");
        //   let bookedSlotEndTime = moment(bookedSlot.split("-")?.[1], "HH:mm");
        //   isTimeValid = moment(formattedTime, "hh:mma").isBetween(
        //     bookedSlotStartTime,
        //     bookedSlotEndTime,
        //     null,
        //     "[)"
        //   );
        //   if (isTimeValid) {
        //     isTimeValid = false;
        //     break;
        //   }
        // }
        if (
          isTimeValid &&
          (moment(formattedTime, "hh:mma").isAfter(moment()) ||
            !moment(formattedTime, "hh:mma").isAfter(moment(date)))
        ) {
          if (isTimeValid) {
            timeArray.push({
              formattedTime,
              sqlStartTime,
              sqlEndTime,
              selected: false,
            });
            break;
          }
        }
      }
      setSelectedDate(date);

      // currentTime.add(1, "hour");
    }

    let bookingFreeSlots = [];
    if (doctorClinicTimings?.existingAppointments?.length) {
      timeArray.forEach((availableSlotObj) => {
        for (
          let bookedSlotsIndex = 0;
          bookedSlotsIndex < doctorClinicTimings?.existingAppointments.length;
          bookedSlotsIndex++
        ) {
          const bookedSlotObj =
            doctorClinicTimings?.existingAppointments[bookedSlotsIndex];
          let bookedStartTime = moment(
            bookedSlotObj?.booked_slot.split("-")?.[0],
            "HH:mm"
          );
          let bookedEndTime = moment(
            bookedSlotObj?.booked_slot.split("-")?.[1],
            "HH:mm"
          );
          let isTimeValid = moment(
            availableSlotObj.formattedTime,
            "hh:mma"
          ).isBetween(bookedStartTime, bookedEndTime, null, "[)");

          if (!isTimeValid) {
            bookingFreeSlots.push(availableSlotObj);
            break;
          }
        }
      });
    } else {
      bookingFreeSlots = [...timeArray];
    }

    setAvailableSlots(bookingFreeSlots);
  };

  const dateSelected = async (date) => {
    setSelectedDate(date);
    await getSelectedDoctorClinicData(date);
  };

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
      if (!selectedDoctorId && currentPage == 3) {
        return showToast("Select Doctor", "error");
      }
      if (!selectedClinic.id && currentPage == 3) {
        return showToast("Select Clinic", "error");
      }
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
  useEffect(() => {
    setAvailableSlots([]);
    getSelectedDoctorClinicData();
  }, [selectedDoctorId]);

  useEffect(() => {
    // console.log({ doctorClinicTimings });
    let { availableDays = [] } = doctorClinicTimings;
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
              Book a spot for your visit
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {doctors.map((doctor, i) => (
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
                Book a spot for your visit
              </p>

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
                      <h5 className="text-black  mb-5">
                        Available timeslots for{" "}
                        <span className="text-primary">
                          {moment(selectedDate).format("dddd, MMM D")}
                        </span>
                      </h5>

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
