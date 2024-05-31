import React from "react";

const DoctorSelect = ({ doctor = {}, selected = false, onClick }) => {
  const handleClick = () => {
    onClick(doctor.index, doctor.id);
  };
  return (
    <div
      onClick={handleClick}
      className={`p-3 flex flex-col items-center bg-primary4 rounded-lg min-w-[315px] ${
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
    </div>
  );
};

export default DoctorSelect;
