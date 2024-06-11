/* eslint-disable @next/next/no-img-element */
import Button from "@/components/ui/Button";
import React from "react";

const DoctorProfileModal = ({ selectedDoctor }) => {
  return (
    <div className="p-4 pb-0 bg-white md:max-w-[1040px] max-w-[95%] w-full mx-auto rounded-2xl ">
      <div className="p-4  text-primary overflow-y-auto max-h-[80vh]  md:max-h-[75vh] lg:max-h-[70vh] overflow-scroll  flex gap-8 md:flex-row flex-col-reverse ">
        <div className="flex flex-col gap-6 md:w-3/5 w-full">
          <div
            style={{ fontFamily: "Roca Bold, sans-serif" }}
            className="text-slate-700 text-start text-[24px] md:text-3xl font-semibold whitespace-nowrap"
          >
            Dr. {selectedDoctor?.full_name || "NA"}
          </div>
          <div className="flex items-start gap-4">
            <img src="/Teams/experience_icon.svg" alt="" loading="lazy" />
            <div className="flex flex-col gap-2">
              <p className="text-lg">Experience</p>
              <h4 className="text-xl font-semibold">
                {selectedDoctor?.experience}
              </h4>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img src="/Teams/role.svg" alt="" loading="lazy" />
            <div className="flex flex-col gap-2">
              <p className="text-lg">Role</p>
              <h4 className="text-xl font-semibold">Veterinarian</h4>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img src="/Teams/specialization_icon.svg" alt="" loading="lazy" />
            <div className="flex flex-col gap-2">
              <p className="text-lg">Specialization</p>
              <h4 className="text-xl font-semibold">
                {selectedDoctor?.specialization}
              </h4>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img loading="lazy" src="/profile/teacher.svg" alt="" />
            <div className="flex flex-col gap-2">
              <p className="text-lg">Education</p>
              <h4 className="text-xl font-semibold">
                {selectedDoctor?.education}
              </h4>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img src="/Teams/location-marker.svg" alt="" loading="lazy" />
            <div className="flex flex-col gap-2">
              <p className="text-xl">Clinics</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex gap-2 border border-[#D0D5DD] p-2 rounded-md whitespace-nowrap"
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
          <div className="flex flex-col gap-2 pb-8">
            <h4 className="text-2xl font-bold">About the Vet</h4>
            <p>{selectedDoctor?.about}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:sticky md:top-0 relative ">
          <div className="flex flex-col gap-4 md:w-72 w-36 md:h-72 h-36 overflow-hidden rounded-lg">
            <img
              src="/Teams/smiling.png"
              alt=""
              loading="lazy"
              className=" w-full h-full object-cover  m-auto rounded-[100%]"
            />
            <div className="text-lg text-center">
              {selectedDoctor?.introduction}
            </div>
          </div>
          <Button
            label="Book a Visit"
            color="secondary"
            className="mt-6 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileModal;
