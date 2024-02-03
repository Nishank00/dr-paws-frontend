"use client";
import isAuth from "@/components/auth/isAuth";
import Form from "@/components/pages/booking/Form";

const Booking = () => {
  return (
    <div className="body-padding-x">
      <Form />
    </div>
  );
};

export default isAuth(Booking);
