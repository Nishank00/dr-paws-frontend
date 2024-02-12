import React from "react";
import DoctorSelect from "./DoctorSelect";
import Calendar from "./Calender";

const SelectDoctorAndDateTimePage = ({
  doctors = [],
  setDoctors,
  className,
}) => {
  return (
    <div className={className}>
      <div className="mb-24">
        <h2 className="text-primary font-medium text-5xl mb-1">Select Vet</h2>
        <p className="text-primary mb-6"> Book a spot for your visit</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {doctors.map((doctor, i) => (
            <DoctorSelect
              key={"doctor" + i}
              doctor={doctor}
              selected={doctor.selected}
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
      </div>

      <div className="">
        <h2 className="text-primary font-medium text-5xl mb-1">
          Select Date and Time
        </h2>
        <p className="text-primary mb-6"> Book a spot for your visit</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-10 items-start justify-start">
          <div className="col-span-2">
            <Calendar />
          </div>

          <div className="text-primary font-semibold">
            <h5 className="text-black  mb-5">
              Available timeslots for Wednesday, Jan 9
            </h5>
            <div className="">
              <div className="rounded-lg shadow-lg bg-primary4 w-full sm:w-60 py-4 flex items-center justify-center mb-3">
                <span>10:00am</span>
              </div>

              <div className="rounded-lg shadow-lg bg-primary4 w-full sm:w-60 py-4 flex items-center justify-center mb-3">
                <span>11:00am</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg shadow-lg bg-primary4 border-2 border-primary w-full sm:w-30 py-4 flex items-center justify-center mb-3">
                  <span>12:00pm</span>
                </div>
                <button className="rounded-lg shadow-lg bg-primary text-white border-2 border-primary w-full sm:w-30 py-4 flex items-center justify-center mb-3">
                  Confirm
                </button>
              </div>

              <div className="rounded-lg shadow-lg bg-primary4 w-full sm:w-60 py-4 flex items-center justify-center mb-3">
                <span>01:00pm</span>
              </div>

              <div className="rounded-lg shadow-lg bg-primary4 w-full sm:w-60 py-4 flex items-center justify-center mb-3">
                <span>02:00pm</span>
              </div>

              <div className="rounded-lg shadow-lg bg-primary4 w-full sm:w-60 py-4 flex items-center justify-center mb-3">
                <span>03:00pm</span>
              </div>

              <div className="rounded-lg shadow-lg bg-primary4 w-full sm:w-60 py-4 flex items-center justify-center mb-3">
                <span>04:00pm</span>
              </div>

              <div className="rounded-lg shadow-lg bg-primary4 w-full sm:w-60 py-4 flex items-center justify-center mb-3">
                <span>05:00pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDoctorAndDateTimePage;
