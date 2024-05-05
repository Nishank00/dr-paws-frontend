import BookingButton from "@/components/ui/BookingButton";
import React from "react";

const NoVisitBox = () => {
  return (
    <div className="justify-center items-center flex max-w-[980px] flex-col px-16 max-md:px-5">
      <div className="flex w-[321px] max-w-full flex-col items-stretch">
        <div className="text-slate-500 text-center text-2xl leading-6 capitalize">
          You haven’t booked any visits yet
        </div>
        <BookingButton className="text-slate-500 text-xl h-[55px] hover:bg-primary hover:text-white  font-bold whitespace-nowrap justify-center items-stretch border border-[color:var(--Secondary-1,#5281A2)] mt-5 px-5 rounded-full border-solid w-[200px] m-auto" />
      </div>
    </div>
  );
};

export default NoVisitBox;
