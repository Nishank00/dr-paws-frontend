"use client";
import React, { useState, useEffect } from "react";
import ClinicService from "@/services/Clinic.service";
import ClinicCard from "./ClinicCard";
import ImageTextHeader from "../home/ImageTextHeader";

const ClinicPage = () => {
  const [clincs, setClincs] = useState([]);
  const imageurl =
    "https://s3-alpha-sig.figma.com/img/37d3/bc60/7a1b00945dc6061c8504404f9e182a95?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mng8f1sG4q673P1KqIVFct8AqD3p1RcYkJRJnA60qG6DRwcxSmye6iFR1wUaXZlRxKf1X12WB1ZzamYyKCnaDFLvqjhEX-gsFCt4tZLXy-OWc5QXlt0~KvrDb6-0pijH9CUkSmGBvaAbvSjZ6Wv5t2ezAmqiH9bEjt~IpEG7fBJsy~1Yr4SZy5SIpb~UbfETwmWZGqfMUwHkfh0jiSwI6vtOrs-NvihpygH-6ZJjxGpmDFb7cUsm3M-VSvA~xpTUmJtpWHbz6zXKsiVM7WDhon0UaHMXVU~Q9AyDlzaEN7VtkrATb653Ka~bZagHLXr~4K8AyBZGLWMtGXzy4SxFVQ__";

  const getData = () => {
    ClinicService.getData()
      .then((r) => {
        if (r.data.status) {
          setClincs(r.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="pb-10">
      <div className="pt-24">
        <ImageTextHeader
          header={"Come and visit us at our place!"}
          imagePosition={"left"}
          imageUrl={imageurl}
          text={
            "We are opening our homely Dr. Paws clinics across neighbourhoods all over the country. If we’re not near you right now, we hope to be very soon!"
          }
          buttonVisibility={false}
        />
      </div>

      {/* grid section */}
      <div className="text-slate-700 text-center text-3xl leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10">
        Our Clinics
      </div>

      <div className="w-full m-auto mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {clincs &&
          clincs.map((item, index) => (
            <ClinicCard key={index} imageUrl={imageurl} clinic={item} />
          ))}
        <span className="justify-center items-center shadow-sm bg-orange-100 flex max-w-[331px] flex-col px-9 py-12 rounded-lg">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c86bbb0d478f3d8bde31d329a0619c24df3bcebaa6c25902d2bc986a973a6de?apiKey=22a36eade5734692978208fb0d2f5c62&"
            className="aspect-[0.79] object-contain object-center w-[45px] overflow-hidden max-w-full mt-9"
          />
          <div className="text-slate-700 text-center text-3xl leading-9 capitalize self-stretch mt-10 mb-9">
            Where should the next Dr. Paws Clinic be?
          </div>
        </span>
      </div>
    </div>
  );
};
export default ClinicPage;