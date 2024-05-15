import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import React from "react";

const DoctorProfile = ({ selectedDoctor }) => {
  const router = useRouter();
  return (
    <div className="bg-primary3 py-4 px-4 text-primary  rounded-2xl flex flex-col md:flex-row items-center justify-center gap-5 w-full lg:w-[1040px] lg:h-[600px] overflow-scroll">
      <div className="flex">
        <div className="w-full md:w-3/5 flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-custom-roca">
            {selectedDoctor?.full_name || "NA"}
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <img src="/Teams/experience_icon.svg" alt="" loading="lazy" />

              <div className="flex flex-col gap-3">
                <p className="text-xl">Experience</p>
                <h4 className="text-2xl font-semibold">
                  {selectedDoctor?.experience}
                </h4>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <img src="/Teams/specialization_icon.svg" alt="" loading="lazy" />

              <div className="flex flex-col gap-3">
                <p className="text-xl">Specialization</p>
                <h4 className="text-2xl font-semibold">
                  {selectedDoctor?.specialization}
                </h4>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <img src="/Teams/location-marker.svg" alt="" loading="lazy" />

              <div className="flex flex-col gap-3">
                <p className="text-xl">Clinics</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex gap-2 border border-[#D0D5DD] p-1 rounded-sm whitespace-nowrap">
                    <img
                      src="/Teams/location_small.svg"
                      alt=""
                      loading="lazy"
                    />
                    <p className="text-sm font-custom-inter">
                      Andheri West, Indiranagar
                    </p>
                  </div>

                  <div className="flex gap-2 border border-[#D0D5DD] p-1 rounded-sm whitespace-nowrap">
                    <img
                      src="/Teams/location_small.svg"
                      alt=""
                      loading="lazy"
                    />
                    <p className="text-sm font-custom-inter">
                      Andheri West, Indiranagar
                    </p>
                  </div>

                  <div className="flex gap-2 border border-[#D0D5DD] p-1 rounded-sm whitespace-nowrap">
                    <img
                      src="/Teams/location_small.svg"
                      alt=""
                      loading="lazy"
                    />
                    <p className="text-sm font-custom-inter">
                      Andheri West, Indiranagar
                    </p>
                  </div>

                  <div className="flex gap-2 border border-[#D0D5DD] p-1 rounded-sm whitespace-nowrap">
                    <img
                      src="/Teams/location_small.svg"
                      alt=""
                      loading="lazy"
                    />
                    <p className="text-sm font-custom-inter">
                      Andheri West, Indiranagar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <h4 className="text-2xl font-bold mb-3">About the Vet</h4>
            <p>{selectedDoctor?.about}</p>
          </div>
        </div>
        <div className="w-full h-full md:w-2/5 flex flex-col justify-between ">
          <figcaption className="flex flex-col gap-4">
            <img
              src="/Teams/smiling.png"
              alt=""
              loading="lazy"
              className="w-fit"
            />
            <figcaption className="text-lg text-center">
              {selectedDoctor?.introduction}
            </figcaption>
          </figcaption>

          <Button label="Book a Visit" color="secondary" className="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
