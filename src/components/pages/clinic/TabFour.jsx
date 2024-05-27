import React from "react";
// Assuming DoctorSlider is either a local component or imported from a library
import DoctorSlider from "./DoctorSlider";

const TabFour = () => {
  // If you need to fetch data or manage state specific to TabFour,
  // you can use useState and useEffect here similar to TabThree.

  return (
    <div className="mt-10">
      <h2
        style={{ fontFamily: "Roca Bold, sans-serif" }}
        className="text-primary font-medium pt-10 text-2xl md:text-[36px] pb-6 text-center"
      >
        Meet the superheroes
      </h2>
      <DoctorSlider />
    </div>
  );
};

export default TabFour;