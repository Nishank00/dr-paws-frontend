import React from "react";

const DoctorSelect = ({ selected = false }) => {
  return (
    <div
      className={`flex flex-col items-center bg-primary4 rounded-lg ${
        selected ? "ring-4 ring-secondary" : ""
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
        <h4 className="font-bold">Dr. Emily Thompson</h4>
      </div>
    </div>
  );
};

export default DoctorSelect;
