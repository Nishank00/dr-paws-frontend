"use client";
import React, { useEffect, useState } from "react";
import SeriveItemCard from "./SeriveItemCard";

const Tab = ({ service_items = [] }) => {
  const calculateGridColumns = () => {
    if (service_items.length === 5) {
      console.log(5);
      return "grid-cols-3 gap-10 mx-auto"; // Three columns in the first row, two columns in the second row for small screens
    } else if (service_items.length === 8) {
      console.log(8);

      return "lg:grid-cols-4 gap-5 "; // Four columns for both rows
    } else {
      console.log(3);

      return "lg:grid-cols-3 gap-10 mx-auto"; // Default to three columns
    }
  };
  useEffect(() => {
    console.log("in Tab component=>", service_items);
  }, []);
  return (
    <div className={` grid  grid-cols-1 sm:grid-cols-2  ${calculateGridColumns()} mx-auto `}>
      {service_items &&
        service_items.map((ele, index) => (
          <SeriveItemCard key={"servicetab" + index} {...ele} />
        ))}
    </div>
  );
};

export default Tab;
