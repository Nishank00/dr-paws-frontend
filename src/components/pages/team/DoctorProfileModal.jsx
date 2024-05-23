/* eslint-disable @next/next/no-img-element */
import Button from "@/components/ui/Button";
import React from "react";

const DoctorProfileModal = ({ selectedDoctor }) => {
  return (
    <div className="p-[50px] text-primary  bg-white max-w-[1040px] w-full">
      <div className="flex overflow-y-auto   2xl:max-h-[680px] xl:max-h-[500px]  gap-4 w-fit">
        <div className="flex w-3/5 flex-col gap-6">
          <div
            style={{ fontFamily: "Roca Bold, sans-serif" }}
            className="text-slate-700 w-fit text-start text-4xl font-semibold whitespace-nowrap"
          >
            Dr. {selectedDoctor?.full_name || "NA"}
          </div>
          <div className="flex w-fit items-start gap-3">
            <img src="/Teams/experience_icon.svg" alt="" loading="lazy" />
            <div className="flex flex-col gap-3">
              <p className="text-xl">Experience</p>
              <h4 className="text-2xl font-semibold">
                {selectedDoctor?.experience}
              </h4>
            </div>
          </div>
          <div className="flex w-fit items-start gap-3">
            <img src="/Teams/specialization_icon.svg" alt="" loading="lazy" />

            <div className="flex flex-col gap-3">
              <p className="text-xl">Specialization</p>
              <h4 className="text-2xl font-semibold">
                {selectedDoctor?.specialization}
              </h4>
            </div>
          </div>

          <div className="flex w-fit items-start gap-3">
            <img loading="lazy" src="/profile/teacher.svg" alt="" />
            <div className="flex flex-col gap-3">
              <p className="text-xl">Education</p>
              <h4 className="text-2xl font-semibold">
                {selectedDoctor?.education}
              </h4>
            </div>
          </div>

          <div className="flex w-fit items-start gap-3">
            <img src="/Teams/location-marker.svg" alt="" loading="lazy" />

            <div className="flex flex-col gap-3">
              <p className="text-xl">Clinics</p>
              <div className="grid grid-cols-2 gap-2">
                {Array(4)
                  .fill()
                  .map((index) => (
                    <div
                      key={index}
                      className="flex gap-2 border border-[#D0D5DD] p-1 rounded-sm whitespace-nowrap"
                    >
                      <img
                        src="/Teams/location_small.svg"
                        alt=""
                        loading="lazy"
                      />
                      <p className="text-sm font-custom-inter">
                        Andheri West, Indiranagar
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold mb-3">About the Vet</h4>
            <p>{selectedDoctor?.about}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <img
              src="/Teams/smiling.png"
              alt=""
              loading="lazy"
              className=" w-[80%]  m-auto rounded-[100%]"
            />
            <div className="text-lg text-center">
              {selectedDoctor?.introduction}
            </div>
          </div>
          <Button label="Book a Visit" color="secondary" className="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileModal;
