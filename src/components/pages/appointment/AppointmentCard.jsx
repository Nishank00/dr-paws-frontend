import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../../ui/Button";
import moment from "moment";
import { useRouter } from "next/navigation";

const AppointmentCard = ({ appointment = {} }) => {
  // Variables
  const router = useRouter();
  const [services, setServices] = useState([]);
  const [pets, setPets] = useState([]);
  const [doctor, setDoctor] = useState({});
  const [timeString, setTimeString] = useState("");
  const [isUpcoming, setIsUpcoming] = useState(false);

  // Lifecycle hooks
  useEffect(() => {
    const currentDate = moment();
    const appointmentDate = moment(appointment.date);

    if (currentDate.isBefore(appointmentDate, "day")) {
      setIsUpcoming(true);
    } else if (currentDate.isSame(appointmentDate, "day")) {
      const currentTime = moment();
      const appointmentTime = moment(appointment.end_time);

      if (currentTime.isBefore(appointmentTime, "minute")) {
        setIsUpcoming(false);
      } else {
        setIsUpcoming(true);
      }
    } else {
      setIsUpcoming(false);
    }

    setServices([
      ...new Set(
        appointment.appointment_items.map((item) => item.service_name)
      ),
    ]);

    let distinctPets = [];
    appointment?.appointment_items?.map((appointment_item) => {
      let petIndex = distinctPets.findIndex((petObj) => {
        return petObj.pet_id == appointment_item.pet_id;
      });
      if (petIndex < 0) {
        distinctPets.push({
          pet_id: appointment_item?.pet_id,
          pet_name: appointment_item?.pet_name,
        });
      }
    });
    setPets(distinctPets);

    setDoctor({
      doctor_id: appointment?.doctor_id,
      doctor_name: appointment?.doctor_name,
    });

    setTimeString(
      `${
        appointment && appointment.start_time
          ? moment(appointment?.start_time, "hh:mm:ss").format("hh:mma")
          : "Start Time"
      } - ${
        appointment && appointment.end_time
          ? moment(appointment?.end_time, "hh:mm:ss").format("hh:mma")
          : "End Time"
      }`
    );
  }, []);

  return (
    <div
      className={`p-5 w-full flex flex-col justify-between rounded-lg shadow-lg hover:shadow-xl border-l-4 ${
        appointment.is_active == 0
          ? "bg-gray-100 border-gray-300 text-gray-400"
          : isUpcoming
          ? "bg-white border-secondary"
          : "bg-primary3 border-primary2"
      }`}
    >
      <div className="flex">
        <p
          className={`mb-1 text-sm ${
            appointment.is_active == 0 ? "text-gray-400" : "text-secondary"
          }`}
        >
          {appointment.is_active == 0
            ? "Cancelled"
            : isUpcoming
            ? "Upcoming"
            : "Visited"}
        </p>
      </div>

      <div className="flex flex-wrap gap-1">
        {services?.map((service, i) => (
          <p
            key={appointment + "service" + i}
            className={`${
              appointment?.is_active == 0 ? "bg-gray-200" : "bg-primary2"
            } text-xs px-3 py-2 rounded-md`}
          >
            {service}
          </p>
        ))}
      </div>

      <div className="flex items-center my-6 relative">
        <div className="">
          <Image
            src={"/Ellipse 6.png"}
            width={40}
            height={40}
            alt={"Pet"}
            className="rounded-full"
          />
        </div>
        <div className=" relative right-3">
          <Image
            src={"/Ellipse 6 (1).png"}
            width={40}
            height={40}
            alt={"Vet"}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-semibold">
          {pets?.map((pet) => pet?.pet_name).join(" & ")}&nbsp; with Dr.{" "}
          {doctor.doctor_name}
        </h4>
        <p className="text-sm">
          {moment(appointment?.date).format("dddd, D MMM, YYYY")}
        </p>
        <p className="text-sm">{timeString}</p>
      </div>

      <div className="flex items-center justify-end mt-3">
        <Button
          color="primary4"
          label="View Details"
          className="w-auto bg-inherit text-xs text-secondary border-2 border-secondary hover:text-white hover:bg-secondary px-6 py-2"
          onClick={() => router.push(`/appointments/${appointment.id}`)}
        />
      </div>
    </div>
  );
};

export default AppointmentCard;
