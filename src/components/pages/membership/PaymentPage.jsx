import React from "react";
import PaymentsLeft from "./PaymentsLeft";
import PaymentsRight from "./PaymentsRight";
const PaymentPage = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary4">
      <div className="w-full h-full md:w-[55%]">
        <PaymentsLeft />
      </div>
      <div className="w-full h-full md:w-[45%]">
        <PaymentsRight />
      </div>
    </div>
  );
};

export default PaymentPage;
