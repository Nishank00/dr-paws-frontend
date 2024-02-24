"use client";
import BookingConfirmedPage from "@/components/pages/booking/BookingConfirmedPage";
import React from "react";

const page = ({ params }) => {
  // Vaiables
  const id = Number(params.id || 0);
  return (
    <div>
      <BookingConfirmedPage appointment_id={id} />
    </div>
  );
};

export default page;
