import { useEffect, useState } from "react";
import DoctorSelect from "./DoctorSelect";
import Calendar from "./Calender";
import moment from "moment";
import { useRouter } from "next/navigation";

const SelectDoctorAndDateTimePage = ({
  doctors = [],
  selectedClinic = {},
  setDoctors,
  selectedDate,
  setSelectedDate,
  setSelectedSlot,
  onConfirmBooking,
  className,
}) => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const dateSelected = (date) => {
    setSelectedDate(date);
    const selectedDay = date.getDay();
    console.log("selectedDay => ", selectedDay);

    const { opening_time, closing_time } =
      selectedClinic.clinic_timings &&
      selectedClinic.clinic_timings.filter(
        (day) => day.day_value == selectedDay
      )[0];

    console.log(
      "opening_time = ",
      opening_time,
      " and closing_time = ",
      closing_time
    );

    const openingMoment = moment(opening_time, "HH:mm:ss");
    const closingMoment = moment(closing_time, "HH:mm:ss");
    const timeArray = [];

    let currentTime = moment(openingMoment);
    while (currentTime <= closingMoment) {
      const formattedTime = currentTime.format("hh:mma");
      const sqlStartTime = currentTime.format("HH:mm:ss");
      const sqlEndTime = currentTime.add(1, "hour").format("HH:mm:ss");
      timeArray.push({
        formattedTime,
        sqlStartTime,
        sqlEndTime,
        selected: false,
      });
      currentTime.add(1, "hour");
    }

    console.log("timeArray => ", timeArray);

    setAvailableSlots(timeArray);

    console.log(
      "=> ",
      selectedClinic.clinic_timings &&
        selectedClinic.clinic_timings.filter(
          (day) => day.day_value == selectedDay
        )[0]
    );
  };

  const slotClicked = (availableSlot) => {
    console.log("availableSlot => ", availableSlot);
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

  useEffect(() => {
    if (selectedDate) dateSelected(selectedDate);
  }, [selectedClinic]);

  return (
    <div className={className}>
      <div className="mb-24">
        {!doctors || doctors.length == 0 || !selectedClinic ? (
          <>
            <h2 className="text-primary font-medium text-5xl mb-1">
              Clinic not selected!!
            </h2>
            <p className="text-primary mb-6">
              Please Select a Clinic to proceed with the booking
            </p>
          </>
        ) : (
          <>
            <h2 className="text-primary font-medium text-5xl mb-1">
              Select Vet
            </h2>
            <p className="text-primary mb-6"> Book a spot for your visit</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {doctors.map((doctor, i) => (
                <DoctorSelect
                  key={"doctor" + i}
                  doctor={doctor}
                  selected={doctor?.selected}
                  onClick={() => {
                    setDoctors(
                      doctors.map((d, index) => {
                        if (index === i) {
                          d.selected = !d.selected;
                        } else {
                          d.selected = false;
                        }
                        return d;
                      })
                    );
                  }}
                />
              ))}
            </div>
            <div className="">
              <h2 className="text-primary font-medium text-5xl mt-10 mb-1">
                Select Date and Time
              </h2>
              <p className="text-primary mb-6"> Book a spot for your visit</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 pb-10 items-start justify-start">
                <div className="col-span-2">
                  <Calendar selected={selectedDate} onSelect={dateSelected} />
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
