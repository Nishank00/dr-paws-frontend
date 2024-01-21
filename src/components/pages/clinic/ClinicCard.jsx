import React from "react";

const ClinicCard = ({ imageUrl }) => {
  return (
    <div className="bg-primary3 rounded-lg">
      <div
        style={{
          backgroundImage:
            "url(" +
            "https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "158px",
        }}
      />
      <div className="p-4 text-primary">
        <h4 className="font-bold">Indiranagar Clinic</h4>
        <p className="text-sm">OPD | Surgery</p>
      </div>
      <div className="text-center font-semibold bg-secondary hover:bg-primary py-2">
        Book a Visit
      </div>
    </div>
  );
};

export default ClinicCard;
