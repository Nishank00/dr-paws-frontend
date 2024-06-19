import MasterService from "@/services/Master.service";
import { useEffect, useState } from "react";
import RadioButtonGroup from "./RadioButtonGroup";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import BookingService from "@/services/Booking.service";
import { useToast } from "@/components/ui/ToastProvider";

const RescheduleAppointment = ({ appointment_id }) => {
  // variables
  const showToast = useToast();
  const router = useRouter();
  const [rescheduleReasons, setRescheduleReasons] = useState([]);
  const [selectedRescheduleReason, setSelectedRescheduleReason] =
    useState(null);

  // Methods
  const getRescheduleReasons = () => {
    MasterService.getMastersByCode({ code: "RESCHEDULE_REASON" })
      .then((response) => {
        if (response.data.status) {
          setRescheduleReasons(response.data.data);
        }
      })
      .catch((error) => console.log(error.message));
  };

  const RescheduleBooking = () => {
    if (!selectedRescheduleReason)
      return showToast("Reason not specified", "warning");

    return router.push(
      `/booking?id=${appointment_id}&reason=${selectedRescheduleReason.id}`
    );
  };

  useEffect(() => {
    getRescheduleReasons();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-16 text-center">
      <h2 className="font-bold font-custom-roca text-4xl flex gap-2 mb-8">
        Reschedule Booking
      </h2>

      <div className="bg-primary4 d:px-24 md:py-12 px-8 py-8 flex flex-col items-center rounded-2xl shadow-lg">
        <h3 className="text-2xl font-extrabold ">
          Are you sure you want to reschedule this booking?
        </h3>
        <p>You will receive an email for the rescheduled booking</p>

        <div className="my-10">
          <RadioButtonGroup
            options={rescheduleReasons}
            selectedOption={selectedRescheduleReason}
            onChange={(selectedOption) => {
              setSelectedRescheduleReason(selectedOption);
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          <Button
            onClick={() => router.push("/appointments")}
            color="primary4"
            label="No"
            className="w-full bg-inherit text-lg text-secondary border-2 border-secondary hover:text-white hover:bg-secondary px-6 py-2"
          />

          <Button
            onClick={RescheduleBooking}
            color="primary4"
            label="Yes"
            className="w-full bg-inherit text-lg text-secondary border-2 border-secondary hover:text-white hover:bg-secondary px-6 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default RescheduleAppointment;
