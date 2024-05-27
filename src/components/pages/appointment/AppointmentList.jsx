import React, { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import BookingService from "@/services/Booking.service";
import Button from "../../ui/Button";
import { useRouter } from "next/navigation";

const AppointmentList = ({ listType = "ALL" }) => {
  const router = useRouter();
  const [appointments, setAppointments] = useState([]);

  const getAppointments = () => {
    const params = { listType };
    BookingService.getAppointments(params)
      .then((response) => {
        if (response.data.status) setAppointments(response.data.data);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getAppointments();
  }, []);

  console.log("appointments", appointments);
  return (
    <>
      {appointments && appointments.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {appointments?.map((appointment) => (
            <AppointmentCard
              key={"appointment" + appointment.id}
              appointment={appointment}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 my-10">
          <h2 className="text-2xl text-secondary text-center font-semibold sm:opacity-70 max-w-sm">
            {["ALL", "UPCOMING"].includes(listType)
              ? "You haven't booked any visits yet"
              : "No records to show"}
          </h2>
          {["ALL", "UPCOMING"].includes(listType) && (
            <Button
              color="secondary"
              label="Book a visit"
              onClick={() => router.push("/booking")}
              className="w-auto text- cursor-pointer px-5 py-2"
            />
          )}
        </div>
      )}
    </>
  );
};

export default AppointmentList;
