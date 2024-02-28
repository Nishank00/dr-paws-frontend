import Button from "@/components/ui/Button";
import BookingService from "@/services/Booking.service";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AppointmentDetails = ({ appointment_id, onClickCancel }) => {
  // Variables
  const router = useRouter();
  const [appointment, setAppointment] = useState({});
  const [pets, setPets] = useState([]);
  const [doctor, setDoctor] = useState({});
  const [timeString, setTimeString] = useState("");
  const [isUpcoming, setIsUpcoming] = useState(false);

  // Methods
  const getAppointmentDetails = () => {
    BookingService.getAppointment(appointment_id)
      .then((response) => {
        if (response.data.status) {
          setAppointment(response.data.data[0]);
        }
      })
      .catch((error) => console.log(error));
  };

  const prepareData = () => {
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
  };

  // Lifecycle Hooks
  useEffect(() => {
    getAppointmentDetails();
  }, []);

  useEffect(() => {
    setPets(
      appointment?.appointment_items?.map((appointment_item) => ({
        pet_id: appointment_item?.pet_id,
        pet_name: appointment_item?.pet_name,
      }))
    );

    setDoctor({
      doctor_id: appointment?.doctor_id,
      doctor_name: appointment?.doctor_name,
    });

    setTimeString(
      `${
        appointment && appointment.start_time
          ? moment(appointment?.start_time, "hh:mm:ss").format("hh:mm A")
          : "Start Time"
      } - ${
        appointment && appointment.end_time
          ? moment(appointment?.end_time, "hh:mm:ss").format("hh:mm A")
          : "End Time"
      }`
    );

    prepareData();
  }, [appointment]);

  return (
    <div className="flex flex-col items-center justify-center my-16">
      <h2 className="font-bold text-4xl flex gap-2 mb-8">Your Booking</h2>

      <div className="bg-primary4 px-24 py-12 flex flex-col items-center rounded-2xl shadow-lg">
        <h3 className="text-2xl font-extrabold ">
          {pets?.map((pet) => pet?.pet_name).join(" & ")}&nbsp;
          {pets?.length > 0 && pets?.length === 1 ? "is" : "are"}&nbsp;scheduled
          with Dr. {doctor.doctor_name}
        </h3>
        <p className="text-lg">
          for{" "}
          {appointment?.appointment_items
            ?.map((appointment_item) => appointment_item?.service_name)
            .join(", ")}
        </p>

        <div className="flex items-center my-12 relative">
          <div className="">
            <Image
              src={"/Ellipse 6.png"}
              width={124}
              height={124}
              alt={"Pet"}
              className="rounded-full"
            />
          </div>
          <div className=" relative right-3">
            <Image
              src={"/Ellipse 6 (1).png"}
              width={124}
              height={124}
              alt={"Vet"}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="">
          <p className="flex items-center gap-2 text-xl mb-4">
            <span className="flex-none w-6">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1569 16.9069C17.2202 17.8435 15.2616 19.8021 13.9138 21.1499C13.1327 21.931 11.8677 21.9314 11.0866 21.1503C9.76234 19.826 7.84159 17.9053 6.84315 16.9069C3.71895 13.7827 3.71895 8.71734 6.84315 5.59315C9.96734 2.46895 15.0327 2.46895 18.1569 5.59315C21.281 8.71734 21.281 13.7827 18.1569 16.9069Z"
                  stroke="#5281A2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 11.25C15.5 12.9069 14.1569 14.25 12.5 14.25C10.8431 14.25 9.5 12.9069 9.5 11.25C9.5 9.59315 10.8431 8.25 12.5 8.25C14.1569 8.25 15.5 9.59315 15.5 11.25Z"
                  stroke="#5281A2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>{appointment?.clinic_name}</span>
          </p>

          <p className="flex items-center gap-2 text-xl mb-4">
            <span className="flex-none w-6">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 7.25V3.25M16.5 7.25V3.25M7.5 11.25H17.5M5.5 21.25H19.5C20.6046 21.25 21.5 20.3546 21.5 19.25V7.25C21.5 6.14543 20.6046 5.25 19.5 5.25H5.5C4.39543 5.25 3.5 6.14543 3.5 7.25V19.25C3.5 20.3546 4.39543 21.25 5.5 21.25Z"
                  stroke="#5281A2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>{moment(appointment?.date).format("dddd, D MMM, YYYY")}</span>
          </p>

          <p className="flex items-center gap-2 text-xl mb-4">
            <span className="flex-none w-6">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 6.25V10.25L13.5 13.25M19.5 10.25C19.5 15.2206 15.4706 19.25 10.5 19.25C5.52944 19.25 1.5 15.2206 1.5 10.25C1.5 5.27944 5.52944 1.25 10.5 1.25C15.4706 1.25 19.5 5.27944 19.5 10.25Z"
                  stroke="#5281A2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>{timeString}</span>
          </p>
        </div>

        <p className="underline text-sm mt-8 mb-6">+ Add to Calendar</p>

        {isUpcoming && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            <Button
              onClick={onClickCancel}
              color="primary4"
              label="Cancel"
              className="w-full bg-inherit text-lg text-secondary border-2 border-secondary hover:text-white hover:bg-secondary px-6 py-2"
            />

            <Button
              color="primary4"
              label="Reschedule"
              className="w-full bg-inherit text-lg text-secondary border-2 border-secondary hover:text-white hover:bg-secondary px-6 py-2"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentDetails;
