import React, { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import BookingService from "@/services/Booking.service";
import Button from "../../ui/Button";

const AppointmentList = ({ listType = "ALL" }) => {
  const [appointments, setAppointments] = useState([]);

  const getAppointments = () => {
    const params = { listType };
    BookingService.getAppointments(params)
      .then((response) => {
        if (response.data.status) setAppointments(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <>
      {appointments ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {appointments?.map((appointment) => (
            <AppointmentCard
              key={"appointment" + appointment.id}
              appointment={appointment}
            />
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center gap-2 my-10">
          <h2 className="text-3xl text-secondary text-center font-semibold opacity-70 max-w-sm">
            You haven&apos;t booked any visits yet
          </h2>
          <Button
            color="secondary"
            label="Book a visit"
            onClick={() => {}}
            className="w-auto text-lg px-5 py-2"
          />
        </div>
      )}
    </>
  );
};

export default AppointmentList;
