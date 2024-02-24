"use client";
import AppointmentDetails from "@/components/pages/appointment/AppointmentDetails";
import React from "react";

const page = ({ params }) => {
  const id = Number(params.id || 0);
  return (
    <div>
      <AppointmentDetails appointment_id={id} />
    </div>
  );
};

export default page;
