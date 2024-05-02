import React from "react";
import ReviewCard from "./ReviewCard";

const TabThree = () => {
  const gridData = [0, 1, 2];

  return (
    <div className="w-full flex justify-between items-center gap-5">
      {gridData.map((item, index) => (
        <ReviewCard key={"gridDataTab3" + index} index={index} />
      ))}
    </div>
  );
};

export default TabThree;
