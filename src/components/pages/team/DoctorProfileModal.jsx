/* eslint-disable @next/next/no-img-element */
import Button from "@/components/ui/Button";
import React from "react";

const DoctorProfileModal = ({ selectedDoctor }) => {
  return (
    <div className="p-4 bg-white max-w-[1040px] w-full mx-auto">
      <div className="p-4 text-primary overflow-y-auto 2xl:max-h-[680px] xl:max-h-[500px] flex gap-8">
        <div className="flex flex-col gap-6 w-3/5">
          <div
            style={{ fontFamily: "Roca Bold, sans-serif" }}
            className="text-slate-700 text-start text-3xl font-semibold whitespace-nowrap"
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
              <h4 className="text-xl font-semibold">
                Veterinarian
              </h4>
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
              <div className="grid grid-cols-2 gap-2">
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex gap-2 border border-[#D0D5DD] p-2 rounded-sm whitespace-nowrap"
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
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold">About the Vet</h4>
            <p>{selectedDoctor?.about}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-2/5">
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
          <Button label="Book a Visit" color="secondary" className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileModal;
