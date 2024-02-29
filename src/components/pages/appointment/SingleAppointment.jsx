import { useState } from "react";
import AppointmentDetails from "./AppointmentDetails";
import { useRouter } from "next/navigation";
import CancelAppointment from "./CancelAppointment";

const SingleAppointment = ({ appointment_id }) => {
  // Variables
  const router = useRouter();
  const [totalPages, setTotalPages] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  // Methods
  const handleBack = () => {
    if (currentPage === 1) {
      router.push("/appointments");
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const onClickCancel = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="text-primary body-padding-x">
        <div className="pt-4 self-start">
          <button
            type="button"
            onClick={handleBack}
            className={"flex items-center"}
          >
            <span className="text-2xl mr-1">
              <svg
                width="11"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.06077 8.99999L10.0608 1.99999L9.00011 0.939331L0.939453 8.99999L9.00011 17.0607L10.0608 16L3.06077 8.99999Z"
                  fill="#33495F"
                />
              </svg>
            </span>
            <span className="text-xl ml-2 font-open-sans">{"Back"}</span>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center my-16">
          {currentPage === 1 && (
            <AppointmentDetails
              appointment_id={appointment_id}
              onClickCancel={onClickCancel}
            />
          )}

          {currentPage === 2 && (
            <CancelAppointment appointment_id={appointment_id} />
          )}
        </div>
      </div>
    </>
  );
};

export default SingleAppointment;
