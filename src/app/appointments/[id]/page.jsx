"use client";
import AppointmentDetails from "@/components/pages/appointment/AppointmentDetails";
import SingleAppointment from "@/components/pages/appointment/SingleAppointment";
import React from "react";

const page = ({ params }) => {
  const id = Number(params.id || 0);
  return (
    <div>
      {/* <AppointmentDetails appointment_id={id} /> */}
      <SingleAppointment appointment_id={id} />
    </div>
  );
};

export default page;
