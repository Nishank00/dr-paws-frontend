import MasterService from "@/services/Master.service";
import { useEffect, useState } from "react";
import RadioButtonGroup from "./RadioButtonGroup";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import BookingService from "@/services/Booking.service";
import { useToast } from "@/components/ui/ToastProvider";

const CancelAppointment = ({ appointment_id }) => {
  // variables
  const { showToast } = useToast();
  const router = useRouter();
  const [cancelReasons, setCancelReasons] = useState([]);
  const [selectedCancelReason, setSelectedCancelReason] = useState(null);

  // Methods
  const getCancelReasons = () => {
    MasterService.getMastersByCode({ code: "CANCEL_REASON" })
      .then((response) => {
        if (response.data.status) {
          setCancelReasons(response.data.data);
        }
      })
      .catch((error) => console.log(error.message));
  };

  const cancelBooking = () => {
    if (!selectedCancelReason)
      return showToast("Reason not specified", "warning");

    const payload = {
      appointment_id,
      reason_id: selectedCancelReason.id,
      description: null,
    };

    BookingService.cancelBooking(payload)
      .then((response) => {
        if (!response.data.status)
          return showToast(response.data.message, "warning");
        if (response.data.status) {
          showToast(response.data.message, "success");
          return router.push(`/booking/${appointment_id}`);
        }
      })
      .catch((error) => {
        console.error("Error: ", error.message);
        return showToast(error.message, "error");
      });
  };

  useEffect(() => {
    getCancelReasons();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-16">
      <h2 className="font-bold text-4xl flex gap-2 mb-8">Cancel Booking</h2>

      <div className="bg-primary4 px-24 py-12 flex flex-col items-center rounded-2xl shadow-lg">
        <h3 className="text-2xl font-extrabold ">
          Are you sure you want to cancel this booking?
        </h3>
        <p>You will receive a cancellation email for the booking</p>

        <div className="my-10">
          <RadioButtonGroup
            options={cancelReasons}
            selectedOption={selectedCancelReason}
            onChange={(selectedOption) => {
              setSelectedCancelReason(selectedOption);
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
            onClick={cancelBooking}
            color="primary4"
            label="Yes"
            className="w-full bg-inherit text-lg text-secondary border-2 border-secondary hover:text-white hover:bg-secondary px-6 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default CancelAppointment;
