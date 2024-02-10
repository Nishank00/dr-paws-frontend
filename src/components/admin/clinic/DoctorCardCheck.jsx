import React from "react";

const DoctorCardCheck = ({ doctor = {}, doctorCardClicked }) => {
  const cardClicked = () => {
    doctorCardClicked(doctor);
  };
  return (
    <div
      onClick={cardClicked}
      className={`rounded-md overflow-hidden cursor-pointer ${
        doctor.selected == true ? "border-2 border-secondary" : ""
      }`}
    >
      <div className="flex items-start space-x-6 p-6 bg-primary3 shadow-lg text-primary">
        <img
          src={doctor.image}
          alt=""
          width="60"
          height="88"
          className="flex-none rounded-md bg-slate-100"
        />

        <div className="min-w-0 relative flex-auto">
          <h2 className="font-semibold text-slate-900 truncate pr-20">
            {doctor.full_name}
          </h2>
          <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
            <div className="ml-2">
              <dt className="sr-only">Exp</dt>
              <dd>{doctor.experience}</dd>
            </div>
            <div>
              <dt className="sr-only">Specialization</dt>
              <dd className="flex items-center">
                <svg
                  width="2"
                  height="2"
                  fill="currentColor"
                  className="mx-2 text-slate-300"
                  aria-hidden="true"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                {doctor.specialization}
              </dd>
            </div>

            <div className="flex-none w-full mt-2 font-normal">
              <dt className="sr-only">Introduction</dt>
              <dd className="text-slate-400">{doctor.introduction}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default DoctorCardCheck;
